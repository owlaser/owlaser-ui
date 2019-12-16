<!-- 安全扫描页面 -->
<template>
  <div>
    <div>
      <el-card class="box-card">
        <el-row :gutter="20">
          <el-col :span="2">
          <div class="block">
            <el-cascader placeholder="筛选条件" :options="options" filterable></el-cascader>
          </div>
          </el-col>
          <el-col :span="2">
          <div class="block">
            <el-cascader placeholder="危险等级" :options="severity" filterable></el-cascader>
          </div>
          </el-col>
          <el-col :span="7">
            <el-input placeholder="检索漏洞">
              <el-button slot="append" icon="el-icon-search"></el-button>
            </el-input>
          </el-col>
        </el-row>
        <br />
        <br />
        <el-table :data="tableHole" stripe fit style="width: 100%" @row-click="openDetails">
          <el-table-column prop="holeId" label="漏洞编号"></el-table-column>
          <i class="el-icon-edit"></i>
          <el-table-column prop="groupId" label="groupId"></el-table-column>
          <el-table-column prop="artifactId" label="artifactId"></el-table-column>
          <el-table-column prop="version" label="版本"></el-table-column>
          <el-table-column prop="severity" label="危险等级"></el-table-column>
        </el-table>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
        options: [
        {
          value: "holeId",
          label: "漏洞编号"
        },
        {
          value: "groupId",
          label: "groupId"
        },
        {
          value: "artifactId",
          label: "artifactId"
        }
      ],
        severity: [
        {
          value: "None",
          label: "无"
        },
        {
          value: "Low",
          label: "低"
        },
        {
          value: "Medium",
          label: "中"
        },
        {
          value: "High",
          label: "高"
        },
        {
          value: "Critical",
          label: "严重"
        }
      ],
        tableHole: [
        {
          holeId: "CVE-2017-8046",
          groupId: "com.springframework.boot",
          artifactId: "spring-boot-starter-web",
          version: "1.5.9",
          severity: "严重（9.8）",
          url: "https://nvd.nist.gov/vuln/detail/CVE-2017-8046"
        }
      ],
    };
  },
  methods: {
    openDetails(row) {
      window.open(row.url);
    }
  }
};
</script>
<style lang='scss' scoped>
</style>