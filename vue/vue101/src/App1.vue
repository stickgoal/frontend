<template>
  <div id="app">
    <el-container style="height: 500px; border: 1px solid #eee">
      <el-container >
      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <i class="el-icon-edit"></i>
        <i class="el-icon-share"></i>
        <i class="el-icon-delete"></i>
        <el-button type="primary" icon="el-icon-search">搜索</el-button>
        <el-button type="primary" round>主要按钮</el-button>
        <el-button type="success" round>成功按钮</el-button>
        <el-button type="info" round>信息按钮</el-button>
        <el-button type="warning" round>警告按钮</el-button>
        <el-button type="danger" round>危险按钮</el-button>
      </el-aside>
        <el-main>
          <img src="./assets/logo.png" alt="">
          <h1>{{msg}}</h1>
          <input v-model="msg" placeholder="输入您的数据"/>
        </el-main>
      </el-container>
    <el-footer>
      <copyright/>
    </el-footer>
    </el-container>
  </div>
</template>

<script>
  import copyright from "./components/copyright.vue";
export default {
  name: 'app',
  data () {
    return {
      msg: 'Hello Vue'
    }
  },
  components:{ copyright}
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
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
