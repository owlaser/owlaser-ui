<template>
  <el-container>
    <!-- 顶栏导航栏开始 -->
    <el-header>
      <el-menu :default-active="activeIndex" mode="horizontal" router active-text-color="#2980b9">
        <!-- logo -->
        <el-menu-item index="/">OWLASER</el-menu-item>
        <!-- 导航选项 -->
        <el-menu-item index="/result">扫描中心</el-menu-item>
        <el-menu-item index="/repo">组件库</el-menu-item>
        <el-menu-item index="/recycle">回收站</el-menu-item>
      </el-menu>
      <div class="user-center">
        <i class="el-icon-user n"></i>
        Admin
      </div>
    </el-header>
    <!-- 顶栏导航栏结束 -->

    <!-- 主体部分开始 -->
    <router-view></router-view>
    <!-- 主体部分结束 -->

    <!-- 页脚部分开始 -->
    <my-footer></my-footer>
    <!-- 页脚部分结束 -->
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: '/result'
    }
  },

  methods: {
    open2() {
      this.$message({
        message: '恭喜你，这是一条成功消息',
        type: 'success'
      })
    }
  }
}
</script>

<style lang="less" scoped>
.el-header {
  position: fixed;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  background: #24292e;
  z-index: 999;
  * {
    color: white;
    background: transparent;
  }
  .el-menu {
    border: 0;
  }
  .el-menu-item {
    font-size: 16px;
  }
  .el-menu-item:first-child {
    font-size: 25px;
    margin-right: 30px;
  }
  .el-menu-item:hover {
    color: #409eff !important;
    background: transparent !important;
  }
  .el-menu-item.is-active {
    background: transparent !important;
  }
}
</style>
