
## 使用场景
### 在toolbar中使用


#### 单行过滤器

过滤器和按钮合并在同一行显示，查询按钮紧挨着过滤器，导出或其他按钮放在最右边

不显示label，占位符中需要写上过滤器的名称

<image src="./单行过滤器.png" style="width:100%" ></image>

#### 多行以滤器

布局方式：grid布局

查询、导出或其他按钮放在过滤器功能区

form表单需要显示label

<image src="./多行过滤器.png" style="width:100%" ></image>

#### 混合使用

情景一、多行过滤器功能按钮都放在功能条中

<image src="./情景1.png" style="width:100%" ></image>

情景二、单行过滤器加少量功能按钮

<image src="./情景2.png" style="width:100%" ></image>

情景三、单行过滤器加较多功能按钮

<image src="./情景3.png" ></image>

情景四、如果有额外显示信息可以放在功能条，比如统计数字等

<image src="./情景4.png"  style="width:100%"></image>


#### 开发指导

- 以上情景都包裹在toolbar中

- 单行过滤器布局可以直接摆放过滤器组件，给固定宽度即可

- 多行过滤器布局方式使用grid响应式布局，可参照一下代码实现`:xs="24" :sm="12" :md="8" :lg="6" :xl="4"`；grid中的每一列gutter都使用10px的间距

- 工具条可以使用`flex-line`组件进行左右布局

- 多行过滤器使用form进行包裹，单行过滤器则不需要使用form包裹

- 在工具条过滤器中，隐藏form-item表单验证区域，已经统一在toolbar中做了处理

-  多行布局时，应该考虑各列之间纵向对齐，如果有的字典类的组件相等宽度下不能满足，可以适当调整宽度

### panel中使用


<image src="./panel过滤器.png"  style="width:100%"></image>

#### 开发指导

- 过滤器放在panel的工具栏，直接给组件宽度即可

- 不超过3个过滤器时使用，可以加查询图标按钮

### 综合场景

一般用来展示树形结构、列表

<image src="./面板过滤器.png" height="400px"></image>

