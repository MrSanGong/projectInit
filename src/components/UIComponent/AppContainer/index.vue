<template>
  <div class="app-container">
    <slot name="header" />
    <div :style="{ height: calculatedHeight + 'px' }" class="wrapper">
      <div v-loading="pageLoading" :class="typeClassName">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
import cssVariables from '@/styles/variables.scss'
export default {
  name: 'AppContainer',
  props: {
    type: {
      type: String,
      default: 'content',
      validator(val) {
        return ['content', 'table'].includes(val)
      }
    }
  },
  data() {
    return {
      calculatedHeight: 0,
      pageLoading: false
    }
  },
  computed: {
    typeClassName() {
      return this.type + '-container'
    }
  },
  beforeMount() {
    window.addEventListener('resize', this.getCalculatedHeight)
  },
  mounted() {
    this.getCalculatedHeight()
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.getCalculatedHeight)
  },
  methods: {
    startLoading() {
      this.pageLoading = true
    },
    stopLoading() {
      this.pageLoading = false
    },
    getCalculatedHeight() {
      const windowHeight = window.innerHeight
      const barHeight = parseInt(cssVariables.navBarHeight)
      const appHeight = windowHeight - barHeight

      if (this.$slots.header) {
        const totalHeight = this.$slots.header.reduce((prev, vnode) => {
          return prev + (vnode.elm && vnode.elm.clientHeight) || 0
        }, 0)
        this.calculatedHeight = appHeight - totalHeight
      } else {
        this.calculatedHeight = appHeight
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "~@/styles/variables.scss";
  @import "~@/styles/mixin.scss";

  .app-container {
    min-width: $contentMinWidth;

    .wrapper {
      overflow-y: auto;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      .content-container {
        box-sizing: border-box;
        width: $contentMinWidth;
        padding: 0 20px;

      }
      .table-container {
        padding: 20px 20px 0;
        width: 100%;
      }
    }

  }

</style>
