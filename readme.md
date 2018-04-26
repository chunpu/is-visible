isvisible
===

[![Build status][travis-image]][travis-url]
[![NPM version][npm-image]][npm-url]
[![Downloads][downloads-image]][downloads-url]
[![Dependency Status][david-image]][david-url]

[npm-image]: https://img.shields.io/npm/v/isvisible.svg?style=flat-square
[npm-url]: https://npmjs.org/package/isvisible
[downloads-image]: http://img.shields.io/npm/dm/isvisible.svg?style=flat-square
[downloads-url]: https://npmjs.org/package/isvisible
[david-image]: http://img.shields.io/david/chunpu/is-visible.svg?style=flat-square
[david-url]: https://david-dm.org/chunpu/is-visible


Check if the element is visible and clickable

Installation
---

```sh
npm i isvisible
```

Usage
---

`isVisible` will check if a element is

- `overflow: hidden` by parent node
- `opacity: 0` on self or parent node
- `display: none` `visibility: hidden` `hidden: true` on self or parent node
- Covered by other element

Use with [browserify](https://github.com/substack/node-browserify)

```js
var isVisible = require('isvisible')
console.log(isVisible(element))
```

Use [isvisible.js](browser/browser.js) Directly <https://cdn.rawgit.com/chunpu/is-visible/gh-pages/browser/browser.js>


Advanced
---

Check strictly

```js
isVisible(element, true)
```

strict check will check

- `opacity > 0.9`
- top left point and mid point is not covered by other element

Support
---

Firefox, Chrome... even IE6+

> IE9- cannot support opacicy set inherit from parent check


Where to Use
---

Make sure your **AD** and **Promotion** are really show in web pages

License
---

[![License][license-image]][license-url]

[travis-image]: https://img.shields.io/travis/chunpu/is-visible.svg?style=flat-square
[travis-url]: https://travis-ci.org/chunpu/is-visible
[license-image]: http://img.shields.io/npm/l/isvisible.svg?style=flat-square
[license-url]: #
