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
          <span class="result-header">{{this.$route.query.artifact_id}} 组件依赖信息</span>
        </div>
        <el-table ref="filterTable" :data="detailList" style="width: 100%">
          <el-table-column label="序号" type="index"></el-table-column>
          <el-table-column prop="child_artifactid" label="Child Artifactid" align="center"></el-table-column>
          <el-table-column prop="child_groupid" label="Child Groupid" align="center"></el-table-column>
          <el-table-column prop="url" label="下载组件" align="center">
            <template scope="scope">
              <el-button
                size="mini"
                type="primary"
                plain
                @click="downLoadDependency(scope.row)"
                style="margin:0"
              >下载</el-button>
            </template>
          </el-table-column>
        </el-table>
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
      detailList: [],
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

    async fetchData() {
      const data = JSON.parse(sessionStorage.getItem('responseData'))
      this.dependenciesList =
        this.$store.state.scanResult.dependenciesList || data.dependenciesList
      this.checkMessage =
        this.$store.state.scanResult.checkMessage || data.checkMessage

      // 查询详细组件信息
      const dependencyInfo = this.$route.query
      const { data: res } = await this.$http.get(
        'http://182.254.200.15:8081/getdependency',
        {
          params: {
            groupId: dependencyInfo.group_id,
            artifactId: dependencyInfo.artifact_id
          }
        }
      )
      // 将得到的数据渲染到表格当中
      for (const item in res.data.list) {
        this.detailList = this.detailList.concat(res.data.list[item])
      }
    },
    // 用户点击具体的组件   跳转到MavenRepository
    downLoadDependency(row) {
      window.open(row.url)
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
    padding: 0px 10px 0 20px;
    .el-card {
      .result-header {
        font-size: 25px;
      }
      .el-table {
        margin-top: -20px;
        height: 70vh;
        overflow: scroll;
      }
      .el-button {
        margin-top: 20px;
      }
    }
  }
}
</style>
