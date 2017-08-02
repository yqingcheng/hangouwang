<template>
  <div class="list">
    <div class="header">
      <span @click="erji"><</span>
      <span>发现</span>
      <span>
        ...
      </span>
    </div>
    <div class="lunbo">
      <swiper :options="swiperOption" ref="mySwiper">
        <!-- slides -->
        <swiper-slide v-for="data1 in data.lunbo"><img :src="data1.img" alt=""></swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
    </div>
    <div class="zhunti">
      <p><span></span>专题精选</p>
    </div>

    <div class="xuan">
      <div class="div1" v-for="small in data.jingxuan[0].small"><img :src="small.img" alt=""></div>
      <div class="div2" v-for="big in data.jingxuan[1].big"><img :src="big.img" alt=""></div>
    </div>
    <div class="shop">
      <p class="p1">精选专题商品</p>
      <div v-for="shop in data.shop">
        <img :src="shop.img" alt="">
        <p class="p2">{{shop.pq}}</p>
        <p class="p3">{{shop.doloor}}</p>
      </div>
    </div>

    <div class="shop">
      <p class="p1">全球精选</p>
      <div v-for="word in data.word">
        <img :src="word.img" alt="">
        <p class="p2">{{word.pq}}</p>
        <p class="p3">{{word.doloor}}</p>
      </div>
    </div>
    <footbar></footbar>
  </div>
</template>
<script>
  import {swiper, swiperSlide} from 'vue-awesome-swiper'
  import footbar from './footbar.vue'
  import Vue from 'vue'
  import axios from 'axios'
  import VueAwesomeSwiper from 'vue-awesome-swiper'
  export default {
    name: 'list',
    methods:{
      erji(){
        this.$router.push('/shop');
      }
    },

    data () {

      return {
        // 大图滚动
        data:true,
        swiperOption: {
          autoplay: 3000,
          pagination : '.swiper-pagination',
          paginationClickable :true
        }
      }
    },
    created(){
      var that=this;
      axios.get('../../static/tsconfig.json').then(function (res) {
        that.data=res.data;
      });
    },
    // 大图滚动 swiper
    components: {
      swiper,footbar
    }
  }
</script>
<style scoped>
  .lunbo{ width:100%;height: 122px; margin-top:55px;}
  .swiper-slide img{ width:100%;}
  .header{width: 100%;height: 55px;background: #ccc;position: fixed;top: 0;}
  .header span:nth-child(1){font-size: 25px;margin-left: 10px;  }
  .header span:nth-child(2){font-size: 23px;line-height: 55px;margin-left: 30px;color: rebeccapurple;  }
  .header span:nth-child(3){float: right;font-size: 30px;line-height: 20px;margin-right: 20px;  }
  .zhunti span{width: 4px;height: 20px;background: red;display: block;  float: left;  margin: 14px 10px 0 10px;  }
  .zhunti p{ margin-top: 30px; line-height: 50px;}
  .xuan .div1{ width: 33.3%; height: 50px; float: left; }
  .xuan .div2{ width: 50%; float: left; height: 100px;  }
  .xuan img{ width: 100%; height: 100%;  }
  .shop .p1{text-align: center;width: 100%;line-height: 60px}
  .shop div{float: left;width: 50%;}
  .shop div img{height: 150px;width: 90%;margin-left: 5%}
  .shop div p{padding: 0 10px 0 10px;line-height: 20px;margin-top:10px;display: block;;float: left}
  .shop .p3{color: red;padding: 0 0 15px 0}
</style>
