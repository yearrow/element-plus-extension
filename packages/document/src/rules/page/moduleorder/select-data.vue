<template>
  <yl-flex-box>
    <template #fixed>
      <yl-tool-bar :divider="false">
        <template v-slot:filter>
          <el-form  label-position="left" label-width="90px" >
            <el-row :gutter="12">
              <el-col :xs="12" :sm="12" :md="10" :lg="8" :xl="6">
                <el-form-item label="扩展过滤器">
                  <el-input v-model="input" placeholder="请输入内容"></el-input>
                </el-form-item>
              </el-col>
              <el-col :xs="12" :sm="12" :md="10" :lg="8" :xl="6">
                <el-form-item label="扩展过滤器">
                  <el-input v-model="input" placeholder="请输入内容"></el-input>
                </el-form-item>
              </el-col>
              <el-col :xs="12" :sm="12" :md="10" :lg="8" :xl="6">
                <el-form-item label="扩展过滤器">
                  <el-input v-model="input" placeholder="请输入内容"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="2">
                <el-button type="info" :icon="Search" plain style="margin-bottom:10px">查询</el-button>
              </el-col>
            </el-row>
          </el-form>
        </template>
      </yl-tool-bar>
    </template>
    <template #flex>
    自适应区域
    </template>
  </yl-flex-box>
</template>

<script setup lang="ts">
import { Search, Edit, Delete, ZoomIn } from '@element-plus/icons-vue';

const { ref } = Vue;
const input = ref('');
</script>
