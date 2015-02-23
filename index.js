'use strict';

var Type = require('./type.js');

function getTypeFromURL (url, list) {
  for (var i = 0; i < list.length; i++) {
    var rule = list[i];

    if(!!url.match(rule.test)) {
      return rule.name;
    }
  }
  return null;
}

var GitHubPageType = function(url, isFromType) {
  if (!url) {
    throw new Error('Missing argument url');
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

  result = getTypeFromURL(url, lookup);

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
