import VueLaxxx, * as VueLaxxxAll from "./index";

// Automatically register components if Vue is available globally
if (typeof window !== "undefined" && window.Vue) {
  window.Vue.use(VueLaxxx);
}

export default VueLaxxxAll;
