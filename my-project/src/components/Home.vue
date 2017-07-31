<template>
  <div class="home">
    <div class="navbar">
      <div class="logo"></div>
      <div class="header">
        <a href="#" class="inp">
          <i class="icon">
          </i>
        </a>
        <a href="#" class="cart"></a>
      </div>
    </div>
    <div class="swipe-wrap">
        <a href="#">
          <img src="http://www.hangowa.com/data/upload/mobile/special/s0/s0_05503492593015087.jpg" alt="">
        </a>
    </div>
    <fourbar></fourbar>
    <chaozhihaohuo></chaozhihaohuo>
    <footbar></footbar>
  </div>

</template>
<script>
  import Fourbar from './Fourbar.vue'
  import chaozhihaohuo from './chaozhihaohuo.vue'
  import footbar from './footbar.vue'
  export default {
    name: 'home',
    components:{
      Fourbar,chaozhihaohuo,footbar
    }
//    data () {
//      return {
//
//      }
//    }
  }
</script>
<style scoped>
  .navbar{
    width: 100%;
    padding: 10px;
    background: #e7e7e9;
    position: fixed;
    top: 0;
    z-index: 99;
  }
  .navbar .logo{
    width: 33.3%;
    float: left;
    height: 45px;
    background: url(http://www.hangowa.com/wap/images/home_logo.png) no-repeat center;
  }
  .header{
    width: 66.6%;
    float: right;
    height: 45px;
    line-height: 45px;
    display: block;
  }
  .inp {
    width: 70%;
    border: solid 1px #ccc;
    border-radius: 20px;
    height: 35px;
    background: #fff;
    overflow: hidden;
  }
  .inp {
    position: relative;
    display: inline-block;
  }
  .icon {
    display: block;
    width: 35px;
    height: 35px;
    background: url(http://www.hangowa.com/wap/images/search_ico.png) no-repeat center;
    background-size: 55%;
    float: right;
  }
   .cart {
    display: inline-block;
    width: 40px;
    height: 40px;
    background: url(http://www.hangowa.com/wap/images/cart_b.png) no-repeat center;
    background-size: 65%;
  }
  .swipe-wrap{
    float: left;
   margin-top: 65px;
    width: 100%;
    height: 150px;
  }
  .swipe-wrap  img{
    width: 100%;
    height: 100%;
  }
</style>
