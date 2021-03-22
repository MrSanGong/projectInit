<template>
  <div class="filter-item">
    <template v-if="type === 'button-group'">
      <el-form-item label-width="0">
        <el-button-group class="filter-group">
          <slot />
        </el-button-group>
      </el-form-item>
    </template>
    <template v-else>
      <h5>{{ label }}</h5>
      <el-form-item label-width="0">
        <slot />
      </el-form-item>
    </template>
  </div>
</template>

<script>
export default {
  name: 'FilterItem',
  props: {
    label: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: '',
      validator(val) {
        return ['button-group', ''].indexOf(val) !== -1
      }
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  @import "~@/styles/variables.scss";
  .el-input {
    width: 100px;
  }

  .filter-item {
    display: flex;
    align-items: center;
    margin: 10px 10px 10px 0;

    h5 {
      font-weight: normal;
      font-size: $main-fsz;
      margin: 0 5px 0 0;
      white-space: nowrap;
    }
    .el-form-item {
      margin: 0;
      padding: 0;
    }
  }

  /deep/ .reset-btn {
    border-left-color: #f9b1b0;
  }
</style>
