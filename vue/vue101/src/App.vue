<template>
  <div id="app">

      <el-container>
        <el-header>
          <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
            <el-menu-item index="1">
              <router-link to="/first">首页</router-link>
            </el-menu-item>
            <el-menu-item index="2">
              <router-link to="/second">豆瓣电影排行榜</router-link>
            </el-menu-item>
          </el-menu>

        </el-header>
        <el-main>
          <router-view class="view"></router-view>
        </el-main>
        <el-footer>Footer</el-footer>
      </el-container>
  </div>
</template>

<script>

  export default {
    name: 'app',
    data() {
      return {
        msg: 'Hello Vue',
        activeIndex:2
      }
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    /*display: inline-block;*/
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
