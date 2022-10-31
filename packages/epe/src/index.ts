import Panel from './components/panel/panel.vue';
import ToolBar from './components/tool-bar/tool-bar.vue';

const components = [
  ToolBar,
  Panel
];

const install = function (Vue: any) {
  components.map(component => {
    Vue.component(component.name, component);
  });
};

export default {
  install,
  Panel,
  ToolBar
};
