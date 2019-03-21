import VueLaxxx from "./components/Laxxx";

const LibraryModule = {
  VueLaxxx,

  install(Vue) {
    // Register components with vue
    Vue.component("laxxx", VueLaxxx);
  }
};

// Export library
export default LibraryModule;

// Export components
export { VueLaxxx };
