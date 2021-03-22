<template>
  <el-form :size="size" class="filter-container">
    <div class="content-block">
      <slot />
      <filter-item type="button-group">
        <el-button
          type="primary"
          plain
          icon="el-icon-search"
          @click="$emit('search')"
        >查询</el-button>
        <el-button
          class="reset-btn"
          icon="el-icon-delete"
          @click="$emit('reset')"
        >重置</el-button>
      </filter-item>
    </div>
    <div v-if="$slots.action" class="action-block">
      <slot name="action" />
    </div>
  </el-form>
</template>

<script>
/**
 * @author 王兆炜
 */
import FilterItem from './FilterItem'
export default {
  name: 'FilterContainer',
  components: {
    FilterItem
  },
  props: {
    size: {
      type: String,
      default: 'mini',
      validator(val) {
        return ['mini', 'small', 'medium'].indexOf(val) !== -1
      }
    }
  },
  data() {
    return {
      className: null
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .filter-container {
    margin-bottom: 20px !important;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-start;
    .content-block {
      flex: 4;
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;
      align-items: center;
    }
    .action-block {
      flex: 1;
      display: flex;
      justify-content: flex-end;
      align-items: center;
    }
  }
</style>
