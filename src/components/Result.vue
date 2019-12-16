
<template>
  <div>
    <el-container>
      <el-aside width="200px">
        <div class="grid-content bg-purple" style="border: 10px">
          <el-input style="padding:10px">
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
          <el-table :data="tableData" height="100vh" style="width: 100%">
            <el-table-column prop="name" label="姓名" width="180"></el-table-column>
          </el-table>
        </div>
      </el-aside>

      <el-main>
        <div class="grid-content bg-purple-light">
          <el-input placeholder="请输入内容" style="padding:30px;width:500px">
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
          <hr />
          <el-card class="box-card1">
            <div slot="header" class="clearfix">版本信息</div>
            <div v-for="o in 4" :key="o" class="text item">{{'列表内容 ' + o }}</div>
            <el-button style="float: right;" type="text">查看更多</el-button>
          </el-card>

          <el-card class="box-card2">
            <div slot="header" class="clearfix">版本信息</div>
            <div v-for="o in 4" :key="o" class="text item">{{'列表内容 ' + o }}</div>
            <el-button style="float: right;" type="text">查看更多</el-button>
          </el-card>

          <el-card class="box-card3">
            <div slot="header" class="clearfix">版本信息</div>
            <div v-for="o in 4" :key="o" class="text item">{{'列表内容 ' + o }}</div>
            <el-button style="float: right;" type="text">查看更多</el-button>
          </el-card>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          name: "王小虎"
        },
        {
          name: "王小虎"
        },
        {
          name: "王小虎"
        },
        {
          name: "王小虎"
        },
        {
          name: "王小虎"
        },
        {
          name: "王小虎"
        },
        {
          name: "王小虎"
        }
      ]
    };
  }
};
</script>


<style lang='scss' scoped>
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}

.box-card1 {
  margin: 20px;
  float: left;
  width: 545px;
  height: auto;
}

.box-card2 {
  margin: 20px;
  float: right;
  width: 545px;
  height: auto;
}
.box-card3 {
  margin: 20px;
  float: right;
  width: 545px;
  height: auto;
}
</style>