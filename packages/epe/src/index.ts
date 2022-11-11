import Panel from './components/panel/panel.vue';
import ToolBar from './components/tool-bar/tool-bar.vue';
import FlexBox from './components/flexbox/index.vue';
import FlexLine from './components/flex-line/flex-line.vue';
import Table from './components/table/table'
import Navigation from './components/navigation/navigation.vue'

const components = [
  ToolBar,
  Panel,
  FlexBox,
  FlexLine,
  Table,
  Navigation
];

const install = function (Vue: any) {
  components.map(component => {
    Vue.component(component.name, component);
  });
};

export default {
  install,
  Panel,
  ToolBar,
  FlexBox,
  FlexLine,
  Table,
  Navigation
};
