'use strict';

var assert = require('assert');
var ghType = require('./index.js');

var isEqualHelper = function(list, value) {
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

    isEqualHelper([
      'https://github.com/user',
      'https://github.com/user/',
      'https://github.com/us-er',
      '!https://github.com/us/er',
    ], 'USER_ORGANIZATION_PROFILE');

    isEqualHelper([
      'https://github.com/user/repo',
      'https://github.com/user/repo/',
      'https://github.com/us-er/repo',
      'https://github.com/user/re-po',
      'https://github.com/us-er/re-po',
      '!https://github.com/user',
      '!https://github.com/user/repo/foo',
    ], 'REPOSITORY');

    isEqualHelper([
      'https://github.com/user/repo/search',
      'https://github.com/user/repo/search/',
      'https://github.com/user/repo/search?utf8=✓&q=foo',
      '!https://github.com/search',
      '!https://github.com/user/search',
      '!https://github.com/user/repo/foo/search',
    ], 'REPOSITORY_SEARCH');

    isEqualHelper([
      'http://github.com',
      'https://github.com',
      'https://github.com/',
      '!https://github.com/foo',
      '!https://foo.github.com',
    ], 'HOME');

    isEqualHelper([
      'http://github.com/blog',
      'https://github.com/blog/',
      'https://github.com/blog/foo',
      '!https://github.com/foo',
    ], 'BLOG');

    isEqualHelper(['http://github.com/explore'], 'EXPLORE');
    isEqualHelper(['http://github.com/notifications'], 'NOTIFICATIONS');
    isEqualHelper(['http://github.com/showcases'], 'SHOWCASES');
    isEqualHelper(['http://github.com/stars'], 'STARS');
    isEqualHelper(['http://github.com/trending'], 'TRENDING');
    isEqualHelper(['http://github.com/watching'], 'WATCHING');
    isEqualHelper(['http://github.com/search'], 'SEARCH');
    isEqualHelper(['http://github.com/about'], 'ABOUT');
    isEqualHelper(['http://github.com/contact'], 'CONTACT');
    isEqualHelper(['http://github.com/features'], 'FEATURES');
    isEqualHelper(['http://github.com/settings/admin'], 'SETTINGS_ADMIN');
    isEqualHelper(['http://github.com/settings/applications'], 'SETTINGS_APPLICATIONS');
    isEqualHelper(['https://github.com/settings/billing'], 'SETTINGS_BILLING');
    isEqualHelper(['https://github.com/settings/emails'], 'SETTINGS_EMAILS');
    isEqualHelper(['https://github.com/settings/notifications'], 'SETTINGS_NOTIFICATIONS');
    isEqualHelper(['https://github.com/settings/organizations'], 'SETTINGS_ORGANIZATIONS');
    isEqualHelper(['https://github.com/settings/profile'], 'SETTINGS_PROFILE');
    isEqualHelper(['https://github.com/settings/repositories'], 'SETTINGS_REPOSITORIES');
    isEqualHelper(['https://github.com/settings/security'], 'SETTINGS_SECURITY');
    isEqualHelper(['https://github.com/settings/ssh'], 'SETTINGS_SSH');

  });
});
