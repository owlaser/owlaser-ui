<template>
  <el-container class="home-container">
    <!-- 顶栏导航栏开始 -->
    <el-header>
      <div class="logo">
        <span>OWLASER</span>
      </div>
      <el-menu mode="horizontal" active-text-color="#2980b9">
        <el-menu-item index="/" @click="scrollTo('#banner')">首 页</el-menu-item>
        <el-menu-item index="proInfo" @click="scrollTo('#proInfo')">项目介绍</el-menu-item>
        <el-menu-item index="teamInfo" @click="scrollTo('#teamInfo')">团队故事</el-menu-item>
        <el-menu-item index="contact" @click="scrollTo('#contact')">联系我们</el-menu-item>
        <div class="menu-btn">
          <el-button>登 录</el-button>
          <el-button>注 册</el-button>
        </div>
      </el-menu>
    </el-header>
    <!-- 顶栏导航栏结束 -->

    <!-- 主体部分开始 -->
    <el-main>
      <div class="banner" id="#banner">
        <img src="https://cdn.jsdelivr.net/gh/tyrone-wu/PicRepo/mty.png" />
        <div class="center">
          <h1>OWLASER</h1>
          <p>OWLASER make your project more ....</p>
          <p>PKU-HUAWEI</p>
          <router-link to="/index">
            <el-button type="primary" class="start-btn">GET START</el-button>
          </router-link>
        </div>
        <!-- 向下指示图标 s-->
        <div id="down">
          <canvas id="downCanvas" width="30" height="30"></canvas>
        </div>
        <!-- 向下指示图标 e-->
      </div>
      <div class="pro-info" id="#proInfo">
        <div class="pro-info-intro">
          <p>帮助您全方位审视项目当中的潜在问题</p>
        </div>
        <div class="img-box">
          <img src="https://cdn.jsdelivr.net/gh/tyrone-wu/PicRepo/o-result.png" />
          <img
            src="https://cdn.jsdelivr.net/gh/tyrone-wu/PicRepo/o-secur.png"
            style="margin-top:100px"
          />
        </div>
        <div class="p-box">
          <el-card class="box-card" shadow="hover">
            <div class="header">版 本</div>
            <div class="intro">
              最热版本
              稳定版本
              版本推荐
            </div>
          </el-card>
          <el-card class="box-card" shadow="hover">
            <div class="header">证 书</div>
            <div class="intro">
              证书信息
              冲突提示
            </div>
          </el-card>
          <el-card class="box-card" shadow="hover">
            <div class="header">漏 洞</div>
            <div class="intro">
              漏洞等级
              漏洞版本
              修复信息
            </div>
          </el-card>
        </div>
      </div>
      <div class="team-info" id="#teamInfo">
        <div class="pic-box">
          <el-carousel type="card" height="400px">
            <el-carousel-item v-for="(item,index) in imgList" :key="index">
              <img :src="item" alt />
            </el-carousel-item>
          </el-carousel>
        </div>
        <div class="team-info-intro">
          TEAM
          <p>北大-华为实验班开源组件健康扫描项目全体成员</p>
        </div>
      </div>
      <div class="contact" id="#contact"></div>
    </el-main>
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
      menuList: [],
      imgList: [
        'https://cdn.jsdelivr.net/gh/tyrone-wu/PicRepo/team1.jpg',
        'https://cdn.jsdelivr.net/gh/tyrone-wu/PicRepo/team3.jpg',
        'https://cdn.jsdelivr.net/gh/tyrone-wu/PicRepo/team2.jpg',
        'https://cdn.jsdelivr.net/gh/tyrone-wu/PicRepo/o-team5.png'
      ]
    }
  },
  mounted() {
    this.drawDown()
  },
  methods: {
    // 点击导航栏标签  页面滑动到相应的锚点
    scrollTo(str) {
      var el = document.getElementById(str)
      this.$nextTick(function() {
        window.scrollTo({ behavior: 'smooth', top: el && el.offsetTop - 80 })
      })
    },
    drawDown() {
      const c = document.getElementById('downCanvas')

      const cxt = c.getContext('2d')
      cxt.beginPath()
      cxt.moveTo(5, 20)
      cxt.lineTo(15, 30)
      cxt.lineTo(25, 20)
      cxt.lineWidth = 1
      cxt.strokeStyle = 'white'
      cxt.lineCap = 'round'
      cxt.lineJoin = 'round'
      cxt.stroke()
    }
  },

  // 引入脚部组件
  components: [{ 'my-footer': () => import('./common/footer') }]
}
</script>

