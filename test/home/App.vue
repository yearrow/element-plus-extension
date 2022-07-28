<template>
    <div>
      <yl-panel
    title="过滤参数"
    :show-header="true"
    :show-toolbar="true"
  > 哈哈哈哈哈</yl-panel>
    </div>
</template>

<script lang="ts">
const { onMounted, toRefs, reactive, defineComponent } = Vue
export default defineComponent({
  setup() {
    const state = reactive({
      treeData: [],
    })
    onMounted(() => {
      state.treeData = [
        {
          label: 'Level one 1',
          children: [
            {
              label: 'Level two 1-1',
              children: [
                {
                  label: 'Level three 1-1-1',
                },
              ],
            },
          ],
        },
      ]
    })
    const handleClick = (data: any) => {
      console.log('click', data)
    }
    return {
      ...toRefs(state),
    }
  },
})
</script>

<style lang="less" scoped>
.card {
  width: 100px;
  height: 100px;
  background: #ccc;
  margin-right: 10px;
  flex-shrink: 0;
  white-space: nowrap;
}
</style>
