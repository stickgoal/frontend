<template>
    <div>
      <form v-bind:acion="actionUrl" @submit="doSubmit">
        <div class="item">
          <h2>{{loginTitleInner}}</h2>
        </div>
        <div class="item">
          <input type="text" v-model="username" placeholder="请输入用户名"/>
        </div>
        <div class="item">
         <input type="password" v-model="password" placeholder="请输入密码"/>
        </div>
        <div>
          <input type="submit" value="提交">
        </div>
      </form>
    </div>
</template>

<script>
import axios from 'axios'
import qs from 'qs'

export default {
  name: 'Login',
  props: ['action', 'loginTitle'],
  data () {
    return {
      username: '',
      password: '',
      actionUrl: this.action,
      loginTitleInner: this.loginTitle
    }
  },
  methods: {
    doSubmit (e) {
      var self = this
      console.log(self)
      // 注意坑点 axios post 传参需要用qs的stringify一下
      axios.post('http://localhost:9999/login', qs.stringify({
        username: self.username,
        password: self.password
      })).then(function (response) {
        console.log(response)
        self.$router.push({path: '/home'})
      })
      // 禁止默认行为
      e.preventDefault()
    }
  }
}
</script>

<style scoped>
form .item{
  height: 3em;
  line-height: 2em;
}
  form{
    width: 400px;
    border:5px solid skyblue;
    margin:0 auto;
    border-radius: 10px;
  }
</style>
