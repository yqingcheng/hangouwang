<template>
  <div class="zhezhi">
    <p @click="exitee">退出登录</p>
  </div>

</template>
<script>

  export default {
    name: 'zhezhi',
    data () {
      return {
//        mingzi1:''
      }
    },
//    mounted(){
//      this.mingzi1=this.$route.query.mingzi1;
//      console.log(this.$route.query.mingzi1)
//    },
    methods:{
      exitee(){
        console.log(11111);
        localStorage.setItem("telsn",'');
        localStorage.setItem("telsp",'');
        localStorage.setItem("telse",'');
        this.$router.push('/home')
      }
    }
  }
</script>
<style scoped>

</style>
