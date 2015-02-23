'use strict';

var assert = require('assert');
var ghType = require('./index.js');

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

  describe('githubPageType', function() {

    it('static type', function () {
      assert.equal(ghType('https://github.com'), 'HOME');
      assert.equal(ghType('https://github.com/blog'), 'BLOG');
      assert.equal(ghType('https://github.com/explore'), 'EXPLORE');
      assert.equal(ghType('https://github.com/notifications'), 'NOTIFICATIONS');
      assert.equal(ghType('https://github.com/showcases'), 'SHOWCASES');
      assert.equal(ghType('https://github.com/stars'), 'STARS');
      assert.equal(ghType('https://github.com/trending'), 'TRENDING');
      assert.equal(ghType('https://github.com/watching'), 'WATCHING');
      assert.equal(ghType('https://github.com/search'), 'SEARCH');
      assert.equal(ghType('https://github.com/settings/admin'), 'SETTINGS_ADMIN');
      assert.equal(ghType('https://github.com/settings/applications'), 'SETTINGS_APPLICATIONS');
      assert.equal(ghType('https://github.com/settings/billing'), 'SETTINGS_BILLING');
      assert.equal(ghType('https://github.com/settings/emails'), 'SETTINGS_EMAILS');
      assert.equal(ghType('https://github.com/settings/notifications'), 'SETTINGS_NOTIFICATIONS');
      assert.equal(ghType('https://github.com/settings/organizations'), 'SETTINGS_ORGANIZATIONS');
      assert.equal(ghType('https://github.com/settings/profile'), 'SETTINGS_PROFILE');
      assert.equal(ghType('https://github.com/settings/repositories'), 'SETTINGS_REPOSITORIES');
      assert.equal(ghType('https://github.com/settings/security'), 'SETTINGS_SECURITY');
      assert.equal(ghType('https://github.com/settings/ssh'), 'SETTINGS_SSH');
    });

    it('user or organization', function() {
      assert.equal(ghType('https://github.com/user'), 'USER_ORGANIZATION_PROFILE');
      assert.equal(ghType('https://github.com/user/'), 'USER_ORGANIZATION_PROFILE');
      assert.equal(ghType('https://github.com/us-er'), 'USER_ORGANIZATION_PROFILE');
      assert.notEqual(ghType('https://github.com/us/er'), 'USER_ORGANIZATION_PROFILE');
    });

    it('repository', function() {
      assert.equal(ghType('https://github.com/user/repo'), 'REPOSITORY');
      assert.equal(ghType('https://github.com/user/repo/'), 'REPOSITORY');
      assert.equal(ghType('https://github.com/user/re-po'), 'REPOSITORY');
      assert.equal(ghType('https://github.com/us-er/repo'), 'REPOSITORY');
      assert.equal(ghType('https://github.com/us-er/re-po'), 'REPOSITORY');
      assert.notEqual(ghType('https://github.com/user/repo/foo'), 'REPOSITORY');
    });
  });
});
