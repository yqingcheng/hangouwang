<template>
  <div class="searchfood">
    <ul class="foodulp">
      <li v-for="food in data.foods">
        <router-link :to="food.link" >
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
    height: 600px;
    background: #f5f5f5;
    display: block;
  }
  .foodulp li {
    text-align: center;
    width: 65px;
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
    color: #555555;
  }
  .foodulp li p{
    margin-top: -1px;
    /*padding-bottom: 8px;*/
    padding: 0 2px 8px 2px;
  }
  .router-link-active p{
    color: red;
    border-bottom: 2px solid;
  }
  .router-link-active img{
    width: 25px;
    filter: grayscale(0%);
    opacity: 1;
  }
</style>
