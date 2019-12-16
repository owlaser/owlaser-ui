<template>
  <div class="home">
  <el-menu 
  :default-active="activeIndex2"
  class="el-menu-demo"
  mode="horizontal"
  @select="handleSelect"
  background-color="#545c64"
  text-color="#fff"
  active-text-color="#ffd04b" router>
 <el-menu-item style="padding-left: 0; ">
       <img src="@/assets/logo1.jpg"  alt/>
  <span style="margin-left:15px;">owlaser</span>
 </el-menu-item>
  <el-menu-item index="1" >主页</el-menu-item>
  <el-submenu index="2">
    <template slot="title">仓库</template>
    <el-menu-item index="/Repo">私有库</el-menu-item>
    <el-menu-item index="2-2">公有库</el-menu-item>
    <el-menu-item index="/Recycle">回收站</el-menu-item>
  </el-submenu>
  <el-menu-item index="3">镜像库</el-menu-item>
  </el-menu>
    <router-view></router-view>
  </div>

</template>

<script>
export default {
  data () {
    return {
      activeIndex: '1',
      activeIndex2: '1',
      activeIndex3: '1'
    };
  },

  components: {},

  methods: {
    handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }

  }
}

</script>
<style  scoped>
.el-header {
  background-color: #373d41;
  /* display: flex; */
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
}
</style>