<!-- 回收站页面 -->
<template>
  <div>
    <div>
      <el-card class="box-card">
        <el-row :gutter="20">
          <el-col :span="7">
            <el-input placeholder="请输入内容">
              <el-button slot="append" icon="el-icon-search"></el-button>
            </el-input>
          </el-col>
        </el-row>
        <br />
        <br />
        <el-table :data="tableData" stripe fit style="width: 100%">
          <el-table-column prop="toolname" label="名称"></el-table-column>
          <i class="el-icon-edit"></i>
          <el-table-column prop="name" label="删除人"></el-table-column>
          <el-table-column prop="date" label="删除时间"></el-table-column>
          <el-table-column fixed="right">
            <i class="el-icon-refresh-right" style="margin-right: 50px;"></i>
          </el-table-column>
        </el-table>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
        tableData: [
        {
          date: "2018-03-02",
          name: "刘星",
          toolname: "MongoDB Reactive Streams Driver"
        },
        {
          date: "2018-06-22",
          name: "夏东海",
          toolname: "OpenL DEV Commons"
        },
        {
          date: "2018-07-33",
          name: "刘梅",
          toolname: "JAXX :: Widgets Common"
        },
        {
          date: "2018-11-03",
          name: "夏雪",
          toolname: "Onlinebanking Finapi"
        }
      ]


    };
  },
};
</script>
<style lang='scss' scoped>
</style>