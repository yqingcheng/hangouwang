<template>
  <div class="search">
    <div class="headerbar">
      <div @click="tiao"><</div>
      <div class="fen">
        <input type="text" placeholder="请输入关键字">
        <span></span>
      </div>
      <div class="three">...</div>
    </div>
    <searchfood></searchfood>
  </div>
</template>
<script>
  import searchfood from './searchfood.vue'
  export default {
    name: 'search',
    data () {
      return {

      }
    },
    methods:{
      tiao(){
        this.$router.push('/');
//        this.$router.go(-1);
      }
    },

    components: {
      searchfood
    }
  }
</script>
<style scoped>
   .headerbar{
     width: 100%;
     height: 50px;
     display: flex;
     justify-content: space-between;
     align-items: center;
     font-size: 30px;
   }
   .headerbar div:first-child{
     padding-left: 20px;
     margin-top: -5px;
   }
  .headerbar input{
    padding: 0 10px 0 10px;
    width: 180px;
    height: 40px;
    border: 2px solid #ccc;
    border-radius: 20px;
    float: left;
  }
  .three{
    margin-top: -20px;
    padding-right: 20px;
  }
  .headerbar div span{
    width: 25px;
    height: 40px;
    float: right;
    background-repeat: no-repeat;
    margin-top: 10px;margin-left: 10px;
    background-size: 100%;
    background-image: url(http://www.hangowa.com/wap/images/search_ico.png);
  }
</style>
