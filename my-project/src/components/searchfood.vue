<template>
  <div class="searchfood">
    <ul class="foodulp">
      <li v-for="food in data.foods">
        <router-link :to="food.link">
          <img :src="food.img" alt="">
          <p>{{food.p}}</p>
        </router-link>
      </li>
    </ul>
    <div> <router-view></router-view> </div>

  </div>
</template>
<script>
  import axios from 'axios'

  export default {
    name: 'searchfood',
    data () {
      return {
        data:true
      }
    },
    created(){
      var that=this;
      axios.get('static/tsconfig.json').then(function (res) {
        that.data=res.data;
      });
    }
  }
</script>
<style scoped>
  .foodulp{
    width: 20%;
    position: relative;
    padding: 10px 0 5px 10px;
    margin: 0;
    border: 1px solid;
  }
  .foodulp li{
    text-align: center;
    width: 60px;
    height: 50px;
    padding: 6px 1px 6px 1px ;
    font-size: 15px;
    list-style: none;
  }
  .foodulp img{
    width: 25px;
    filter: grayscale(100%);
    opacity: 0.5;
  }
  .foodulp li a{
    text-decoration: none;
  }
  .foodulp li p{
    margin-top: -1px;
  }
</style>
