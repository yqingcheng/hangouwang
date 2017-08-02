<template>

  <div class="hello">
    <div> <router-view></router-view> </div>
    <div class="wrap">
      <ul class="uls">
        <li>
          <router-link to="/Home">
            <img src="http://www.hangowa.com/wap/images/home_w.png" alt="">
            <p>首页</p>
          </router-link>
        </li>
        <li>
          <router-link to="/List">
            <img src="http://www.hangowa.com/wap/images/cart_w.png" alt="">
            <p>发现</p>
          </router-link>
        </li>
        <li>
          <router-link to="/Search">
            <img src="http://www.hangowa.com/wap/images/browse_list_w.png" alt="">
            <p>类目</p>
          </router-link>
        </li>
        <li>
          <router-link to="/Shop">
            <img src="http://www.hangowa.com/wap/images/member_w.png" alt="">
            <p>我的商城</p>
          </router-link>
        </li>
      </ul>
    </div>
  </div>

</template>

<script>
export default {
  name: 'hello',

  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .uls a{
    color: white;
    text-decoration: none;
  }
  .uls img{
    width: 20px;
    height: 20px;
    display: inline;
  }
  .uls li{
    text-align: center;
    width: 25%;

  }
    .uls{
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 90%;
      margin: auto;
      height: 55px;
      color: white;
    }

  .wrap{
    background: rgba(0,0,0,0.7);
    position: fixed;
    bottom: 0;
    width: 100%;
  }
*{
  margin: 0;
  padding: 0;
  list-style: none;
}
</style>
