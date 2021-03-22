<script>
import { nameMap } from '@/fields/mapFileName'

export default {
  name: 'Dashboard',
  created() {
    this.$router.replace({ name: nameMap.taskManage.index })
  },
  render(creatElement) {
    return creatElement
  }
}

</script>
