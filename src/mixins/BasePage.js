import BaseVue from './BaseVue'
/**
 * 基础页面，页面需从这里继承。
 * 可以进行二次扩展
 */
export default {
  mixins: [BaseVue],
  data() {
    return {
      btnLoading: false // 基本上每个页面都会用到按钮的加载状态
    }
  },
  computed: {
    title() {
      return this.$route.meta.title // 页面标题从路由中获取
    }
  }
}
