<template>
  <div class="app-container">
    <filter-container @search="fetchDataWithPaginationReset" @reset="resetFilter">
      <filter-item label="用户姓名">
        <el-input
          v-model.trim="listQuery.studioName"
          placeholder="请输入关键字模糊匹配"
          style="width: 170px;"
          @keyup.enter.native="fetchDataWithPaginationReset"
        />
      </filter-item>
      <filter-item label="任务状态">
        <el-select v-model="listQuery.statuses" multiple placeholder="请选择">
          <el-option
            v-for="item in statusOptions"
            :key="item.name"
            :label="item.label"
            :value="item.name"
          />
        </el-select>
      </filter-item>
      <filter-item label="更新时间">
        <el-date-picker
          v-model.trim="tempCommitDate"
          type="daterange"
          style="width: 220px"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          unlink-panels
          value-format="yyyy-MM-dd"
        />
      </filter-item>
    </filter-container>
    <div>
      <el-card class="box-card">
        <p>任务名称</p>
      </el-card>
    </div>
  </div>
</template>

<script>
import BasePage from '@/mixins/BasePage'
import BaseTable from '@/mixins/BaseTable'
export default {
  mixins: [BasePage, BaseTable],
  data() {
    return {
      listQuery: {
        studioName: '',
        statuses: ''
      },
      tempCommitDate: [],
      statusOptions: [{
        name: 'a',
        label: '已上线'
      }, {
        name: 'b',
        label: '待上线'
      }, {
        name: 'c',
        label: '已下线'
      }]
    }
  }
}
</script>

