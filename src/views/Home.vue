<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <img alt="Vue logo" src="../assets/timg.jpg"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- 抬头标签 -->

    <el-container>
      <el-header>
        <div>
          <img src="@/assets/logo1.jpg" alt />
          <span style="margin-left:15px;">owlaser</span>
        </div>
        <el-button type="info">退出</el-button>
      </el-header>
      <el-container>
        <!-- 侧边栏 -->
        <el-aside width="200px">
          <!-- 侧边栏菜单区 -->
          <el-menu background-color="#333744" text-color="#fff" active-text-color="#409EFF" router>
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>主页</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="/homepage">选项1</el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>
              </el-menu-item-group>
            </el-submenu>

            <el-submenu index="2">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>扫描页</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="2-1">选项1</el-menu-item>
                <el-menu-item index="2-2">选项2</el-menu-item>
              </el-menu-item-group>
            </el-submenu>

            <el-submenu index="3">
              <template slot="title">
                <i class="el-icon-s-shop"></i>
                <span>私有组件库</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="/Repo">
                  <i class="el-icon-s-home"></i>组件库
                </el-menu-item>

                <el-menu-item index="/Recycle">
                  <i class="el-icon-delete"></i>回收站
                </el-menu-item>
              </el-menu-item-group>
            </el-submenu>

            <el-submenu index="4">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>xxx</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="4-1">选项1</el-menu-item>
                <el-menu-item index="4-2">选项2</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
          </el-menu>
        </el-aside>
        <!-- 主界面 -->
        <el-main>
          <!-- 路由占位符 -->
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: "home",
  components: {
    // HelloWorld,
  }
};
</script>
<style  scoped>
.el-header {
  background-color: #373d41;
  display: flex;
  justify-content: space-between;
  padding-left: 0;
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