### api

#### 属性

| 属性        | 说明       | 类型 | 可选值 | 默认值 |
| :--------- |:--------| :-----| :-----| :-----|
| divider	| 显示分割线	| boolean	| true/false	| false |
| padding-size	| 内边距大小	| string	| small/base/large |  |
| clear-padding	| 清除内边距	| string[]	| left/right/top/bottom	| false |
| tool-max-width	| 过滤器工具栏最大宽度	| string	| 	| 150px |
| border	| 显示边框	| boolean	| true/false	| false |
| show-more	| 显示折叠按钮	| boolean	| true/false	| false |
| background	| 显示背景色	| boolean	| true/false	| true |


#### 插槽

| 名称        |  描述 |
| :--------- |:-----|
|  more | 展开更多 | 
|  filter | 过滤条件 | 
|  tool | 过滤器工具栏 | 
|  default | 工具条 | 