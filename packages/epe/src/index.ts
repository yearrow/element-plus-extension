import Panel from './components/panel/panel.vue';
import ToolBar from './components/tool-bar/tool-bar.vue';
import FlexBox from './components/flex-box/index.vue';
import FlexLine from './components/flex-line/flex-line.vue';
import TableReport from './components/table/table-report'
import Navigation from './components/navigation/navigation.vue'
import FilterItem from './components/filter-item/filter-item.vue';

const components = [
  ToolBar,
  Panel,
  FlexBox,
  FlexLine,
  TableReport,
  Navigation,
  FilterItem
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
  TableReport,
  Navigation,
  FilterItem
};
