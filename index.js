import src from './src/index.vue';

const install = function(Vue) {
  Vue.component(src.name, src);
};

export default {
  install
};
