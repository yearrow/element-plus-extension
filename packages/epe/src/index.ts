// import FlexBox from './components/flex-box/flex-box.vue';
import Panel from './components/panel/panel.vue';
import ToolBar from './components/tool-bar/tool-bar.vue';

const components = [
  ToolBar
];

const install = function (Vue: any) {
  components.map(component => {
    console.log(component.name)
    Vue.component(component.name, component);
  });
};

export default {
  install,
  // FlexBox,
  Panel,
  ToolBar
};
