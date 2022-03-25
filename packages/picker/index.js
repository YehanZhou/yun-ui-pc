import YPicker from './src/picker';

/* istanbul ignore next */
YPicker.install = function(Vue) {
  Vue.component(YPicker.name, YPicker);
};

export default YPicker;
