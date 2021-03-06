# DialogContainer

>弹窗层的容器，起到约束作用
>
>- 通过 `this.$refs.DialogContainer.showDialog()` 展示弹窗层
>- 通过 `this.$refs.DialogContainer.hideDialog()` 隐藏弹窗层
>
>@author 王兆炜

## props

| 字段名      | 接受类型 | 必填 | 默认值 | 用处                                    | 备注 |
| ----------- | -------- | ---- | ------ | --------------------------------------- | ---- |
| title | String | |  | 弹窗的标题 |                                                              |
| closable | Boolean | | true | 是否可以手动关闭 | 当使用了false时，点击除了“取消”、“提交”以外的地方，并不会关闭弹窗 |
| easyClose | Boolean | | false | 是否可以通过esc、点击遮罩层关闭弹窗 | 防止误触 |
| width | String | | '50%' | 弹窗的宽度 |  |
| hasFooter | Boolean | | true | 是否显示底部操作栏 |  |

## $slots

| 插槽名        | 展示内容       | 备注 |
| ------------- | -------------- | ---- |
| 默认(default) | 弹窗的主要内容 |      |

## $emit

| 事件名       | 传出的值 | 用处                       | 备注          |
| ------------ | -------- | -------------------------- | ------------- |
| click-submit | 无       | 点击“确定”时的回调         |               |
| open         | 无       | 弹出层打开时的回调         | 同Element文档 |
| opened       | 无       | 弹出层打开动画结束时的回调 | 同Element文档 |
| close        | 无       | 弹出层关闭时的回调         | 同Element文档 |
| closed       | 无       | 弹出层关闭动画结束时的回调 | 同Element文档 |



## methods

| 方法名       | 传入参数 | 返回值 | 产生效果       | 备注 |
| :----------- | -------- | ------ | -------------- | ---- |
| showDialog   | 无       | 无     | 显示弹窗层     |      |
| hideDialog   | 无       | 无     | 关闭隐藏弹窗层 |      |
| clickConfirm | 无       | 无     | 模拟点击回车   |      |
