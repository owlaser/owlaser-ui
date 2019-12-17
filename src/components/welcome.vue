<template>
  <div>
    <div class="landing-page">
      <!-- <div class="page-content"> -->
      <div>
        <div class="a-input">
          <input type="file" style="opacity: 0;" />
        </div>
        <router-link to="/Result" class="a-upload">点击扫描</router-link>
      </div>
    </div>
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
<style lang='scss' scoped>
* {
  margin: 0;
  padding: 0;
  font-family: "montserrat", sans-serif;
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

.a-upload {
  display: inline-block;
  color: #2980b9;
  border: 2px solid #2980b9;
  margin-top: 15%;
  z-index: 1;
  width: 150px;
  height: 50px;
  position: relative;
  background: transparent;
  font-size: 20px;
  text-align: center;
  padding: 5px;
  text-decoration: none;
}

.a-upload:hover {
  background: #2980b9;
  color: #fff;
}

.a-input {
  display: inline-block;
  color: #2980b9;
  border: 2px solid #2980b9;
  margin-top: 15%;
  z-index: 1;
  width: 400px;
  height: 50px;
  position: relative;
  background: transparent;
  font-size: 20px;
  text-align: center;
  padding: 5px;
  text-decoration: none;
}
</style>

