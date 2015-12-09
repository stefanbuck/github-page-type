# github-page-type
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url]

Returns a page type for the given github url.



## Install

```bash
$ npm install --save github-page-type
```



## Usage

```js
githubPageType('https://github.com/octo-linker');
// => USER_ORGANIZATION_PROFILE

githubPageType('https://github.com/blog');
// => BLOG

githubPageType('https://github.com/octo-linker/core');
// => REPOSITORY

githubPageType('https://github.com/blog', githubPageType.BLOG);
// => true

githubPageType('https://github.com/blog', [githubPageType.USER_ORGANIZATION_PROFILE]);
// => false
```



## Available types

Type|Sample
---|---
HOME|https://github.com
EXPLORE|https://github.com/explore
NOTIFICATIONS|https://github.com/notifications
SHOWCASES|https://github.com/showcases
STARS|https://github.com/stars
TRENDING|https://github.com/trending
WATCHING|https://github.com/watching
SEARCH|https://github.com/search
ABOUT|https://github.com/about
CONTACT|https://github.com/contact
FEATURES|https://github.com/features
SETTINGS_ADMIN|https://github.com/settings/admin
SETTINGS_APPLICATIONS|https://github.com/settings/applications
SETTINGS_BILLING|https://github.com/settings/billing
SETTINGS_EMAILS|https://github.com/settings/emails
SETTINGS_NOTIFICATIONS|https://github.com/settings/notifications
SETTINGS_ORGANIZATIONS|https://github.com/settings/organizations
SETTINGS_PROFILE|https://github.com/settings/profile
SETTINGS_REPOSITORIES|https://github.com/settings/repositories
SETTINGS_SECURITY|https://github.com/settings/security
SETTINGS_SSH|https://github.com/settings/ssh
BLOG|https://github.com/blog
USER_ORGANIZATION_PROFILE|https://github.com/user
REPOSITORY|https://github.com/user/repo
REPOSITORY_BLOB|https://github.com/user/repo/blob/master/file
REPOSITORY_TREE|https://github.com/user/repo/tree/master/folder
REPOSITORY_COMMIT|https://github.com/user/repo/commit/4a30c6606465e294d1ae1c9ca394ba03368928f7
REPOSITORY_COMMITS|https://github.com/user/repo/commits/master
REPOSITORY_SEARCH|https://github.com/user/repo/search
REPOSITORY_ISSUES|https://github.com/user/repo/issues
REPOSITORY_ISSUE|https://github.com/user/repo/issues/123
REPOSITORY_PULLS|https://github.com/user/repo/pulls
REPOSITORY_PULL_CONVERSATION|https://github.com/user/repo/pull/123
REPOSITORY_PULL_COMMITS|https://github.com/user/repo/pull/123/commits
REPOSITORY_PULL_FILES|https://github.com/user/repo/pull/123/files
REPOSITORY_COMPARE|https://github.com/user/repo/compare/master...dev
REPOSITORY_COMPARE_OVERVIEW|https://github.com/user/repo/compare



## License

Copyright (c) 2015 Stefan Buck. Licensed under the MIT license.



[npm-url]: https://npmjs.org/package/github-page-type
[npm-image]: https://badge.fury.io/js/github-page-type.svg
[travis-url]: https://travis-ci.org/octo-linker/github-page-type
[travis-image]: https://travis-ci.org/octo-linker/github-page-type.svg?branch=master
