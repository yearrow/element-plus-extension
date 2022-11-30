## api

### TableNext 属性

`el-table`表格的通用属性和方法参照[文档](https://element-plus.org/zh-CN/component/table.html#table-%E5%B1%9E%E6%80%A7)

| 名称        | 类型       | 默认值 | 描述 |
| :--------- |:--------| :-----| :-----|
|  column-configs | ColumnConfig | [] | 表格列的配置 |
|  table-loading | boolean | false | 加载状态 |
|  table-data | array | [] | 表格内容 |
|  ref-callback | function | ()=>{} | 拿到表格实例的回调函数 |
|  pagination | Pagination |{} | 分页参数 |

### Pagination 属性

| 名称        | 类型       | 默认值 | 描述 |
| :--------- |:--------| :-----| :-----|
|  prevText  | string | 上一页 | 上一页文本 |
|  nextText  | string | 下一页 | 下一页文本 |



### ColumnConfig 属性

| 名称        | 类型       | 默认值 | 描述 |
| :--------- |:--------| :-----| :-----|
|  isParent  | boolean | false | 父节点 |
|  attr | ColumnAttrs | {} | 列属性对象 |
|  items | ColumnConfig[] | [] | 子节点 |

### ColumnAttrs属性

`Table-column`表格列的通用属性和方法参照[文档](https://element-plus.org/zh-CN/component/table.html#table-column-%E5%B1%9E%E6%80%A7)

| 名称        | 类型       | 默认值 | 描述 |
| :--------- |:--------| :-----| :-----|
|  prop  | string |  | 字段名称 对应列内容的字段名， 也可以使用 property属性 |
|  type  | string |  | 对应列的类型。 如果设置了selection则显示多选框； 如果设置了 index 则显示该行的索引（从 1 开始计算）； 如果设置了 expand 则显示为一个可展开的按钮 |
|  label  | string |  | 显示的标题 |
|  width  | string |  | 对应列的宽度 |
|  headerAlign  | string | left / center / right | 表头对齐方式， 若不设置该项，则使用表格的对齐方式 |
|  align  | string | left / center / right | 对齐方式 |
|  headerSlot  | string |  | 表头插槽名称 |
|  scopedSlot  | string |  | 列插槽名称 |

### TableNext插槽

| 名称        |  描述 |
| :--------- |:-----|
|  append | 插入至表格最后一行之后的内容， 如果需要对表格的内容进行无限滚动操作，可能需要用到这个 slot。 若表格有合计行，该 slot 会位于合计行之上。 | 

### TableColumn插槽

| 名称        |  描述 |
| :--------- |:-----|
|  ColumnAttrs属性-headerSlot | 表头的插槽| 
|  ColumnAttrs属性-scopedSlot | 表格内容的插槽| 

### 事件

`el-table`表格事件参照[文档](https://element-plus.org/zh-CN/component/table.html#table-%E4%BA%8B%E4%BB%B6)