<template>
  <div class="zhuce">
    <div class="denglu-header">
      <div @click="shouye">
        <span class="pppp"></span>
      </div>
      <span>注册</span>
      <span @click="zhuceq">登录</span>
    </div>

    <div class="next">
      <router-link to="/putong">
          <div>
                <span class="span1"></span>
                <span>普通注册</span>
          </div>
      </router-link>
      <router-link to="/phone">
          <div>

                <span class="span2"></span>
                <span>手机注册</span>

          </div>
      </router-link>
    </div>
    <router-view></router-view>

  </div>
</template>
<script>
//  import putong from './zhucerouter/putong.vue'
  export default {
    name: 'zhuce',
    methods:{
      shouye(){
        this.$router.push('/home')
      },
      zhuceq(){
        this.$router.push('/denglu')
      }
    },

    data () {
      return {

      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  body{
    background: #f5f5f5;
  }
  .denglu-header{
    width: 100%;height: 50px;  display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .denglu-header .pppp{
    width: 20px ;height: 20px;
    background-repeat: no-repeat;
    background-position: 50% 50%;
    background-size: 90%;
    opacity: 0.7;display: block;
    background-image: url(http://www.hangowa.com/wap/images/home_b.png);
  }
  .denglu-header div{
    padding: 0 0 0 20px;
  }
  .denglu-header span:nth-child(3){
    padding-right: 20px;color: red;
  }
  .next{
    width: 100%;background: #fff;height: 45px;
    display: flex;justify-content: space-around;
    align-items: center;font-size: 14px;
  }
  .next .span1{
    float: left;
    background-image: url(http://www.hangowa.com/wap/images/reg_r.png);
    width: 25px;height: 25px;display: block;
    background-position: 50% 50%;
    background-repeat: no-repeat;
    background-size: 70%;
  }
  .next div{
    padding: 0 5px 10px 0;
  }
  .next .span2{
    float: left;
    background-image: url(http://www.hangowa.com/wap/images/regm_r.png);
    width: 25px;height: 25px;display: block;
    background-position: 50% 50%;
    background-repeat: no-repeat;
    background-size: 70%;
  }
  .next  a{
    color: black;
    text-decoration: none;
  }
  .router-link-active  div{
    border-bottom: 2px solid red;
    color: red;
  }

</style>
