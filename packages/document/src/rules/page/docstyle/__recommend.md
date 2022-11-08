
文案样式影响着界面中信息传达的效率和准确性，界面中文案样式应符合相应的文本规范，并保持简洁清晰和表达一致。

### 日期与时间

时间是界面中很常用的数据格式，规定统一使用24小时制，最大程度避免因格式不统一而带来的困惑与误解。

<table style="width:90%">
  <thead>
    <tr><td>类别</td><td>描述</td><td>示例</td></tr>
  </thead>
  <tbody>
    <tr><td>年-月-日</td><td></td><td>2022-01-01</td></tr>
    <tr><td>时:分</td><td>24小时制</td><td>17:12</td></tr>
    <tr><td>时:分:秒</td><td>24小时制</td><td>17:12:02</td></tr>
    <tr><td>年-月-日 时:分</td><td>24小时制</td><td>2022-01-01 17:12</td></tr>
    <tr><td>年-月-日 时:分:秒</td><td>24小时制</td><td>2022-01-01 17:12:02</td></tr>
  </tbody>
</table>



### 通用标点符号


<div style="line-height:3">
  使用半角的「…」作为省略号。
  <el-row :gutter="10">
    <el-col :span="24">
      <image src="./img/省略号.jpg" style="width:90%"></image>
    </el-col>
  </el-row>
  破折号应占两个汉字空间。
  <el-row :gutter="10">
    <el-col :span="24">
      <image src="./img/破折号.jpg" style="width:90%"></image>
    </el-col>
  </el-row>
  使用“≤”表示“小于等于”。
  <el-row :gutter="10">
    <el-col :span="24">
      <image src="./img/小于等于.jpg" style="width:90%"></image>
    </el-col>
  </el-row>
  点号（顿号、逗号、句号等）、结束引号、结束括号等，不能出现在一行的开头。
  <el-row :gutter="10">
    <el-col :span="24">
      <image src="./img/行开头.jpg" style="width:90%"></image>
    </el-col>
  </el-row>
  开始引号、开始括号、开始双书名号等，不能出现在一行的结尾。
  <el-row :gutter="10">
    <el-col :span="24">
      <image src="./img/行结尾.jpg" style="width:90%"></image>
    </el-col>
  </el-row>
</div>

### 英文标点符号


<div style="line-height:3">
  逗号、句号等标号后加需一个空格。
  <el-row :gutter="10">
    <el-col :span="24">
      <image src="./img/英文加空格.jpg" style="width:90%"></image>
    </el-col>
  </el-row>
  度的标志、百分号等符号前不加空格。
  <el-row :gutter="10">
    <el-col :span="24">
      <image src="./img/英文不加空格.jpg" style="width:90%"></image>
    </el-col>
  </el-row>
  货币标志、表正负数符号等符号后不加空格。
  <el-row :gutter="10">
    <el-col :span="24">
      <image src="./img/英文不加空格1.jpg" style="width:90%"></image>
    </el-col>
  </el-row>
  「at」标志（电子邮件除外）、版权标识、项目符号等符号后加空格。
  <el-row :gutter="10">
    <el-col :span="24">
      <image src="./img/英文加空格1.jpg" style="width:90%"></image>
    </el-col>
  </el-row>
  括号、引号前后加空格，中间内容无空格。
  <el-row :gutter="10">
    <el-col :span="24">
      <image src="./img/括号不加空格.jpg" style="width:90%"></image>
    </el-col>
  </el-row>
  连字符（-）将两个相关单词组合成一个单词。
  <el-row :gutter="10">
    <el-col :span="24">
      <image src="./img/连接单词.jpg" style="width:90%"></image>
    </el-col>
  </el-row>
  全角连接号（—）常表示文章中断、转折或说明。
  <el-row :gutter="10">
    <el-col :span="24">
      <image src="./img/全角连接号.jpg" style="width:90%"></image>
    </el-col>
  </el-row>
</div>

### 中英文排版规则


<div style="line-height:3">
  中英文之间需要加空格。
  <el-row :gutter="10">
    <el-col :span="24">
      <image src="./img/中英文之间需要加空格.jpg" style="width:90%"></image>
    </el-col>
  </el-row>
  中文与链接之间增加空格。
  <el-row :gutter="10">
    <el-col :span="24">
      <image src="./img/中文与链接之间增加空格.jpg" style="width:90%"></image>
    </el-col>
  </el-row>
  使用正确的缩写。
  <el-row :gutter="10">
    <el-col :span="24">
      <image src="./img/使用正确的缩写.jpg" style="width:90%"></image>
    </el-col>
  </el-row>
  全角标点与英文或数字之间不加空格。
  <el-row :gutter="10">
    <el-col :span="24">
      <image src="./img/全角标点与英文或数字之间不加空格.jpg" style="width:90%"></image>
    </el-col>
  </el-row>
  遇到完整的英文句子使用半角标点。
  <el-row :gutter="10">
    <el-col :span="24">
      <image src="./img/遇到完整的英文句子使用半角标点.jpg" style="width:90%"></image>
    </el-col>
  </el-row>
</div>


### 数字

<div style="line-height:3">
  边界情况：若文案中含有不断变化的数字，应考虑边界情况。
  <el-row :gutter="10">
    <el-col :span="24">
      <image src="./img/边界情况.jpg" style="width:90%"></image>
    </el-col>
  </el-row>
  汉字数字：当需要突出庄重典雅的表达效果，应使用汉字数字。
  <el-row :gutter="10">
    <el-col :span="24">
      <image src="./img/汉字数字.jpg" style="width:90%"></image>
    </el-col>
  </el-row>
  数字分节：为便于阅读，四位以上的整数或小数，应该使用千分撇进行分节：整数部分每三位一组，以“,”分节,小数部分不分节。四位以内（含四位数）的整数可以不分节。
  <el-row :gutter="10">
    <el-col :span="24">
      <image src="./img/数字分节.jpg" style="width:90%"></image>
    </el-col>
  </el-row>
  数值范围：在表示数值的范围时，可采用波浪式连接号“~”或一字线连接号“—”。前后两个数值的附加符号或计量单位相同时，在不造成歧义的情况下，前一个数值的附加符号或计量单位可省略。
  <el-row :gutter="10">
    <el-col :span="24">
      <image src="./img/数值范围.jpg" style="width:90%"></image>
    </el-col>
  </el-row>
  中文与数字之间需要加空格，但类似于“7号线”、“3D打印”等不表达数量信息的数字无需补加空格。
  <el-row :gutter="10">
    <el-col :span="24">
      <image src="./img/中文与数字之间需要加空格.jpg" style="width:90%"></image>
    </el-col>
  </el-row>
</div>