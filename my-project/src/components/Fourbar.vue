<template>
  <div class="fourbar">

    <ul class="fourlis">
      <li>
        <a href="#">
          <span><i></i></span>
        <!--<img src="http://www.hangowa.com/wap/images/browse_list_w.png" alt="">-->
        <p>分类</p>
        </a>
      </li>
      <li>
        <a href="#">
          <span><i></i></span>
        <!--<img src="http://www.hangowa.com/wap/images/cart_w.png" alt="">-->
        <p>购物车</p>
        </a>
      </li>
      <li>
        <a href="#">
          <span><i></i></span>
        <!--<img src="http://www.hangowa.com/wap/images/member_w.png" alt="">-->
        <p>我的商城</p>
        </a>
      </li>
      <li>
        <a href="#">
          <span><i></i></span>
        <!--<img src="http://www.hangowa.com/wap/images/mcc_04_w.png" alt="">-->
        <p>每日签到</p>
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    name: 'fourbar',
//    data () {
//      return {
//
//      }
//    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .fourbar{
    width: 100%;
    float: left;
    padding: 10px 0 10px 0;
  }
  .fourlis{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .fourlis li{
    text-align: center;
    width: 25%;
  }
  .fourlis li span{
    display: inline-block;
    width: 3.5rem;
    height: 3.5rem;
    margin: 0 auto 0.3rem auto;
    border-radius: 100%;
    }
  .fourlis span:nth-child(1){
    background: red;
  }
  .fourlis span:nth-child(2){
    background: green;
  }
  .fourlis li span i{
    display: block;
    width: 100%;
    height: 100%;
    background-image: url("http://www.hangowa.com/wap/images/mcc_04_w.png");
    background-position: 50% 50%;
    background-repeat: no-repeat;
    background-size: 50%;
  }
</style>
