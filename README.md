# github-page-type
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url]

Returns a page type for the given github url.



## Install

```bash
$ npm install --save github-page-type
```



## Usage

```js
githubPageType('https://github.com/github-linker'));
// => USER_ORGANIZATION_PROFILE

githubPageType('https://github.com/blog'));
// => BLOG

githubPageType('https://github.com/github-linker/core'));
// => REPOSITORY

githubPageType('https://github.com/blog', githubPageType.BLOG));
// => true

githubPageType('https://github.com/blog', [githubPageType.USER_ORGANIZATION_PROFILE]));
// => false
```



## Available types

###USER_ORGANIZATION_PROFILE
This matches to https://github.com/foo

###REPOSITORY
This matches to https://github.com/foo/bar

###HOME
This matches to https://github.com/

###BLOG
This matches to https://github.com/blog

###EXPLORE
This matches to https://github.com/explore

###NOTIFICATIONS
This matches to https://github.com/notifications

###SHOWCASES
This matches to https://github.com/showcases

###STARS
This matches to https://github.com/stars

###TRENDING
This matches to https://github.com/trending

###WATCHING
This matches to https://github.com/watching

###SEARCH
This matches to https://github.com/search

###SETTINGS_ADMIN
This matches to https://github.com/settings/admin

###SETTINGS_APPLICATIONS
This matches to https://github.com/settings/applications

###SETTINGS_BILLING
This matches to https://github.com/settings/billing

###SETTINGS_EMAILS
This matches to https://github.com/settings/email

###SETTINGS_NOTIFICATIONS
This matches to https://github.com/settings/notifications

###SETTINGS_ORGANIZATIONS
This matches to https://github.com/settings/organizations

###SETTINGS_PROFILE
This matches to https://github.com/settings/profile

###SETTINGS_REPOSITORIES
This matches to https://github.com/settings/repositories

###SETTINGS_SECURITY
This matches to https://github.com/settings/security

###SETTINGS_SSH
This matches to https://github.com/settings/ssh



## License

Copyright (c) 2015 Stefan Buck. Licensed under the MIT license.



[npm-url]: https://npmjs.org/package/github-page-type
[npm-image]: https://badge.fury.io/js/github-page-type.svg
[travis-url]: https://travis-ci.org/github-linker/github-page-type
[travis-image]: https://travis-ci.org/github-linker/github-page-type.svg?branch=master
