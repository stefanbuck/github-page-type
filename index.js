'use strict';

var urlParse = require('url').parse;
var Type = require('./type.js');

function executeTest(test, urlObj) {
  if (test.pathname) {
    return urlObj.pathname === test.pathname;
  } else if (typeof test === 'function') {
    return test(urlObj);
  }
}

function getTypeFromURL (urlObj, list) {
  for (var i = 0; i < list.length; i++) {
    var rule = list[i];

    if (executeTest(rule.test, urlObj)) {
      return rule.name;
    }
  }
  return null;
}

var GitHubPageType = function(url, isFromType) {
  if (!url) {
    throw new Error('Missing argument url');
  }

  var urlObj = urlParse(url);
  if (!urlObj.hostname.match(/github\.com$/)) {
    throw new Error('hostname is not github.com');
  }

  if (urlObj.pathname.length > 1) {
    var paths = urlObj.pathname.slice(1);
    if (paths.charAt(paths.length - 1) === '/') {
      paths = paths.slice(0, -1);
    }
    urlObj.pathlist = paths.split('/');
  } else {
    urlObj.pathlist = [];
  }

  var result,
      lookup = Type;

  if (isFromType) {
    if (!Array.isArray(isFromType)) {
      isFromType = [isFromType];
    }

    lookup = Type.filter(function(item) {
      return isFromType.indexOf(item.name) !== -1;
    });
  }

  result = getTypeFromURL(urlObj, lookup);

  if (isFromType) {
    return !!result;
  }

  return result;
};

// Add constants
for (var i = 0; i < Type.length; i++) {
  var name = Type[i].name;
  GitHubPageType[name] = name;
}

module.exports = GitHubPageType;
