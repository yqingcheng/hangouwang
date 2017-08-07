<template>
  <div class="footbar">
    <ul class="ul1">
      <li @click="denglu">登录</li>
      <li @click="zhuce">注册</li>
      <li>反馈</li>
      <li @click="fanhuidingbu">返回顶部</li>

    </ul>
  </div>
</template>
<script>
  export default {
    name: 'footbar',
    methods:{
      fanhuidingbu(){
        document.body.scrollTop = 0;
      },
      denglu(){
        this.$router.push('/denglu');
      },
      zhuce(){
        this.$router.push('/zhuce');
      }
    },
    data () {
      return {

      }
    }
  }
</script>
<style scoped>
  .footbar{
    float: left;
    width: 100%;
    margin-bottom: 60px;
  }
  .ul1 li{
    text-align: center;
    line-height: 50px;
    width: 25%;
    float: left;
    border-bottom: 1px solid #ccc;
  }
</style>
