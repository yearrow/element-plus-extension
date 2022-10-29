import FlexBox from './components/flex-box/flex-box.vue';
import Panel from './components/panel/panel.vue';
import ToolBar from './components/tool-bar/tool-bar.vue';
import FlexLine from './components/flex-line/flex-line.vue';

const components = [
  FlexBox,
  Panel,
  ToolBar,
  FlexLine
];

const install = function (Vue: any) {
  components.map(component => {
    Vue.component(component.name, component);
  });
};

export default {
  install,
  FlexBox,
  Panel,
  ToolBar
};
