# vue-laxx

![Rollup badge](https://img.shields.io/badge/Rollup-^0.53.3-ff69b4.svg)
![Jest](https://img.shields.io/badge/Jest-^22.0.4-blue.svg)
![Vue](https://img.shields.io/badge/Vue-^2.5.13-brightgreen.svg)
![Storybook](https://img.shields.io/badge/Storybook-^3.3.3-ff70a3.svg)
![Commitizen](https://img.shields.io/badge/Commitizen-enabled-brightgreen.svg)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
![Npm badge](https://img.shields.io/npm/v/vue-laxx.svg)
[![Build Status](https://travis-ci.org/nakama-design/vue-laxxx.svg?branch=master)](https://travis-ci.org/nakama-design/vue-laxxx)

> A Laxxx project ported to vue

> Generated using [vue-cli-template-library](https://github.com/julon/vue-cli-template-library).

## Installation
```
npm install vue-laxx
```
vue-laxx can be used as a module in both CommonJS and ES modular environments.

When in non-modular environment, vue-laxx will register all the components to vue by itself.</p>

### ES6
```js
//
// You can register a component manually
//
import { VueLaxxx } from 'vue-laxx';

export default {
  ...
  components: {
    'laxxx': VueLaxxx
  },
  ...
};

//
// or register the whole module with vue
//
import VueLaxxx from 'vue-laxx';

// Install this library
Vue.use(VueLaxxx);
```

### CommonJS
```js
//
// You can register a component manually
//
var Vue = require('vue');
var { VueLaxxx } = require('vue-laxx');

var YourComponent = Vue.extend({
  ...
  components: {
    'laxxx': VueLaxxx
  },
  ...
});

//
// or register the whole module with vue
//
var Vue = require('vue');
var VueLaxxx = require('vue-laxx');

// Install this library
Vue.use(VueLaxxx);
```

### Browser

```html
<script src="path/to/vue/vue.min.js"></script>
<script src="path/to/vue-laxx/dist/vue-laxx.min.js"></script>
<!-- Components are registered globally -->
```

### After that, you can use it in your templates:

```html
<laxxx></laxxx>
```

## Changelog

See the GitHub [release history](https://github.com/nakama-design/vue-laxxx/releases).

## Contributing

See [CONTRIBUTING.md](.github/CONTRIBUTING.md).
