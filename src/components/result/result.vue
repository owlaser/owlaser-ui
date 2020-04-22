<template>
  <el-container>
    <!-- 左边区域开始 -->
    <el-aside>
      <!-- 搜索与列表区域 -->
      <el-card class="box-card">
        <div slot="header">
          <el-input placeholder="请输入组件名..." v-model="input">
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </div>

        <el-table :data="searchlist || dependenciesList" @row-click="openDetails">
          <el-table-column label="序号" type="index" width="40px" align="center"></el-table-column>
          <el-table-column prop="artifact_id" label="Artifact ID" show-overflow-tooltip></el-table-column>
        </el-table>
      </el-card>
    </el-aside>
    <!-- 左边区域结束 -->

    <!-- 右边主体开始 -->
    <el-main>
      <!-- 搜索与添加区域开始 -->
      <div class="search">
        <el-upload
          class="upload-demo"
          ref="upload"
          action="http://182.254.200.15:8081"
          :http-request="uploadFile"
          :file-list="fileList"
          :auto-upload="false"
        >
          <el-button slot="trigger" class="selectFile-btn">选取pom.xml文件</el-button>
          <el-button
            @click="submitUpload"
            class="uploadFile-btn"
            type="primary"
            icon="el-icon-search"
          >开始扫描</el-button>
        </el-upload>
      </div>
      <!-- 搜索与添加区域结束 -->

      <!-- 搜索结果卡片展示区域开始 -->
      <div class="result-box">
        <el-card class="result-card" shadow="hover">
          <div slot="header" class="clearfix">
            <span class="result-header">项目组件包扫描结果报告</span>
          </div>

          <!-- 顶部提示信息 -->
          <div class="tips">
            <el-card class="license-card" shadow="hover">
              <div slot="header" class="clearfix">
                <span>
                  证书提示
                  <span class="msg">
                    共
                    <span
                      class="num"
                      :style="checkMessage.license_detail.length>0 && `color: red`"
                    >{{checkMessage.license_detail.length}}</span>条
                  </span>
                </span>
              </div>

              <el-alert
                v-if="checkMessage.license_detail.length == 0"
                type="info'"
                :closable="false"
              >您的项目没有任何证书问题！</el-alert>
              <div v-else v-for="(item, index) in checkMessage.license_detail" :key="index">
                <el-alert type="error" :closable="false">{{item}}</el-alert>
              </div>
            </el-card>

            <el-card class="secur-card" shadow="hover">
              <div slot="header" class="clearfix">
                <span>
                  漏洞信息
                  <span class="msg">
                    共
                    <span
                      class="num"
                      :style="securList.length>0 && `color: red`"
                    >{{securList.length}}</span>条
                  </span>
                </span>
              </div>

              <el-alert v-if="securList.length == 0" type="info" :closable="false">您的项目没有任何漏洞！</el-alert>
              <div v-else v-for="(item, index) in securList" :key="index">
                <el-alert
                  type="error"
                  :closable="false"
                >组件包 {{item[0].name}} 当中包含 {{item.length-1}} 个漏洞！</el-alert>
              </div>
              <router-link to="/secur">
                <el-button type="small">查看详细信息</el-button>
              </router-link>
            </el-card>
          </div>

          <el-card class="version-card" shadow="hover">
            <div slot="header" class="clearfix">
              <span>版本优选信息</span>
            </div>
            <div class="table-tips">
              <el-badge value="推荐">
                <el-tooltip class="item" effect="dark" content="该组件稳定版本和最热版本相同" placement="top">
                  <el-button size="mini">推荐版本</el-button>
                </el-tooltip>
              </el-badge>
              <el-tooltip class="item" effect="dark" content="稳定版本比当前使用版本更高" placement="top">
                <el-button size="mini" type="primary" plain>更高版本</el-button>
              </el-tooltip>
              <el-tooltip class="item" effect="dark" content="稳定版本比当前使用版本更低" placement="top">
                <el-button size="mini" type="warning" plain>更低版本</el-button>
              </el-tooltip>
            </div>
            <el-table :data="dependenciesList" @row-click="openDetails" stripe>
              <el-table-column label="序号" type="index" align="center"></el-table-column>
              <el-table-column prop="group_id" label="Group ID" show-overflow-tooltip></el-table-column>
              <el-table-column
                prop="artifact_id"
                label="Artifact ID"
                show-overflow-tooltip
                width="250px"
              ></el-table-column>
              <el-table-column prop="version" label="目前版本" align="center"></el-table-column>
              <el-table-column prop="popular_version" label="最热版本" align="center">
                <template scope="scope">
                  {{scope.row.popular_version}}
                  <el-badge
                    v-if="scope.row.popular_version>=scope.row.version && scope.row.popular_version==scope.row.stable_version"
                    value="推荐"
                    class="item"
                  ></el-badge>
                </template>
              </el-table-column>
              <el-table-column prop="stable_version" label="稳定版本" align="center">
                <template scope="scope">
                  <span v-if="scope.row.stable_version>=scope.row.version">
                    <el-button
                      size="small"
                      type="primary"
                      plain
                      style="width:120px"
                    >{{ scope.row.stable_version }}</el-button>
                  </span>
                  <span v-else>
                    <el-button
                      size="small"
                      type="warning"
                      plain
                      style="width:120px"
                    >{{ scope.row.stable_version }}</el-button>
                  </span>
                </template>
              </el-table-column>
            </el-table>
          </el-card>
        </el-card>
      </div>
      <!-- 搜索结果卡片展示区域结束 -->
    </el-main>
    <!-- 右边主体结束 -->
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      dependenciesList: [],
      checkMessage: {},
      input: '',
      searchlist: null,
      securList: [],
      fileList: []
    }
  },
  mounted() {
    // 组件创建完后获取数据，
    // 此时 data 已经被 observed 了
    this.fetchData()
    this.scanSecur()
  },

  watch: {
    // 如果路由有变化，会再次执行该方法
    $route: 'fetchData',

    // 左边框输入信息时候响应跳转
    input: function(value) {
      this.searchlist = this.dependenciesList.filter(item => {
        const regx = new RegExp(value)
        return item.artifact_id.search(regx) !== -1
      })
    }
  },
  methods: {
    // 将存在store里面的数据导入本页面
    fetchData() {
      const data = JSON.parse(sessionStorage.getItem('responseData'))
      this.dependenciesList =
        this.$store.state.scanResult.dependenciesList || data.dependenciesList
      this.checkMessage =
        this.$store.state.scanResult.checkMessage || data.checkMessage
    },

    async scanSecur() {
      for (const item of this.dependenciesList) {
        const { data: res } = await this.$http.get(
          'http://182.254.200.15:8081/security',
          {
            params: {
              groupId: item.group_id,
              artifactId: item.artifact_id,
              version: item.version
            }
          }
        )
        if (res.data.list.length) {
          const version = {
            preVersion: res.data.version
          }
          res.data.list.push(version)
          this.securList.push(res.data.list)
        }
      }
      sessionStorage.setItem('securData', JSON.stringify(this.securList))
    },
    openDetails(row) {
      // 点击表格中的一行时跳转到细节页面  把当前表格行的值作为参数
      this.$router.push({
        path: './detail',
        query: { group_id: row.group_id, artifact_id: row.artifact_id }
      })
    },

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
        // 更新渲染数据
      } else {
        this.$message({
          message: '文件扫描失败！请重试！',
          type: 'error'
        })
        this.$store.state.scanResult.dependenciesList = null
        sessionStorage.removeItem('responseData')
        setTimeout(() => {
          this.$router.push('/scan')
        }, 1000)
      }
      this.fetchData()
      this.scanSecur()
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
.el-container {
  padding: 75px 10px 20px 10px;
  background: rgb(250, 248, 248);
  .el-aside {
    width: 250px !important;
    min-height: 88vh;
    .box-card {
      height: 99%;
      .el-table {
        margin-top: -20px;
        overflow: scroll;
      }
    }
  }
  .el-main {
    min-height: 88vh;
    .search {
      height: 10vh;
      display: flex;
      align-items: center;
      .upload-demo {
        display: flex;
        align-items: center;
        .selectFile-btn {
          width: 300px;
          margin-right: 20px;
          font-size: 14px;
        }
      }
    }

    .result-box {
      .el-card {
        margin: 10px 10px 10px 0px;
        .clearfix:before,
        .clearfix:after {
          display: table;
          content: '';
        }
        .clearfix:after {
          clear: both;
        }
        .el-button {
          margin-top: 10px;
        }
        .el-alert {
          margin: 5px 0;
          font-size: 30px;
        }
      }
      .result-card {
        .result-header {
          font-size: 25px;
        }
        .el-table {
          overflow: scroll;
          margin-top: -10px;
        }
        .tips {
          margin-top: -20px;
          height: 300px;
          display: flex;
          .license-card {
            flex: 1;
            overflow: scroll;
          }
          .secur-card {
            flex: 1;
            position: relative;
            overflow: scroll;
            .router-link {
              display: block;
              position: absolute;
              left: 50%;
              bottom: 10px;
              transform: translateX(-50%);
            }
          }
          .msg {
            margin-left: 20px;
            .num {
              display: inline;
              font-size: 30px;
              color: #409eff;
              font-weight: bolder;
              margin: 0 10px;
            }
          }
        }
        .version-card {
          .table-tips {
            margin-top: -5px;
            display: flex;
            justify-content: flex-end;
            align-items: center;
            margin-bottom: 20px;
            .el-button {
              margin: 0 5px;
            }
            .el-badge {
              margin-right: 45px;
            }
          }
          .el-button {
            margin: 0;
          }
        }
      }
    }
  }
}
</style>
