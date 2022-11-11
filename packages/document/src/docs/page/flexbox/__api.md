
## 参数

### flexbox属性

| 属性        | 说明       | 类型 | 可选值 | 默认值 |
| :--------- |:--------| :-----| :-----| :-----|
| isRow	| 横向排列	| boolean	| true/false	| false |
| itemNum	| 子容器数目	| number	| 1	| 1 |
| itemConfig	| 子容器相关配置	| object	| 	|  |

### itemConfig属性

| 属性        | 说明       | 类型 | 可选值 | 默认值 |
| :--------- |:--------| :-----| :-----| :-----|
| tag	| 子项标识	| string	| item-x	|  |
| isFixed	| 是否为固定区域	| boolean	| true/false	| false |
| size	| 固定区域大小	| string	| 0px	|  |
| paddingSize	| 内边距大小	| string	| small/base/large |  |
| clearPadding	| 清除内边距	| string[]	| left/right/top/bottom	| false |

### 插槽

| 名称        |  描述 |
| :--------- |:-----|
|  item-x | x为数字，代表子项列，可以加多个 | 
