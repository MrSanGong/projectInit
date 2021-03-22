<template>
  <app-container type="table">
    <filter-container @search="fetchDataWithPaginationReset" @reset="resetFilter">
      <filter-item label="用户姓名">
        <el-input
          v-model.trim="listQuery.studioName"
          placeholder="请输入关键字模糊匹配"
          style="width: 170px;"
          @keyup.enter.native="fetchDataWithPaginationReset"
        />
      </filter-item>
      <filter-item label="用户账号">
        <el-input
          v-model.trim="listQuery.studioName"
          placeholder="请输入关键字模糊匹配"
          style="width: 170px;"
          @keyup.enter.native="fetchDataWithPaginationReset"
        />
      </filter-item>
      <filter-item label="任务子状态">
        <el-select v-model="listQuery.statuses" multiple placeholder="请选择">
          <el-option
            v-for="item in statusOptions"
            :key="item.name"
            :label="item.label"
            :value="item.name"
          />
        </el-select>
      </filter-item>
    </filter-container>

    <el-table
      v-loading="listLoading"
      :data="list"
      element-loading-text="Loading"
      fit
      width="100%"
      highlight-current-row
    >
      <el-table-column label="用户ID" align="center" width="90">
        <template slot-scope="scope">
          {{ scope.$index + 1 }}
        </template>
      </el-table-column>

      <el-table-column label="用户姓名" prop="studioName" />
      <el-table-column label="账号" prop="flowMonth" />
      <el-table-column label="昵称" prop="commitDate" />
      <el-table-column label="身份证号" prop="commitDate" />
      <el-table-column label="实名认证是否通过" prop="commitDate" />
      <el-table-column label="是否佣金宝用户" prop="commitDate" />
      <el-table-column label="自动确认倒计时" prop="commitDate" />
      <el-table-column label="任务子状态" prop="status" width="100">
        <template slot-scope="scope">
          {{ scope.row.status && scope.row.status.label }}
        </template>
      </el-table-column>
      <el-table-column label="操作" prop="commitDate" />
    </el-table>

    <pagination ref="Pagination" v-model="listQuery.page" :size="listQuery.size" :total="total" @page-change="fetchData" />
  </app-container>
</template>

<script>
import { nameMap } from '@/fields/mapFileName'
import BasePage from '@/mixins/BasePage'
import BaseTable from '@/mixins/BaseTable'
import Pagination from '@/components/UIComponent/Pagination/index'

export default {
  name: nameMap.taskManage.detail,
  components: { Pagination },
  mixins: [BasePage, BaseTable],
  data() {
    return {
      files: [],
      listQuery: {
        studioName: '',
        startCommitDate: '',
        endCommitDate: '',
        startFlowMonth: '',
        endFlowMonth: '',
        statuses: []
      },
      tempCommitDate: [], // 提交
      statusOptions: [{
        label: '待上传',
        name: 'PENDING'
      }, {
        label: '待审核',
        name: 'NOT_HANDLE'
      }, {
        label: '未通过',
        name: 'NOT_PASS'
      }, {
        label: '通过',
        name: 'PASS'
      }]
    }
  },
  watch: {
    tempCommitDate: {
      deep: true,
      handler(val) {
        this.listQuery.startCommitDate = val[0]
        this.listQuery.endCommitDate = val[1]
      }
    }
  },
  methods: {
    resetFilter() {
      this.listQuery = this.$options.data().listQuery
      this.tempCommitDate = []
      this.fetchData()
    },
    fetchData() {
      this.listLoading = false
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>

</style>
