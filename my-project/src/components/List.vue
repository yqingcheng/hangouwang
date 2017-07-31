<template>
  <div class="list">
    <div class="header">
      <span><</span>
      <span>发现</span>
      <span>
        ...
      </span>
    </div>
    <div class="lunbo">
      <swiper :options="swiperOption" ref="mySwiper">
        <!-- slides -->
        <swiper-slide><img src="http://www.hangowa.com/data/upload/mobile/special/s1/s1_05327186142976760.jpg" alt=""></swiper-slide>
        <swiper-slide><img src="http://www.hangowa.com/data/upload/mobile/special/s1/s1_05327186142976760.jpg" alt=""></swiper-slide>
        <swiper-slide><img src="http://www.hangowa.com/data/upload/mobile/special/s1/s1_05327186142976760.jpg" alt=""></swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>
<script>
  import {swiper, swiperSlide} from 'vue-awesome-swiper'

  import Vue from 'vue'
  import axios from 'axios'
  import VueAwesomeSwiper from 'vue-awesome-swiper'
  export default {
    name: 'list',
    data () {
      return {
        // 大图滚动
        swiperOption: {
          autoplay: 3000,
          pagination : '.swiper-pagination',
          paginationClickable :true
        }
      }
    },
    created(){
      var that=this;
      axios.get('http://www.hangowa.com/mo_bile/index.php?act=index&op=special&special_id=1').then(function (res) {
        console.log(res);
      });
//      console.log(this);
    },
    // 大图滚动 swiper
    components: {
      swiper
    }
  }
</script>
<style scoped>
  .lunbo{
    width:100%;
    height: 122px;
    margin-top:55px;
  }
  .swiper-slide img{
    width:100%;
  }
  .header{
    width: 100%;
    height: 55px;
    background: #ccc;
    position: fixed;
    top: 0;
  }
  .header span:nth-child(1){
      font-size: 25px;
    margin-left: 10px;
  }
  .header span:nth-child(2){
    font-size: 23px;
   line-height: 55px;
    margin-left: 30px;
    color: rebeccapurple;
  }
  .header span:nth-child(3){
    float: right;
    font-size: 30px;
    line-height: 20px;
    margin-right: 20px;
  }
</style>
