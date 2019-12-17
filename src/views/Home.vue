<template>
  <div class="home">
    <el-menu
      :default-active="activeIndex1"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="black"
      text-color="#fff"
      active-text-color="#2980b9"
      router
    >
      <el-menu-item index="/" style="padding-left: 0; ">
        <span style="margin-left:15px;font-size:35px;">OWLASER</span>
      </el-menu-item>
      <el-menu-item index="/welcome" style="margin-left:50px;font-size:18px;">扫描页</el-menu-item>
      <el-submenu index="2" style="width:150px">
        <template slot="title">
          <span style="font-size:18px;">仓库</span>
        </template>
        <el-menu-item index="/Repo" style="font-size:18px;">私有库</el-menu-item>
        <el-menu-item index="#" style="font-size:18px;">公有库</el-menu-item>
        <el-menu-item index="/Recycle" style="font-size:18px;">回收站</el-menu-item>
      </el-submenu>
      <el-menu-item index="#" style="font-size:18px;">镜像库</el-menu-item>
      <el-menu-item index="/Security" style="font-size:18px;">安全扫描</el-menu-item>
      <el-menu-item style="float:right;font-size:18px;margin-right:20px">个人中心</el-menu-item>
    </el-menu>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex1: "1"
    };
  },

  components: {},

  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>
<style  scoped>
/* .nav-el {
  font-size: 50px;
}
.el-header {
  background-color: #373d41;
  justify-content: space-between;
  padding-left: 14%;
  align-items: center;
  color: #fff;
  font-size: 20px;
}

.el-aside {
  background-color: #333744;
  height: 100vh;
}

.el-main {
  background-color: #eaedf1;
} */
</style>