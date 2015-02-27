'use strict';

var assert = require('assert');
var ghType = require('./index.js');

var testBuilder = function(value, list) {
  describe(value, function() {
    list.forEach(function(url) {
      it(url.replace('!', 'not '), function() {
        var method = 'equal';
        if (url.charAt(0) === '!') {
          method = 'notEqual';
        }
        assert[method](ghType(url), value);
      });
    });
  });
};

describe('githubPageType', function() {

  it('throws an error if url is not defined', function () {
    assert.throws(ghType.bind(), 'Missing argument url');
  });

  it('takes an url', function () {
    assert.equal(ghType('https://github.com'), 'HOME');
  });

  it('returns page type', function () {
    assert.equal(ghType('https://github.com'), 'HOME');
  });

  it('returns a true when type was found', function () {
    assert.equal(ghType('https://github.com', 'HOME'), true);
  });

  it('returns a false when type was not found', function () {
    assert.equal(ghType('https://github.com/user', 'HOME'), false);
  });

  it('takes an array', function () {
    assert.equal(ghType('https://github.com', ['HOME']), true);
  });

  describe('type', function() {

    testBuilder('USER_ORGANIZATION_PROFILE', [
      'https://github.com/user',
      'https://github.com/user/',
      'https://github.com/us-er',
      '!https://github.com/us/er',
    ]);

    testBuilder('REPOSITORY', [
      'https://github.com/user/repo',
      'https://github.com/user/repo/',
      'https://github.com/us-er/repo',
      'https://github.com/user/re-po',
      'https://github.com/us-er/re-po',
      '!https://github.com/user',
      '!https://github.com/user/repo/foo',
    ]);

    testBuilder('REPOSITORY_SEARCH', [
      'https://github.com/user/repo/search',
      'https://github.com/user/repo/search/',
      'https://github.com/user/repo/search?utf8=✓&q=foo',
      '!https://github.com/search',
      '!https://github.com/user/search',
      '!https://github.com/user/repo/foo/search',
    ]);

    testBuilder('HOME', [
      'http://github.com',
      'https://github.com',
      'https://github.com/',
      '!https://github.com/foo',
      '!https://foo.github.com',
    ]);

    testBuilder('BLOG', [
      'http://github.com/blog',
      'https://github.com/blog/',
      'https://github.com/blog/foo',
      '!https://github.com/foo',
    ]);

    testBuilder('EXPLORE', ['http://github.com/explore']);
    testBuilder('NOTIFICATIONS', ['http://github.com/notifications']);
    testBuilder('SHOWCASES', ['http://github.com/showcases']);
    testBuilder('STARS', ['http://github.com/stars']);
    testBuilder('TRENDING', ['http://github.com/trending']);
    testBuilder('WATCHING', ['http://github.com/watching']);
    testBuilder('SEARCH', ['http://github.com/search']);
    testBuilder('SETTINGS_ADMIN', ['http://github.com/settings/admin']);
    testBuilder('SETTINGS_APPLICATIONS', ['http://github.com/settings/applications']);
    testBuilder('SETTINGS_BILLING', ['https://github.com/settings/billing']);
    testBuilder('SETTINGS_EMAILS', ['https://github.com/settings/emails']);
    testBuilder('SETTINGS_NOTIFICATIONS', ['https://github.com/settings/notifications']);
    testBuilder('SETTINGS_ORGANIZATIONS', ['https://github.com/settings/organizations']);
    testBuilder('SETTINGS_PROFILE', ['https://github.com/settings/profile']);
    testBuilder('SETTINGS_REPOSITORIES', ['https://github.com/settings/repositories']);
    testBuilder('SETTINGS_SECURITY', ['https://github.com/settings/security']);
    testBuilder('SETTINGS_SSH', ['https://github.com/settings/ssh']);

  });
});
