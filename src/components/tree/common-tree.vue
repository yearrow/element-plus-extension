<template>
  <div class="common-tree">
    <div class="common-tree-filter">
      <el-input
        v-if="!isLazy&&isFilter"
        v-model="filterText"
        clearable
        :expand-on-click-node="true"
        placeholder="请输入关键字"
        style="padding-bottom:var(--layout-gap-base)"
      >
        <template #suffix>
          <el-icon>
            <Search />
          </el-icon>
        </template>
      </el-input>
    </div>
    <div class="common-tree-content">
      <el-tree
        ref="treeRef"
        :data="data"
        :props="defaultProps"
        :lazy="isLazy"
        :load="loadNode"
        :expand-on-click-node="false"
        :render-content="renderTree"
        highlight-current
        :filter-node-method="filterNode"
        :show-checkbox="multiple"
        :check-strictly="multiple"
        node-key="id"
        :default-expanded-keys="defaultExpanded"
        :default-checked-keys="defaultChecked"
        @node-click="handleNodeClick"
        @check="selectChange"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { FolderOpened, Folder, Document, Search } from '@element-plus/icons-vue'
import { Tree, DefaultProps } from './tree'
// import type { ElTree } from 'element-plus'
const { defineComponent, ref, watch, onMounted } = Vue
const { ElTree, ElIcon } = ElementPlus

export interface Props {
  data: Tree[]
  isFilter: boolean
  defaultProps: DefaultProps
  rootNode: Tree
  multiple: boolean
  defaultExpandedKeys: []
  defaultCheckedKeys: []
}
export default defineComponent({
  components: {
    Search,
    FolderOpened,
    Folder,
    Document
  },
  props: {
    data: {
      type: Array,
      default: function () {
        return []
      }
    },
    isFilter: {
      type: Boolean,
      default: function () {
        return false
      }
    },
    isLazy: {
      type: Boolean,
      default: function () {
        return false
      }
    },
    defaultProps: {
      type: Object,
      default: function () {
        return {
          children: 'children',
          label: 'name',
          isLeaf: 'leaf'
        }
      }
    },
    // 多选
    multiple: {
      type: Boolean,
      default: function () {
        return false
      }
    },
    // 默认展开层级
    defaultExpandedKeys: {
      type: Array,
      default: () => []
    },
    defaultCheckedKeys: {
      type: Array,
      default: () => []
    },
    rootNode: {
      type: Object,
      default: function () {
        return {}
      }
    }
  },
  emits: ['nodeClick', 'loadData', 'select', 'getCheckdNodes'],
  setup(props: Props, context: any) {
    const handleNodeClick = (data: Tree) => {
      context.emit('nodeClick', data)
    }
    const filterText = ref('')
    const treeRef = ref<InstanceType<typeof ElTree>>(null)
    watch(filterText, (val: string) => {
      treeRef.value!.filter(val)
    })
    const filterNode = (value: string, data: Tree) => {
      if (!value) return true
      return data[props.defaultProps.label].includes(value)
    }
    const selectChange = (node: any, data: []) => {
      context.emit('select', node, data)
      getCheckedNodes()
    }
    const getCheckedNodes = () => {
      context.emit(
        'getCheckdNodes',
        treeRef.value!.getCheckedNodes(false, false)
      )
    }
    // 懒加载
    const loadNode = async (node: Node, resolve: (data: Tree[]) => void) => {
      context.emit('loadData', node, resolve)
    }
    const renderTree = (
      h: any,
      {
        node,
        data,
        store
      }: {
        node: Node
        data: Tree
        store: Node['store']
      }
    ) => {
      return h(
        'span',
        {
          class: 'custom-tree-node'
        },
        h(
          ElIcon,
          {
            style: {
              color: 'var(--el-color-primary-light-1)',
              paddingRight: '4px'
            }
          },
          h(computeIcon(node))
        ),
        h('span', null, data[props.defaultProps.label])
      )
    }
    const computeIcon = (node: Node) => {
      if (node.isLeaf) {
        return Document
      } else if (node.expanded && !node.isLeaf) {
        return FolderOpened
      } else {
        return Folder
      }
    }
    const defaultExpanded = ref([])
    const defaultChecked = ref([])
    watch(props, (option: Props) => {
      if (option.defaultExpandedKeys.length > 0) {
        defaultExpanded.value = option.defaultExpandedKeys
      } else {
        defaultExpanded.value = option.data[0] ? [option.data[0].id] : []
      }
      if (option.defaultCheckedKeys.length > 0) {
        defaultChecked.value = option.defaultCheckedKeys
      } else {
        defaultChecked.value = option.data[0] ? [option.data[0].id] : []
      }
    })
    onMounted(() => {
      if (props.defaultExpandedKeys.length > 0) {
        defaultExpanded.value = props.defaultExpandedKeys
      } else {
        defaultExpanded.value = props.data[0] ? [props.data[0].id] : []
      }
      if (props.defaultCheckedKeys.length > 0) {
        defaultChecked.value = props.defaultCheckedKeys
      } else {
        defaultChecked.value = props.data[0] ? [props.data[0].id] : []
      }
    })
    return {
      handleNodeClick,
      renderTree,
      filterText,
      filterNode,
      treeRef,
      loadNode,
      selectChange,
      defaultExpanded,
      defaultChecked
    }
  }
})
</script>

<style lang="less" scoped>
.common-tree {
  display: flex;
  flex-direction: column;
  height: 100%;
  .common-tree-filter {
  }
  .common-tree-content {
    flex: 1;
    overflow: auto;
  }
}
</style>
