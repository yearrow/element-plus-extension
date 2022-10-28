<template>
  <yl-flex-box>
    <template #fixed>
      <yl-tool-bar :divider="false" >
        <!-- <template v-slot:filter>
          <el-row :gutter="12">
            <el-col :span="6">
              <el-input v-model="input" placeholder="请输入内容"  ></el-input>
            </el-col>
            <el-col :span="6">
              <el-input v-model="input" placeholder="请输入内容"  ></el-input>
            </el-col>
            <el-col :span="4">
              <el-button type="info" :icon="Search" plain >查询</el-button>
            </el-col>
          </el-row>
        </template> -->
        <flexLine />
      </yl-tool-bar>
    </template>
    <template #flex>
    </template>
  </yl-flex-box>
</template>
<script setup lang="ts">
import { Search } from '@element-plus/icons-vue'
import flexLine from '../../../src/components/line-flex/line-flex.vue'
const { ref } = Vue
const input = ref('')
</script>