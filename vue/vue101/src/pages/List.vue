<template>
  <div id="list">
    <el-row>
    <el-col :span="16" v-for="a in articles" class="text item">

    <el-card class="box-card">
      <img v-bind:src="'https://images.weserv.nl/?url='+a.images.small" alt="">
      <h4>{{a.title}}({{a.year}})</h4>
      <p>{{a.rating.average}}分</p>
      <p>主演：<span v-for="actor in a.casts"  style="padding-right: 15px;background: #eee;">{{actor.name}}</span></p>
      </el-card>
    </el-col>

    </el-row>
  </div>
</template>

<script>


    export default {
        name: "List.vue",
       data(){
          return {
            list:['apple','banana','orange'],
            articles:[]
          }
       },
      mounted() {
          this.$http.jsonp('https://api.douban.com/v2/movie/top250?count=10',{},{
            headers:{},
            emulateJSON:true
          }).then(function (response) {
              this.articles = response.data.subjects
          },function(resp){
            console.log(resp)
          })
      }
    }
</script>

<style scoped>

</style>
