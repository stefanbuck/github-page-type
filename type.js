'use strict';

var Type = [];

Type.push({
  name: 'HOME',
  test: /^https?:\/\/github\.com\/?$/g,
  sample: 'https://github.com'
});

var staticTypes = [
  'explore',
  'notifications',
  'showcases',
  'stars',
  'trending',
  'watching',
  'search',
  'about',
  'contact',
  'features',
  'settings/admin',
  'settings/applications',
  'settings/billing',
  'settings/emails',
  'settings/notifications',
  'settings/organizations',
  'settings/profile',
  'settings/repositories',
  'settings/security',
  'settings/ssh'
];

for (var i = 0; i < staticTypes.length; i++) {
  var val = staticTypes[i];
  Type.push({
    name: val.toUpperCase().replace(/\//g, '_'),
    test: new RegExp('^https?:\/\/github\.com\/'+val+'\/?$', 'g'),
    sample: 'https://github.com/' + val
  });
}

Type.push({
  name: 'BLOG',
  test: /^https?:\/\/github\.com\/blog/g,
  sample: 'https://github.com/blog'
});

Type.push({
  name: 'USER_ORGANIZATION_PROFILE',
  test: /^https?:\/\/github\.com\/[^/]+\/?$/g,
  sample: 'https://github.com/user'
});

Type.push({
  name: 'REPOSITORY',
  test: /^https?:\/\/github\.com\/[^/]+\/[^/]+\/?$/g,
  sample: 'https://github.com/user/repo'
});

Type.push({
  name: 'REPOSITORY_SEARCH',
  test: /^https?:\/\/github\.com\/[^/]+\/[^/]+\/search\/?/g,
  sample: 'https://github.com/user/repo/search'
});

// TODO add support for:

// https://github.com/user/repo/blob/master/src/index.js
// https://github.com/user/repo/branches
// https://github.com/user/repo/commits/4a30c6606465e294d1ae1c9ca394ba03368928f7
// https://github.com/user/repo/commits/master
// https://github.com/user/repo/search
// https://github.com/user/repo/tree/master/src
//
// https://github.com/orgs/foo/audit-log
// https://github.com/orgs/foo/people
// https://github.com/orgs/foo/teams
//
// https://github.com/settings/organizations/foo/settings/applications
// https://github.com/settings/organizations/foo/settings/billing
// https://github.com/settings/organizations/foo/settings/hooks
// https://github.com/settings/organizations/foo/settings/oauth_application_policy
// https://github.com/settings/organizations/foo/settings/profile
//
// https://github.com/user/repo/branches/active
// https://github.com/user/repo/branches/all
// https://github.com/user/repo/branches/stale
// https://github.com/user/repo/branches/yours
// https://github.com/user/repo/compare/foo:master...master
// https://github.com/user/repo/graphs/code-frequency
// https://github.com/user/repo/graphs/commit-activity
// https://github.com/user/repo/graphs/contributors
// https://github.com/user/repo/graphs/punch-card
// https://github.com/user/repo/graphs/traffic
// https://github.com/user/repo/issues
// https://github.com/user/repo/issues/123
// https://github.com/user/repo/network
// https://github.com/user/repo/network/members
// https://github.com/user/repo/pull/123
// https://github.com/user/repo/pulls
// https://github.com/user/repo/releases
// https://github.com/user/repo/releases/tag/v0.18.9
// https://github.com/user/repo/settings
// https://github.com/user/repo/settings/collaboration
// https://github.com/user/repo/settings/hooks
// https://github.com/user/repo/settings/keys
// https://github.com/user/repo/stargazers
// https://github.com/user/repo/stargazers/you_know
// https://github.com/user/repo/tags
// https://github.com/user/repo/watchers
// https://github.com/user/repo/wiki
//
// https://gist.github.com/user
// https://gist.github.com/user/4a30c6606465e294d1ae1c9ca394ba03368928f7

module.exports = Type;
