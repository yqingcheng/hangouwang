<template>
  <div class="shopcar">
    <div class="header1">
      <span @click="fanhui"><</span>
      <span>...</span>
    </div>
    <div class="tiomto" >
      <img :src="shuju.img" alt="">
      <p>{{shuju.title}}</p>
      <span>{{shuju.price}}</span>
    </div>

    <p class="popo">
      <span @click="jian">-</span>
      <span>{{number}}</span>
      <span @click="jia">+</span>

    </p>

    <div class="che" @click="jiaru">{{num}}</div>
    <div class="buy">

      <span>立即购买</span>
      <span @click="oppen">加入购物车</span>
    </div>
  </div>
</template>
<script>

  export default {
    name: 'shopcar',
    data () {
      return {
          shuju:'',
          number:'1',
          num:this.arr.length
      }
    },
    mounted(){
      this.shuju=this.$route.query;
      this.arr1.push(this.shuju);
      console.log(this.arr1)
    },
    methods:{
      fanhui(){
        this.$router.back(-1)
      },
      jian(){
          this.number=this.number-1;
        if(this.number<0){
          this.number=0;
        }
      },
      oppen(){
        if(this.arr.length==0){
          this.arr.push(this.shuju);
        }else{
          for(var i=0;i<this.arr.length;i++){
            if(this.arr[i]!==this.arr1[this.arr1.length-1]){
              this.arr.push(this.shuju);
            }else{
              window.alert("该商品已存在购物车");
              return;
            }
          }
        }
        this.num=this.arr.length;
      },
      jiaru(){
        this.$router.push('/jiesuan')
      },
      jia(){
        this.number=this.number*1+1;
      }
    }
  }
</script>
<style scoped>
  .che{
    width: 50px ;height: 50px ;border: 1px solid;
    border-radius: 50px;background: pink;
    position: fixed;bottom: 0;line-height: 50px;
    text-align: center;
  }
  .popo span{
    padding: 10px 20px;background: red;
    font-size: 18px;color: white;
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
  .buy{
    position: fixed;bottom: 0;right: 0;
  }
  .buy span:first-child{
    padding: 10px 20px;background: coral;
    font-size: 18px;color: white;
  }
  .buy span:last-child{
    padding: 10px 20px;background: red;
    font-size: 18px;color: white;
  }
  .header1{
    width: 100%;height: 50px;
    display: flex;justify-content: space-between;
    background: #f5f5f5;
  }
  .header1 span{
    display: inline-block;padding: 0 20px 0 20px ;
    font-size: 20px;
    line-height: 0px;
  }
</style>
