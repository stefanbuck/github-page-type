'use strict';

var ghType = require('./index.js');

suite('dynamic', function() {
  bench('user', function () {
    ghType('https://github.com/user');
  });
  bench('user/repo', function () {
    ghType('https://github.com/user/repo');
  });
  bench('user/repo/search', function () {
    ghType('https://github.com/user/repo/search');
  });
});

suite('static', function() {
  bench('home', function () {
    ghType('https://github.com');
  });
  bench('blog', function () {
    ghType('https://github.com/blog');
  });
  bench('explore', function () {
    ghType('https://github.com/explore');
  });
  bench('notifications', function () {
    ghType('https://github.com/notifications');
  });
  bench('showcases', function () {
    ghType('https://github.com/showcases');
  });
  bench('stars', function () {
    ghType('https://github.com/stars');
  });
  bench('trending', function () {
    ghType('https://github.com/trending');
  });
  bench('watching', function () {
    ghType('https://github.com/watching');
  });
  bench('search', function () {
    ghType('https://github.com/search');
  });
  bench('settings/admin', function () {
    ghType('https://github.com/settings/admin');
  });
  bench('settings/applications', function () {
    ghType('https://github.com/settings/applications');
  });
  bench('settings/billing', function () {
    ghType('https://github.com/settings/billing');
  });
  bench('settings/emails', function () {
    ghType('https://github.com/settings/emails');
  });
  bench('settings/notifications', function () {
    ghType('https://github.com/settings/notifications');
  });
  bench('settings/organizations', function () {
    ghType('https://github.com/settings/organizations');
  });
  bench('settings/profile', function () {
    ghType('https://github.com/settings/profile');
  });
  bench('settings/repositories', function () {
    ghType('https://github.com/settings/repositories');
  });
  bench('settings/security', function () {
    ghType('https://github.com/settings/security');
  });
  bench('settings/ssh', function () {
    ghType('https://github.com/settings/ssh');
  });
});
