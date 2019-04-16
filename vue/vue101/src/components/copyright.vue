<template>
    <footer id="copyright">
      Copyright &copy; 麦子科技 2011-{{year}} maiz.me All Rights Reserved. 备案号：天字第一号
    </footer>
</template>

<script>
    export default {
        name: "Copyright.vue",
        data(){
            return {year:new Date().getFullYear()}
        }
      }

</script>

<style scoped>
footer{
  color: #999999;
}
</style>
