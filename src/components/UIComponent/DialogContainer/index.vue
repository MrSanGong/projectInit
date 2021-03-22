<template>
  <el-dialog
    ref="Dialog"
    :visible.sync="visibility"
    :width="width"
    :title="title"
    :close-on-click-modal="closable && easyClose"
    :close-on-press-escape="closable && easyClose"
    :show-close="closable"
    append-to-body
    @open="$emit('open')"
    @opened="$emit('opened')"
    @close="$emit('close')"
    @closed="$emit('closed')"
  >
    <template slot="title">
      <slot name="title" />
    </template>
    <slot />
    <div v-if="hasFooter" slot="footer" class="dialog-footer">
      <span class="el-footer-text" @click="hideDialog">取 消</span>
      <el-button ref="ConfirmBtn" type="primary" size="small" @click="$emit('click-submit')">确 定</el-button>
    </div>
  </el-dialog>
</template>

<script>
/**
   * @author 王兆炜
   */
export default {
  name: 'DialogContainer',
  props: {
    title: {
      type: String,
      default: ''
    },
    closable: {
      type: Boolean,
      default: true
    },
    easyClose: { // 防止误触关闭，true开启
      type: Boolean,
      default: false
    },
    width: {
      type: String,
      default: '50%'
    },
    hasFooter: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      visibility: false
    }
  },
  mounted() {
    if (this.title || this.$slots.title) {
      const el = this.$refs.Dialog.$el
      el.querySelector('.el-dialog__header').classList.add('divider')
    }
  },
  methods: {
    showDialog() {
      this.visibility = true
    },
    hideDialog() {
      this.visibility = false
    },
    clickConfirm() {
      const btn = this.$refs.ConfirmBtn
      btn && btn.$el.click()
    }
  }
}
</script>

<style lang="scss" scoped>
  /deep/ .el-dialog {
    .el-dialog__header{
      padding:14px 20px;
      font-size: 16px;
      &.divider {
        border-bottom: 1px solid #ddd;
      }
    }
    .el-dialog__body{
      padding: 20px 24px;
    }
  }

  .dialog-footer {
    .el-footer-text{
      margin-right: 15px;
      cursor: pointer;
    }
  }

</style>
