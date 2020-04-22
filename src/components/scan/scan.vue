<template>
  <el-container class="scanPage">
    <!-- 上传部分盒子开始 -->
    <div class="upload-box">
      <el-upload
        class="upload-demo"
        ref="upload"
        action="http://182.254.200.15:8081"
        :http-request="uploadFile"
        :file-list="fileList"
        :auto-upload="false"
      >
        <el-button slot="trigger" class="selectFile-btn">选取pom.xml文件</el-button>
        <el-button @click="submitUpload" class="uploadFile-btn">开始扫描</el-button>
      </el-upload>
    </div>
    <!-- 上传部分盒子结束 -->
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      file: '',
      fileList: []
    }
  },
  beforeRouteLeave(to, from, next) {
    const data =
      this.$store.state.scanResult.dependenciesList ||
      sessionStorage.getItem('responseData')
    // 如果点击的不是首页且没有扫描数据存档，则提示扫描
    if (data || to.path === '/') {
      next()
    } else {
      alert('请先上传文件扫描！')
      next(false)
    }
  },

  methods: {
    async uploadFile(param) {
      // 开始上传 生成等待画面
      const load = this.$loading({
        lock: true,
        text: '已上传成功，正在为您扫描，预计需等待 2-3 分钟！',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.7)'
      })

      const file = param.file
      const form = new FormData()
      // 文件对象
      form.append('file', file)

      // 发送异步请求
      const { data: response } = await this.$http.post(
        'http://182.254.200.15:8081/upload',
        form
      )

      // 收到请求  进行下一步处理
      load.close()

      // 判断请求是否成功
      if (response.errno === 0) {
        sessionStorage.setItem('responseData', JSON.stringify(response.data))
        this.$store.state.scanResult = response.data
        this.$router.push('/result')
      } else {
        this.$message({
          message: '文件扫描失败！请重试！',
          type: 'error'
        })
      }
    },
    submitUpload() {
      if (this.fileList) {
        this.$refs.upload.submit()
      }
    }
  }
}
</script>

<style lang="less" scoped>
.scanPage {
  height: 100vh;
  background-image: url('https://cdn.jsdelivr.net/gh/tyrone-wu/PicRepo/mty.png');
  background-size: cover;
  background-position: 0 -100px;
  .upload-box {
    position: absolute;
    margin: auto;
    width: 410px;
    height: 200px;
    left: 50%;
    top: 60%;
    transform: translateX(-50%) translateY(-50%);

    .selectFile-btn {
      width: 300px;
      height: 50px;
      font-size: 16px;
      border: 2px solid #2980b9;
    }

    .uploadFile-btn {
      margin-left: 5px;
      width: 100px;
      height: 50px;
      color: white;
      font-size: 16px;
      background: #2980b9;
      border: 0;
    }
    .uploadFile-btn:hover {
      background: white;
      color: #2980b9;
      border: 2px solid #2980b9;
    }
  }
}
</style>
