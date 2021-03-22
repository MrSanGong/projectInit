export default {
  data() {
    return {
      total: 0,
      listLoading: false,
      list: null,
      listQuery: {
        size: 10, // 每个分页请求都要带上这个参数
        page: 0 // 每个分页请求都要带上这个参数
      }
    }
  },
  mounted() {
    this.fetchData()
  },
  methods: {
    resetFilter() {
      Object.assign(this.$data.listQuery, this.$options.data().listQuery)
      this.fetchData()
    },
    fetchDataWithPaginationReset() {
      if (this.$refs.Pagination) {
        this.$refs.Pagination.reset() // 必须要用到Pagination组件
      }
    },
    fetchData() {}
  }
}
