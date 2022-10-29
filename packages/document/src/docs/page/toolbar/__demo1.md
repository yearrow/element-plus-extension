####  展开更多


:::demo  

```html
<template>
   <yl-tool-bar more>
    <template v-slot:more>
      <el-form  label-position="right" label-width="80px" size="small" >
        <el-row>
          <el-col :xs="24" :sm="12" :md="8" :lg="6" :xl="4">
            <el-form-item label="扩展过滤器">
              <el-input v-model="input" size="small" placeholder="请输入内容"></el-input>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12" :md="8" :lg="6" :xl="4">
            <el-form-item label="扩展过滤器">
              <el-input v-model="input" size="small" placeholder="请输入内容"></el-input>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12" :md="8" :lg="6" :xl="4">
            <el-form-item label="扩展过滤器">
              <el-input v-model="input" size="small" placeholder="请输入内容"></el-input>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12" :md="8" :lg="6" :xl="4">
            <el-form-item label="扩展过滤器">
              <el-input v-model="input" size="small" placeholder="请输入内容"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </template>
    <template v-slot:filter>
      <el-form  label-position="right" label-width="80px" size="small" >
        <el-row>
          <el-col :xs="24" :sm="12" :md="8" :lg="6" :xl="4">
            <el-form-item label="过滤名称">
              <el-input v-model="input" size="small" placeholder="请输入内容"></el-input>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12" :md="8" :lg="6" :xl="4">
            <el-form-item label="过滤名称">
              <el-input v-model="input" size="small" placeholder="请输入内容"></el-input>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12" :md="8" :lg="6" :xl="4">
            <el-form-item label="过滤名称">
              <el-input v-model="input" size="small" placeholder="请输入内容"></el-input>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12" :md="8" :lg="6" :xl="4">
            <el-form-item label="过滤名称">
              <el-input v-model="input" size="small" placeholder="请输入内容"></el-input>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12" :md="8" :lg="6" :xl="4">
            <el-form-item label="过滤名称">
              <el-input v-model="input" size="small" placeholder="请输入内容"></el-input>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12" :md="8" :lg="6" :xl="4">
            <el-form-item label="过滤名称">
              <el-input v-model="input" size="small" placeholder="请输入内容"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="3">
            <el-form-item label-width="15px">
              <el-button type="info" size="small" class="el-icon-search" > 查询</el-button>
            </el-form-item >
          </el-col>
        </el-row>
      </el-form>
    </template>
      <el-button>操作按钮1</el-button>
      <el-button>操作按钮2</el-button>
      <el-button>操作按钮3</el-button>
  </yl-tool-bar>
</template>

<script lang="ts" setup>
import {
  Check,
  Delete,
  Edit,
  Message,
  Search,
  Star,
} from '@element-plus/icons-vue'
</script>
```
:::