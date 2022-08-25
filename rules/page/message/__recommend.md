

### 消息及状态

#### 消息组件
- message
- messageBox
- alert
- popover
- notification
#### 约定

##### 消息类型的约定

成功类消息使用success

警告类消息使用warning

一般提示类消息使用info

异常类消息使用error

##### 消息提示方式的约定

message 一般使用在主动发送请求后,返回的各类消息,或操作过程中的信息提示。

messageBox 和 popover 主要用于任务执行过程中给予用户的选择提示。 在按钮的操作提示中推荐使用popover的提示方式,alert 主要用在页面、表单、预选器中进行辅助说明提示。

notification 一般用在由服务端主动发送给用户的通知消息，主要使用在预警类或者数据更新提示类的消息中。