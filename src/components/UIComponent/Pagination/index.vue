<template>
  <div class="pagination-container">
    <el-pagination
      :current-page.sync="currentPage"
      :page-size="size"
      :total="total"
      background
      layout="total, prev, pager, next, jumper"
    />
  </div>
</template>

<script>
/**
 * @author 王兆炜
 */
export default {
  name: 'Pagination',
  model: {
    prop: 'page',
    event: 'change'
  },
  props: {
    page: {
      type: Number,
      default: 0
    },
    total: {
      type: Number,
      default: 0
    },
    size: {
      type: Number,
      default: 10
    }
  },
  data() {
    return {
      currentPage: 1
    }
  },
  watch: {
    currentPage(val) {
      if (val > 0) {
        this.$emit('change', val - 1)
      } else {
        this.$emit('change', 0)
      }
      this.$nextTick(() => {
        this.$emit('page-change')
      })
    }
  },
  methods: {
    // 重置页数为0
    reset() {
      if (this.currentPage === 1) {
        this.$emit('page-change')
      } else {
        this.currentPage = 1
      }
    }
  }
}
</script>

<style lang="scss">
  .pagination-container {
    margin-top: 30px;
  }
</style>
