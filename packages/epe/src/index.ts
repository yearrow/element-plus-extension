import Panel from './components/panel/panel.vue';
import ToolBar from './components/tool-bar/tool-bar.vue';
import FlexBox from './components/flex-box/index.vue';
import FlexLine from './components/flex-line/flex-line.vue';
import Navigation from './components/navigation/navigation.vue'; // 临时组件
import FilterItem from './components/filter-item/filter-item.vue';
import TableReport from './components/table/table-report';
import TableOnly from './components/table/table-only'
import TableAsync from './components/table/table-async'
import TableNext from './components/table/table-next'
import Box from './components/box/box.vue'

const components = [
  ToolBar,
  Panel,
  FlexBox,
  FlexLine,
  Navigation,
  FilterItem,
  TableReport,
  TableOnly,
  TableAsync,
  TableNext,
  Box
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
  Navigation,
  FilterItem,
  TableReport,
  TableOnly,
  TableAsync,
  TableNext,
  Box
};