<style lang="less" scoped>
.home-container {
  height: 100%;
}
.el-header {
  position: fixed;
  display: flex;
  width: 100% !important;
  padding: 0 50px;
  justify-content: space-between;
  align-items: center;
  z-index: 999;
  background: black;

  * {
    color: white;
    background: black;
  }
  .logo {
    font-size: 30px;
  }
  .el-menu {
    display: flex;
    align-items: center;
    border: 0;
    height: 100%;
    .el-menu-item {
      height: 100%;
      font-size: 16px;
    }
    .el-menu-item:hover {
      color: #409eff !important;
      background: transparent !important;
      border-bottom: 2px solid #409eff !important;
    }
    .el-menu-item.is-active {
      color: #409eff !important;
      background: transparent !important;
    }
    .menu-btn {
      width: 200px;
      .el-button {
        margin: 0 10px;
      }
      .el-button:hover {
        color: white;
        background: #2980b9;
        border: 1px solid #2980b9;
      }
    }
  }
}

.el-main {
  padding: 0;
  .banner {
    height: 100vh;
    min-height: 800px;
    overflow: hidden;
    img {
      width: 100%;
      animation: move 20s infinite;
    }
    .start-btn {
      width: 200px;
      height: 50px;
      font-size: 20px;
      border: 2px solid #2980b9;
      background: transparent;
    }
    .start-btn:hover {
      transform: scale(1.1);
      border: 0;
      background: #2980b9;
    }
    .center {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translateX(-50%) translateY(-50%);
      text-align: center;
      h1 {
        -webkit-text-stroke: 2px #2980b9;
        -webkit-text-fill-color: transparent;
        font-size: 150px;
        font-family: 'montserrat', sans-serif;
        margin-bottom: 20px;
      }
      p {
        font-size: 20px;
        color: #fff;
        margin-bottom: 20px;
      }
    }

    #down {
      position: absolute;
      text-align: center;
      left: 50%;
      top: 92vh;
      transform: translateX(-50%);
      height: 30px;
      -moz-animation: down 1s linear infinite alternate;
      -webkit-animation: down 1s linear infinite alternate;
      -o-animation: down 1s linear infinite alternate;
      animation: down 1s linear infinite alternate;
    }
  }
  .pro-info {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    margin-top: 50px;
    .pro-info-intro {
      p {
        font-size: 40px;
        font-weight: lighter;
      }
    }
    .img-box {
      height: 500px;
      display: flex;
      justify-content: space-around;
      align-items: center;
      img {
        opacity: 0.9;
        width: 650px;
        margin: 20px;
        border-radius: 5px;
        transform: rotate(-10deg);
      }
      img:hover {
        opacity: 1;
      }
    }
    .p-box {
      margin-top: 80px;
      width: 100%;
      height: 150px;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-content: space-between;
      .el-card {
        width: 300px;
        font-weight: lighter;
        .header {
          font-size: 30px;
          margin-bottom: 20px;
        }
        .intro {
          height: 30px;
          line-height: 30px;
          font-size: 20px;
        }
      }
    }
  }
  .team-info {
    height: 800px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .pic-box {
      width: 1000px;
      .el-carousel__item img {
        height: 100%;
        color: #475669;
        line-height: 200px;
        margin: 0;
      }

      .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
      }

      .el-carousel__item:nth-child(2n + 1) {
        background-color: #d3dce6;
      }
    }
    .team-info-intro {
      font-size: 50px;
      font-weight: lighter;

      p {
        font-size: 30px;
      }
    }
  }
}

@keyframes move {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}

@keyframes down {
  0% {
    padding-top: 0px;
  }

  100% {
    padding-top: 10px;
  }
}
</style>
