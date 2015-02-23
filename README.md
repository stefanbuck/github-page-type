# github-page-type
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url]

Returns a page type for the given github url.



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



## Install

```bash
$ npm install --save github-page-type
```



## License

Copyright (c) 2015 Stefan Buck. Licensed under the MIT license.



[npm-url]: https://npmjs.org/package/github-page-type
[npm-image]: https://badge.fury.io/js/github-page-type.svg
[travis-url]: https://travis-ci.org/github-linker/github-page-type
[travis-image]: https://travis-ci.org/github-linker/github-page-type.svg?branch=master
