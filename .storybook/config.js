import { configure } from '@storybook/vue';
import Vue from 'vue';

// Import your custom components.
import VueLaxxx from '@/index';

// Install this library
Vue.use(VueLaxxx);

import './style.css'

// Install Vue plugins
// ex: Vue.use(vuex)

// Load stories
const req = require.context("../stories", true, /\.stories\.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}
configure(loadStories, module);