<template>
  <div class="container">
    <img :src="logo" alt="">
  </div>
</template>

<script>
import { imagePicker } from '@/utils/imagePicker'

export default {
  name: 'Banner',
  data() {
    return {
      logo: imagePicker('ckb-logo')
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  @import "~@/styles/variables.scss";
  $height: 30px;

  .container {
    height: $top-navbar-height;
    background-color: $sidebarBg;
    padding: 0 10px;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      height: $height;
    }

    div {
      height: $height;
      width: 1px;
    }

    span {
      display: block;
      line-height: $height;
      font-size: $title-fsz;
      color: #fff;
    }
  }
</style>
