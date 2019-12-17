<!-- 仓库页面 -->
<template>

  <div>
    <el-dialog title="包的名字" :visible.sync="dialogFormVisible">
      <el-collapse v-model="activeNames" @change="handleChange">
        <el-collapse-item title="下载方式1" name="1">
          <div>1</div>
          <div>1</div>
        </el-collapse-item>
        <el-collapse-item title="下载方式2" name="2">
          <div>2</div>
          <div>2</div>
        </el-collapse-item>
        <el-collapse-item title="下载方式3" name="3">
          <div>3</div>
          <div>3</div>
        </el-collapse-item>
        <el-collapse-item title="下载方式4" name="4">
          <div>4</div>
          <div>4</div>
        </el-collapse-item>
      </el-collapse>
    </el-dialog>

    <!-- 侧拉菜单 -->
    <el-drawer size="20%" title="仓库列表" :visible.sync="drawer" :direction="direction">
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <!-- 一级菜单 -->
        <el-submenu :index="item.id" v-for="item in menulist" :key="item.id">
          <template slot="title">
            <i class="el-icon-folder"></i>
            <span>{{item.name}}</span>
          </template>
          <!-- 二级菜单 -->
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-submenu>
      </el-menu>
    </el-drawer>

    <el-card class="box-card">
      <el-row :gutter="20">
        <el-col :span="2">
          <div class="block">
            <el-button @click="drawer = true" type="primary" style="margin-left: 10px;">选择仓库</el-button>
          </div>
        </el-col>

        <el-col :span="7">
          <el-input placeholder="查找组件">
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </el-col>

        <el-col :span="2" style="margin-left: 35%;">
          <el-button type="primary" @click="dialogFormVisible1 = true">
            上传
            <i class="el-icon-upload el-icon--right"></i>
          </el-button>
        </el-col>

        <!-- Form -->
        <el-dialog title="上传组件" :visible.sync="dialogFormVisible1">
          <el-upload
            class="upload-demo"
            action="https://jsonplaceholder.typicode.com/posts/"
            multiple
            :limit="3"
          >
            <el-button size="small" type="primary">点击上传</el-button>
          </el-upload>
          <el-form :model="form">
            <br />
            <el-form-item label="选择仓库" :label-width="formLabelWidth">
              <el-select v-model="form.region" placeholder="请选择仓库">
                <el-option label="仓库一" value="1"></el-option>
                <el-option label="仓库二" value="2"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="添加描述" :label-width="formLabelWidth">
              <el-input v-model="form.name" autocomplete="off"></el-input>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
          </div>
        </el-dialog>

        <el-col :span="2">
          <el-button type="primary" @click="dialogFormVisible2 = true">
            创建仓库
            <i class="el-icon-edit el-icon--right"></i>
          </el-button>
        </el-col>
        <el-dialog title="创建仓库" :visible.sync="dialogFormVisible2">
          <el-form :model="form">
            <el-form-item label="仓库性质" :label-width="formLabelWidth">
              <el-select v-model="form.region" placeholder="请选择仓库性质">
                <el-option label="仓库一" value="1"></el-option>
                <el-option label="仓库二" value="2"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="仓库名称" :label-width="formLabelWidth">
              <el-input v-model="form.name" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="仓库名称" :label-width="formLabelWidth">
              <el-input v-model="form.name" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="添加描述" :label-width="formLabelWidth">
              <el-input v-model="form.name" autocomplete="off"></el-input>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
          </div>
        </el-dialog>
      </el-row>
      <br />
      <br />
      <el-table :data="tableData" stripe fit style="width: 100%">
        <el-table-column prop="toolname" label="名称"></el-table-column>
        <i class="el-icon-edit"></i>
        <el-table-column prop="name" label="上传人"></el-table-column>
        <el-table-column prop="date" label="更新时间"></el-table-column>
        <el-table-column prop="dialogTableVisible" fixed="right">
          <i class="el-icon-download" style="margin-right: 20%;" @click="dialogFormVisible = true"></i>
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
      // 菜单数据
      menulist:[
        {
          id:'1',
          name:'project1',
          // children[
            
          // ]
        },
 {
          id:'2',
          name:'project2',
          // children[
            
          // ]
        },
       {
          id:'3',
          name:'project3',
          // children[
            
          // ]
        },

      ],
        drawer: false,
        direction: 'rtl',
      activeNames: ["1"],
      dialogFormVisible: false,
      dialogFormVisible1: false,
      dialogFormVisible2: false,
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      },
      formLabelWidth: "120px",

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
      tableData: [
        {
          date: "2016-05-02",
          name: "刘德华",
          toolname: "JVM Integration For Metrics"
        },
        {
          date: "2016-05-04",
          name: "刘亦菲",
          toolname: "Graphite Integration For Metrics"
        },
        {
          date: "2016-05-01",
          name: "吴京",
          toolname: "Annotations For Metrics"
        },
        {
          date: "2016-05-03",
          name: "张毅",
          toolname: "Metrics Integration with JMX"
        }
      ]
    };
  },
  methods: {
    handleChange() {},
     handleOpen() {
      },
      handleClose() {}
  }}
</script>

<style lang='scss' scoped>
</style>