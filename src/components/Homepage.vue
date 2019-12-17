<template>
  <div>
    <div class="landing-page">
      <!-- nav area -->
      <div class="nav">
        <span style="position:fixed; left:50px; top:15px;">
          <font color="white" style="font-size:35px;">OWLASER</font>
        </span>
        <span style="position:fixed; right:50px; top:15px;">
          <a @click="dialogFormVisible1 = true">登 录</a>
          <a @click="dialogFormVisible2 = true">注 册</a>
          <a style="width:150px" href="#">联系我们</a>
        </span>
      </div>

      <!-- Login from -->
      <el-dialog title="用户登录" :visible.sync="dialogFormVisible1">
        <el-form :model="form" router>
          <br />
          <br />
          <br />
          <el-form-item label="用户名" :label-width="formLabelWidth">
            <el-input v-model="form.name" autocomplete="off" style="width:250px" placeholder="用户名"></el-input>
          </el-form-item>
          <el-form-item label="密  码" :label-width="formLabelWidth">
            <el-input
              v-model="form.password"
              autocomplete="off"
              style="width:250px"
              placeholder="密码"
            ></el-input>
          </el-form-item>
        </el-form>
        <div>
          <el-button type="primary" @click="dialogFormVisible1 = false">登 录</el-button>
          <el-button index="/register">注 册</el-button>
        </div>
      </el-dialog>
      <!-- Register form -->
      <el-dialog title="用户注册" :visible.sync="dialogFormVisible2">
        <el-form ref="form" :model="form" label-width="240px">
          <el-form-item label="用户名">
            <el-input v-model="form.name" style="width:250px"></el-input>
          </el-form-item>
          <el-form-item label="密  码">
            <el-input v-model="form.pass" style="width:250px"></el-input>
          </el-form-item>
          <el-form-item label="邮  箱">
            <el-input v-model="form.email" style="width:250px"></el-input>
          </el-form-item>
          <el-form-item label="性  别">
            <el-select v-model="form.gender" placeholder="请选择性别" style="width: 200px;">
              <el-option label="男" value="male"></el-option>
              <el-option label="女" value="female"></el-option>
            </el-select>
          </el-form-item>
        </el-form>
        <div>
          <el-button type="primary" index="/regist">注 册</el-button>
          <el-button @click="dialogFormVisible = false">取 消</el-button>
        </div>
      </el-dialog>

      <!-- pege area -->
      <div class="page-content">
        <h1>OWLASER</h1>
        <p
          style="width:500px;margin-left:33%"
        >Spring makes it easy to create stand-alone, Spring based Applications that you can "just run".</p>
        <br />
        <p>PKU-HUAWEI</p>

        <router-link to="/welcome">Get Staerted</router-link>
      </div>
    </div>
    <!-- <div class="home-page"></div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
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
      formLabelWidth: "120px"
    };
  }
};
</script>

 <style>
* {
  margin: 0;
  padding: 0;
  font-family: "montserrat", sans-serif;
}

.nav {
  top: 0;
  position: relative;
  z-index: 10;
  width: 100%;
  height: 70px;
}
.nav a {
  display: inline-block;
  text-decoration: none;
  color: #fff;
  font-size: 20px;
  text-transform: uppercase;
  padding: 10px 20px;
}
.nav a:hover {
  text-decoration: none;
  background: #2980b9;
  color: #fff;
}

.landing-page {
  width: 100%;
  height: 800px;
  background: #000;
  position: relative;
  overflow: hidden;
}

.landing-page::after {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: url(../assets/mty.png) no-repeat;
  background-size: cover;
  opacity: 0.3;
  animation: anim 25s linear infinite;
}

@keyframes anim {
  0% {
    transform: scale(2);
  }

  100% {
    transform: scale(1);
  }
}

.page-content {
  position: absolute;
  top: 20%;
  /* left: 50%; */
  z-index: 1;
  width: 100%;
  height: 100vh;
  /* max-width: 800px; */
  text-align: center;
  padding: 0 40px;
  box-sizing: border-box;
}

.page-content h1 {
  -webkit-text-stroke: 2px #2980b9;
  -webkit-text-fill-color: transparent;
  font-size: 150px;
  font-family: "montserrat", sans-serif;
  margin-bottom: 20px;
}

.page-content p {
  font-size: 20px;
  color: #fff;
  margin-bottom: 20px;
}

.page-content a {
  display: inline-block;
  text-decoration: none;
  color: #2980b9;
  border: 2px solid #2980b9;
  text-transform: uppercase;
  padding: 10px 20px;
}

.page-content a:hover {
  text-decoration: none;
  background: #2980b9;
  color: #fff;
}

.home-page {
  width: 100%;
  height: 100vh;
  background-color: rgb(0, 0, 0);
}
</style>