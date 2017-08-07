<template>
  <div class="chaozhihaohuo">
    <div>
      <div class="bbc">
        <h3>超值好货</h3>
        <p class="aaap">为您推荐以下商品</p>
      </div>
      <div  v-for="str in list" class="tiomto" @click="cartiao(str)">
        <img :src="str.src" alt="">
        <p>{{str.title}}</p>
        <span>{{str.price}}</span>
      </div>
    </div>

    <div>
      <div class="bbc">
        <h3>休闲零食</h3>
        <p class="aaap">为您推荐以下商品</p>
      </div>
      <div  v-for="str1 in list1" class="tiomto" id="ioo">
        <img :src="str1.src" alt="">
        <p>{{str1.title}}</p>
        <span>{{str1.price}}</span>
      </div>
    </div>

    <div>
      <div class="bbc">
        <h3>酒水饮料</h3>
        <p class="aaap">为您推荐以下商品</p>
      </div>
      <div  v-for="str2 in list2" class="tiomto" id="ioo">
        <img :src="str2.src" alt="">
        <p>{{str2.title}}</p>
        <span>{{str2.price}}</span>
      </div>
    </div>
  </div>



</template>
<script>
  export default {
    name: 'fourbar',
    methods:{
      cartiao(str){
        this.$router.push({
          path:'/shopcar',
          query:{
            price:str.price,
            img:str.src,
            title:str.title
          }
      })
    }
    },
    data () {
      return {
        list2:[
          {
            src:"http://www.hangowa.com/data/upload/shop/store/goods/135/2017/135_05428222087548461_240.jpg",
            title:"78787878787878787",
            price:"￥999.90"
          },
          {
            src:"http://www.hangowa.com/data/upload/shop/store/goods/135/2017/135_05428222087548461_240.jpg",
            title:"78787878787878787",
            price:"￥999.90"
          },
          {
            src:"http://www.hangowa.com/data/upload/shop/store/goods/135/2017/135_05428222087548461_240.jpg",
            title:"78787878787878787",
            price:"￥999.90"
          },
          {
            src:"http://www.hangowa.com/data/upload/shop/store/goods/135/2017/135_05428222087548461_240.jpg",
            title:"78787878787878787",
            price:"￥999.90"
          },
          {
            src:"http://www.hangowa.com/data/upload/shop/store/goods/135/2017/135_05428222087548461_240.jpg",
            title:"78787878787878787",
            price:"￥999.90"
          },
          {
            src:"http://www.hangowa.com/data/upload/shop/store/goods/135/2017/135_05428222087548461_240.jpg",
            title:"78787878787878787",
            price:"￥999.90"
          }
        ],
        list1:[
          {
            src:"http://www.hangowa.com/data/upload/shop/store/goods/10/2017/10_05496474656217868_240.jpg",
            title:"78787878787878787",
            price:"￥9.90"
          },
          {
            src:"http://www.hangowa.com/data/upload/shop/store/goods/10/2017/10_05496474656217868_240.jpg",
            title:"78787878787878787",
            price:"￥9.90"
          },
          {
            src:"http://www.hangowa.com/data/upload/shop/store/goods/10/2017/10_05496474656217868_240.jpg",
            title:"78787878787878787",
            price:"￥9.90"
          },
          {
            src:"http://www.hangowa.com/data/upload/shop/store/goods/10/2017/10_05496474656217868_240.jpg",
            title:"78787878787878787",
            price:"￥9.90"
          }
        ],
        list:[
          {
            src:"http://www.hangowa.com/data/upload/shop/store/goods/48/2017/48_05501493308931738_240.jpg",
            title:"111111111111111",
            price:"￥9.90"
          },
          {
            src:"http://www.hangowa.com/data/upload/shop/store/goods/48/2017/48_05501493308931738_240.jpg",
            title:"222222222222222",
            price:"￥9.80"
          },
          {
            src:"http://www.hangowa.com/data/upload/shop/store/goods/48/2017/48_05501493308931738_240.jpg",
            title:"33333333333333",
            price:"￥9.70"
          },
          {
            src:"http://www.hangowa.com/data/upload/shop/store/goods/48/2017/48_05501493308931738_240.jpg",
            title:"444444444444444",
            price:"￥9.60"
          },
          {
            src:"http://www.hangowa.com/data/upload/shop/store/goods/48/2017/48_05501493308931738_240.jpg",
            title:"5555555555555555",
            price:"￥9.50"
          },
          {
            src:"http://www.hangowa.com/data/upload/shop/store/goods/48/2017/48_05501493308931738_240.jpg",
            title:"666666666666666",
            price:"￥9.40"
          }
        ]
      }
    }

  }

</script>
<style scoped>
  h3,.aaap{
    text-align: center;
    width: 100%;
    line-height: 30px;
    display: block;
  }
.bbc{
  margin-top: 30px;
  float: left;
  width: 100%;
}
  .tiomto{
    width: 50%;
    float: left;
    text-align: center;
    word-break:break-all;
  }
  .tiomto img{
    width: 80%;
    display: inline;
  }
  span{
    color: red;
    float: left;
    margin-top: 20px;
  }
  .tiomto p{
    float: left;
  }
  #ioo img{
    margin-top: 20px;
  }
</style>
