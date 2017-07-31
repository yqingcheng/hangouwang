<template>
  <div class="footbar">
    <ul class="ul1">
      <li v-for="str5 in list5"  >{{str5.connt}}</li>

    </ul>
  </div>
</template>
<script>
  export default {
    name: 'footbar',
    data () {
      return {
        list5:[
          {
            connt:"登录"

          },
          {
            connt:"注册"

          },
          {
            connt:"反馈"

          },
          {
            connt:"返回顶部"

          }
        ]
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
