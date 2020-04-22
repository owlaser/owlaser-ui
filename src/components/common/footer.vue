<template>
  <div>
    <el-container>
      <!-- 页脚部分开始 -->
      <el-footer>
        <div>
          <h2>PKU-HUAWEI</h2>
          <a href>GitHub</a>
        </div>
      </el-footer>
      <!-- 页脚部分结束 -->
    </el-container>
  </div>
</template>

<style lang="less" scoped>
.el-footer {
  position: relative;
  width: 100%;
  height: 100px !important;
  background: black;
  color: white;
  div {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    a {
      color: white;
    }
    a:hover {
      color: #2980b9;
    }
  }
}
</style>
