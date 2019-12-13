<template>
  <div>
    <div class="landing-page">
      <div class="nav">
        <font color="white" style="font-size:35px;margin:20px">OWLASER</font>
        <a class="nav-btn" style="margin-left:60%" href="#">登 录</a>
        <a class="nav-btn" href="#">注 册</a>
        <a class="nav-btn" style="width:150px" href="#">联系我们</a>
      </div>
      <div class="page-content">
        <font style="font-size:50px;margin:20px;color:#2980b9">OWLASER</font>
        <!-- <h1>OWLASER</h1> -->
        <p>PKU-HUAWEI</p>
        <p>EMAIL:8888@pku.edu.com</p>
        <p style="width:500px;margin-left:33%">
          Spring Boot makes it easy to create stand-alone, production-grade Spring based Applications that you can "just run".
          We take an opinionated view of the Spring platform and third-party libraries so you can get started with minimum fuss. Most Spring Boot applications need very little Spring configuration.
        </p>
        <a href="#">Get Staerted</a>
      </div>
    </div>
    <div class="home-page"></div>
  </div>
</template>

 <style>
* {
  margin: 0;
  padding: 0;
  font-family: "montserrat", sans-serif;
}

.nav {
  top: 0;
  position: relative;
  /* text-align: left; */
  z-index: 10;
  width: 100%;
  height: 70px;
  /* background: #313335; */
}
.nav a {
  display: inline-block;
  text-decoration: none;
  color: #fff;
  font-size: 20px;
  /* border: 2px solid #2980b9; */
  text-transform: uppercase;
  padding: 10px 20px;
}
.nav a:hover {
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
  background: url(mty.png) no-repeat;
  background-size: cover;
  opacity: 0.3;
  animation: anim 25s linear infinite;
}

@keyframes anim {
  10% {
    transform: scale(2);
  }

  100% {
    transform: scale(1);
  }
}

.page-content {
  position: absolute;
  top: 30%;
  /* left: 50%; */
  z-index: 1;
  width: 100%;
  height: 100%;
  /* max-width: 800px; */
  text-align: center;
  padding: 0 40px;
  box-sizing: border-box;
}

.page-content h1 {
  color: #2980b9;
  font-size: 50px;
  /* font-weight: 900; */
  margin-bottom: 20px;
}

.page-content p {
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
  background: #2980b9;
  color: #fff;
}

.home-page {
  width: 100%;
  height: 100vh;
  background-color: rgb(0, 0, 0);
}
</style>