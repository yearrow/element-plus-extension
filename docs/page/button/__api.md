
#### Button 属性

| 属性        | 说明       | 类型 | 可选值 | 默认值 |
| :--------- |:--------| :-----| :-----| :-----|
| size	| 尺寸	| string	| large / default /small	| —|
| type	| 类型	| string	| primary / success / warning / danger / info / text	| —|
| plain	| 是否为朴素按钮	| boolean	| —	| false|
| text	| 是否为文字按钮	| boolean	| —	| false|
| bg  	| 是否显示文字按钮背景颜色	| boolean	| —	| false|
| link  | 是否为链接按钮	| boolean	| —	| false|
| round	| 是否为圆角按钮	| boolean	| —	| false|
| circle	| 是否为圆形按钮	| boolean	| —	| false|
| loading	| 是否为加载中状态	| boolean	| —	| false|
| loading-icon	| 自定义加载中状态图标组件	| string / Component	| —	| Loading|
| disabled	| 按钮是否为禁用状态	| boolean	| —	| false|
| icon	| 图标组件	| string / Component	| —	| —|
| autofocus	| 原生 autofocus 属性	| boolean	| —	| false|
| native-type	| 原生 type 属性	| string	| button / submit / reset	| button|
| auto-insert-space	| 自动在两个中文字符之间插入空格	| boolean		||  —|


#### 插槽

| 插槽名        |  说明 |
| :--------- |:-----|
| —	| 自定义默认内容|
| loading	| 自定义加载中组件|
| icon	| 自定义图标组件|
