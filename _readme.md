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
