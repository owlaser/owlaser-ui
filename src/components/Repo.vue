<!--  -->
<template>
  <div>
    <el-card class="box-card">
      <el-row :gutter="20">
        <el-col :span="3">
          <el-cascader :options="options" :show-all-levels="false"></el-cascader>
        </el-col>

        <el-col :span="7">
          <el-input placeholder="请输入内容">
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </el-col>

        <el-col :span="2" style="margin-left: 500px;">
          <el-button type="primary">
            上传
            <i class="el-icon-upload el-icon--right"></i>
          </el-button>
        </el-col>

        <el-col :span="2">
          <el-button type="primary">
            创建仓库
            <i class="el-icon-edit el-icon--right"></i>
          </el-button>
        </el-col>
      </el-row>
<br><br>
      <el-table :data="tableData" stripe fit style="width: 100%">
        <el-table-column prop="toolname" label="名称"></el-table-column><i class="el-icon-edit"></i>
        <el-table-column prop="name" label="上传人" ></el-table-column>
        <el-table-column prop="date" label="更新时间"></el-table-column>
         <el-table-column
      fixed="right"
     >
      <!-- <template slot-scope="scope">
        <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
        <el-button type="text" size="small">编辑</el-button>
      </template> -->
      <i class="el-icon-download" style="margin-right: 50px;"></i>
      <i class="el-icon-delete-solid"></i>
    </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      options: [
        {
          value: "group1",
          label: "group1",
          children: [
            {
              value: "A1",
              label: "仓库A"
            },
            {
              value: "B1",
              label: "仓库B"
            }
          ]
        },
        {
          value: "group2",
          label: "group2",
          children: [
            {
              value: "A2",
              label: "仓库A"
            },
            {
              value: "B2",
              label: "仓库B"
            }
          ]
        },
        {
          value: "group3",
          label: "group3",
          children: [
            {
              value: "A3",
              label: "仓库A"
            },
            {
              value: "B3",
              label: "仓库B"
            }
          ]
        }
      ],
       tableData: [{
          date: '2016-05-02',
          name: '刘德华',
          toolname: 'JVM Integration For Metrics'
        }, {
          date: '2016-05-04',
          name: '刘亦菲',
          toolname: 'Graphite Integration For Metrics'
        }, {
          date: '2016-05-01',
          name: '吴京',
          toolname: 'Annotations For Metrics'
        }, {
          date: '2016-05-03',
          name: '张毅',
          toolname: 'Metrics Integration with JMX'
        }]
    };
  },

  components: {},

  computed: {},

  mounted: {},

  methods: {}
};
</script>
<style lang='scss' scoped>
</style>