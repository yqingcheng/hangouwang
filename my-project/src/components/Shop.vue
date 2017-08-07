<template>
  <div class="shop">
      <div class="lingjian">
        <span @click="sets"></span>
        <span>...</span>
      </div>

    <div class="shoptop" >
      <div   class="member-info" @click="denglu1">
        <span  class="default-avatar" style="display:block;"></span>
        <span  class="to-login" >{{mingzi}}</span>
      </div>
      <div class="member-collect">
        <span>
          <span >
            <i class="favorite-goods"></i>
            <p>商品收藏</p>
          </span>
        </span>
        <span>
          <span>
            <i class="favorite-store"></i>
            <p>店铺收藏</p>
          </span>
        </span>
        <span>
          <span >
            <i class="goods-browse"></i>
            <p>我的足迹</p>
          </span>
        </span>
      </div>
    </div>
    <dingdan></dingdan>
  </div>
</template>
<script>
  import dingdan from './dingdan.vue'
  export default {
    name: 'shop',
    data () {
      return {
        mingzi:''
      }
    },
    mounted(){
      this.mingzi=this.$route.query.mingzi;
      console.log(this.$route.query.mingzi)
    },
    methods:{
      denglu1(){
        this.$router.push('/denglu');
      },
      sets(){
        this.$router.push({
          path:'/zhezhi'
//          query:{
//            mingzi1:this.mingzi
//          }
        });
      }
    },

    components:{
      dingdan
    }
  }
</script>
<style scoped>
  .lingjian{
    width: 100%;
    height: 40px;
    position: absolute;
  }
  .lingjian span:nth-child(1){
    background-image: url(http://www.hangowa.com/wap/images/set_w.png);
    background-position: 50% 50%;
    background-repeat: no-repeat;
    background-size: 100%;
    opacity: 1;
    float: left;
    width: 25px;
    height: 40px;
    margin-left: 20px;
  }
  .lingjian span:nth-child(2){
      font-size: 30px;
    color: white;
    line-height: 20px;
    float: right;
    margin-right: 20px;
  }
.shoptop{
  animation: changeBg 20s infinite;
  background-color: #ED5564;
  background-image: url(http://www.hangowa.com/wap/images/member_top_bg.png);
  background-size: cover;
  text-align: center;
  width: 100%;
  height: 240px;
  /*position: relative;*/
  /*z-index: -1;*/
}
@keyframes changeBg{
  0%{background-color:#ED5564;}
  10%{background-color:#FB6E52;}
  20%{background-color:#FFCE55;}
  30%{background-color:#A0D468;}
  40%{background-color:#48CFAE;}
  50%{background-color:#4FC0E8;}
  60%{background-color:#5D9CEC;}
  70%{background-color:#AC92ED;}
  80%{background-color:#EC87BF;}
  90%{background-color:#ED5564;}
}
  .member-info {
    width: 100px;
    height: 115px;
    margin: -5rem 0 0 -55px;
    position: absolute;
    z-index: 999;  top: 130px;  left: 50%;
    animation: memberInfoDown 1000ms ease-in;
    -webkit-animation: memberInfoDown 1000ms ease-in;
  }
  @keyframes  memberInfoDown
  {
    0% { top: -300px;}
    30% { top: -100px}
    75% { top: 145px}
    85% { top: 110px}
    95% { top: 140px}
    100% { top: 130px;}
  }
  .member-info .default-avatar {
    background-color: rgba(0,0,0,0.5);
    background-image: url(http://www.hangowa.com/wap/images/member_w.png);
    background-repeat: no-repeat;
    background-position: 50% 50%;
    background-size: 60%;
    width: 85px;
    height: 85px;
    margin: 0 auto;
    border-radius: 100%;

  }
  .member-info .to-login {
    font-size: 18px;
    color: #FFF;
    line-height: 30px;
    height: 1rem;
    margin: 0.25rem auto;
  }
  .member-collect {
    font-size: 0;
    height: 65px;
    filter: progid:DXImageTransform.Microsoft.gradient(enabled='true',startColorstr='#19000000', endColorstr='#19000000');
    background: rgba(0,0,0,0.1);
    position: absolute;
   width: 100%;
    top:175px ;

  }
  .member-collect span {
    display: inline-block;
    width: 33.33%;
    height: 2rem;
    padding: 5px 0;
  }
  .member-collect span i.favorite-goods {
    background-image: url(http://www.hangowa.com/wap/images/favorite_w.png);
    background-repeat: no-repeat;
    background-position: 50% 50%;
    background-size: 100%;

  }
  .member-collect span i {
    vertical-align: top;
    display: inline-block;
    width: 25px;
    height: 25px;
    margin: 0 auto;

  }
  .member-collect span p {
    font-size: 14px;
    line-height: 20px;
    color: #FFF;
    width: 80px;
    height: 1rem;
    margin-left: -18px;
  }
  .member-collect span i.favorite-store {
    background-image: url(http://www.hangowa.com/wap/images/store_w.png);
    background-repeat: no-repeat;
    background-position: 50% 50%;
    background-size: 100%;
  }
  .member-collect span i.goods-browse {
    background-image: url(http://www.hangowa.com/wap/images/goods-browse_w.png);
    background-repeat: no-repeat;
    background-position: 50% 50%;
    background-size: 100%;
  }
</style>
