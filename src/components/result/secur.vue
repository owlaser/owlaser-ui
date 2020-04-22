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
      <el-card class="box-card" shadow="hover">
        <div slot="header" class="clearfix">
          <span class="result-header">项目漏洞信息</span>
        </div>
        <div v-for="(item,index) in securList" :key="index">
          <el-card class="secur-card">
            <div slot="header" class="clearfix">
              <span class="header-name">
                {{item[0].name}}
                <el-badge :value="item[item.length-1].preVersion" class="item"></el-badge>
              </span>
            </div>
            <el-table ref="filterTable" :data="item.slice(0,item.length-1)" style="width: 100%" fit>
              <el-table-column label="序号" type="index" align="center"></el-table-column>
              <el-table-column prop="ecosystem" label="Ecosystem" align="center"></el-table-column>

              <el-table-column prop="cve_id" label="Cve ID" align="center">
                <template scope="scope">
                  <a :href="scope.row.cve_url">{{ scope.row.cve_id }}</a>
                </template>
              </el-table-column>
              <el-table-column prop="ghsa_id" label="Ghsa ID" align="center" show-overflow-tooltip>
                <template scope="scope">
                  <a :href="scope.row.ghsa_url">{{ scope.row.ghsa_id }}</a>
                </template>
              </el-table-column>
              <el-table-column prop="severity" label="Severity" align="center">
                <template scope="scope">
                  <el-tag v-if="scope.row.severity=='HIGH'" type="danger">{{scope.row.severity}}</el-tag>
                  <el-tag
                    v-else-if="scope.row.severity=='MODERATE'"
                    type="warning"
                  >{{scope.row.severity}}</el-tag>
                  <el-tag v-else>{{scope.row.severity}}</el-tag>
                </template>
              </el-table-column>
              <el-table-column
                prop="vulnerableVersionRange"
                label="Vulnerable V Range"
                align="center"
              ></el-table-column>
              <el-table-column
                prop="firstPatchedVersion"
                label="First Patched "
                show-overflow-tooltip
                align="center"
              ></el-table-column>
            </el-table>
          </el-card>
        </div>
        <router-link to="/result">
          <el-button>返回</el-button>
        </router-link>
      </el-card>
    </el-main>
    <!-- 右边主体结束 -->
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      securList: null,
      dependenciesList: [],
      checkMessage: {},
      input: '',
      searchlist: null
    }
  },
  mounted() {
    // 组件创建完后获取数据，
    // 此时 data 已经被 observed 了
    this.fetchData()
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

      this.securList = JSON.parse(sessionStorage.getItem('securData'))
    },

    openDetails(row) {
      // 点击表格中的一行时跳转到细节页面  把当前表格行的值作为参数
      this.detailList = []
      this.$router.replace({
        path: './detail',
        query: { group_id: row.group_id, artifact_id: row.artifact_id }
      })
    }
  }
}
</script>

<style lang="less" scoped>
.el-container {
  min-height: 90vh;
  padding: 75px 0 20px 0;
  background: rgb(250, 248, 248);
  .el-aside {
    width: 250px !important;
    .box-card {
      .el-table {
        margin-top: -20px;
        height: 76vh;
        overflow: scroll;
      }
    }
  }
  .el-main {
    min-height: 80vh;
    padding: 0px 10px 0 20px;
    .el-card {
      .result-header {
        font-size: 25px;
        font-weight: 400;
      }
      .secur-card {
        max-height: 500px;
        margin-bottom: 30px;
        .header-name {
          font-size: 20px;
          font-weight: 600;
        }
        .el-table {
          max-height: 400px;
          margin-top: -20px;
          overflow: scroll;
          a {
            color: black;
          }
          a:hover {
            color: #409eff;
          }
        }
        .el-button {
          margin-top: 20px;
        }
      }
    }
  }
}
</style>
