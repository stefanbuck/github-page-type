'use strict';

var assert = require('assert');
var ghType = require('./index.js');

var isEqualHelper = function (list, value) {
  describe(value, function () {
    list.forEach(function (url) {
      it(url.replace('!', 'not '), function () {
        var method = 'equal';
        if (url.charAt(0) === '!') {
          method = 'notEqual';
          url = url.slice(1);
        }
        assert[method](ghType(url), value);
      });
    });
  });
};

describe('githubPageType', function () {

  it('throws an error if url is not defined', function () {
    assert.throws(ghType.bind(), /Missing argument url/);
  });

  it('throws an error if hostname is not github.com', function () {
    assert.throws(ghType.bind(null, 'http://google.com'), /hostname is not github.com/);
  });

  it('takes a github url', function () {
    assert.doesNotThrow(ghType.bind(null, 'http://github.com'));
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

  describe('type', function () {

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
      'https://github.com/user/repo/blob/master/.file',
      'https://github.com/user/repo/blob/master/file',
      'https://github.com/user/repo/blob/master/file.js',
      'https://github.com/user/repo/blob/master/folder/.file',
      'https://github.com/user/repo/blob/master/folder/file',
      'https://github.com/user/repo/blob/master/folder/file.js',
      'https://github.com/user/repo/blob/dev/folder/file.js',
      'https://github.com/user/repo/blob/7ce2bf0dfc3e57cf3a2d2cda85224da23a8318b8/file.js',
      '!https://github.com/user/repo/blob/master',
      '!https://github.com/user/repo/blob/dev',
    ], 'REPOSITORY_BLOB');

    isEqualHelper([
      'https://github.com/user/repo/tree/master/folder',
      'https://github.com/user/repo/tree/master',
      'https://github.com/user/repo/tree/dev/folder',
      'https://github.com/user/repo/tree/dev',
      'https://github.com/user/repo/tree/7ce2bf0dfc3e57cf3a2d2cda85224da23a8318b8/folder',
      '!https://github.com/user/repo/tree',
    ], 'REPOSITORY_TREE');

    isEqualHelper([
      'https://github.com/user/repo/commit/4a30c6606465e294d1ae1c9ca394ba03368928f7',
      'https://github.com/user/repo/commit/master',
      '!https://github.com/user/repo/commits',
      '!https://github.com/user/repo/commits/master'
    ], 'REPOSITORY_COMMIT');

    isEqualHelper([
      'https://github.com/user/repo/commits',
      'https://github.com/user/repo/commits/master',
      '!https://github.com/user/repo/commit/4a30c6606465e294d1ae1c9ca394ba03368928f7'
    ], 'REPOSITORY_COMMITS');

    isEqualHelper([
      'https://github.com/user/repo/issues',
      'https://github.com/user/repo/issues?q=is%3Aissue+is%3Aclosed',
    ], 'REPOSITORY_ISSUES');

    isEqualHelper([
      'https://github.com/user/repo/issues/1',
      'https://github.com/user/repo/issues/1#ref-commit-3c8959c',
    ], 'REPOSITORY_ISSUE');

    isEqualHelper([
      'https://github.com/user/repo/pulls',
      'https://github.com/user/repo/pulls?q=is%3Apr+is%3Aclosed',
    ], 'REPOSITORY_PULLS');

    isEqualHelper([
      'https://github.com/user/repo/pull/123',
      'https://github.com/user/repo/pull/123#issue-56141270',
      '!https://github.com/user/repo/pull/123/commits',
      '!https://github.com/user/repo/pull/123/files',
    ], 'REPOSITORY_PULL_CONVERSATION');

    isEqualHelper([
      'https://github.com/user/repo/pull/123/commits',
      '!https://github.com/user/repo/pull/123',
      '!https://github.com/user/repo/pull/123/files',
    ], 'REPOSITORY_PULL_COMMITS');

    isEqualHelper([
      'https://github.com/user/repo/pull/123/files',
      'https://github.com/user/repo/pull/123/files?diff=split',
      '!https://github.com/user/repo/pull/123',
      '!https://github.com/user/repo/pull/123/commits',
    ], 'REPOSITORY_PULL_FILES');

    isEqualHelper([
      'https://github.com/user/repo/compare/master...dev',
      '!https://github.com/user/repo/compare',
    ], 'REPOSITORY_COMPARE');

    isEqualHelper([
      'https://github.com/user/repo/compare',
      '!https://github.com/user/repo/compare/master...dev'
    ], 'REPOSITORY_COMPARE_OVERVIEW');

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
