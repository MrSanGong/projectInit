import Layout from '@/layout'
import { nameMap } from '@/fields/mapFileName'

export const taskManageRouter = {
  path: '/taskManage',
  name: nameMap.taskManage.base,
  component: Layout,
  meta: { title: '任务管理', icon: 'router_myAccount' },
  children: [{
    path: nameMap.taskManage.base,
    name: nameMap.taskManage.index,
    component: () => import('@/views/taskManage/index.vue'),
    meta: { title: '任务管理' }
  }, {
    path: 'detail',
    name: nameMap.taskManage.detail,
    component: () => import('@/views/taskManage/detail.vue'),
    meta: { title: '任务管理详情', parent: nameMap.taskManage.index },
    hidden: true
  }]
}
