<template>
  <div class="navbar">
    <div class="user-block">
      <img :src="avatar" class="user-avatar" alt="">
      <div class="user-name">您好！{{ userData.realname }}！</div>
      <div class="icon-btn" title="退出" @click="logout">
        <el-badge>
          <svg-icon icon-class="banner_exit" />
        </el-badge>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data() {
    return {}
  },
  computed: {
    ...mapGetters({
      avatar: 'avatar',
      userData: 'userData'
    })
  },
  methods: {
    logout() {
      this.$store.dispatch('LogOut').then(() => {
        location.reload() // 为了重新实例化vue-router对象 避免bug
      })
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  @import "~@/styles/variables.scss";
  @import "~@/styles/mixin.scss";

  .navbar {
    min-width: $contentMinWidth;
    height: $top-navbar-height;
    border-radius: 0 !important;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    user-select: none;
    background-color: #fff;
    border-bottom: 1px solid #eee;
    .slogan {
      color: $color-primary;
      font-size: $large-fsz;
      font-family: STKaiti, Kaiti, sans-serif;
      white-space: nowrap;
      margin-right: 100px;
    }
    .user-block {
      height: 100%;
      display: flex;
      grid-gap: 20px;
      align-items: center;
      .user-avatar {
        border: 3px solid #fff;
        box-shadow:0 0 6px 0 rgba(51,51,51,0.6);
        object-fit: cover;
        @include square($top-navbar-height, 0.7);
        border-radius: 50%;
        overflow: hidden;
      }

      .user-name {
        padding-left: 20px;
        padding-right: 20px;
      }
      .notify-block {
        position: relative;
      }
      .icon-btn {
        height: 100%;
        cursor: pointer;
        font-size: 22px;
        padding: 0 15px;
        color: #333;
        display: flex;
        justify-content: center;
        align-items: center;
        &:hover, &.active {
          background-color: #f5f5f5;
          color: #666;
        }
      }
    }

    .project-change-button {
      border-radius: 50px;
    }
  }
</style>

