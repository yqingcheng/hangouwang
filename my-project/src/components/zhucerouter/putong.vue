<template>
  <div class="putong">
    <div class="shuru">
      <div>
        <span>用&nbsp;&nbsp;户&nbsp;名</span>
        <input @input="change" type="text" placeholder="请输入6-20个字符" v-model="names">
        <p class="cuo" v-if="this.names" v-on:click="shanchu1">x</p>
      </div>
      <div>
        <span>设置密码</span>
        <input @input="change" type="text" placeholder="请输入6-20位密码" v-model="password">
        <p class="cuo" v-if="this.password" v-on:click="shanchu2">x</p>
      </div>
      <div>
        <span>确认密码</span>
        <input @input="change" type="text" placeholder="请再次输入密码" v-model="passwordagain">
        <p class="cuo" v-if="this.passwordagain" v-on:click="shanchu3">x</p>
      </div>
      <div>
        <span>邮&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;箱</span>
        <input @input="change" type="text" placeholder="请输入常用邮箱地址" v-model="email">
        <p class="cuo" v-if="this.email" v-on:click="shanchu4">x</p>
      </div>
    </div>

    <div class="yes">
      <input type="checkbox" checked>
      <span>同意</span>
      <span class="xieyi" v-on:click="ceshi">用户注册协议</span>
    </div>

    <p class="oku" v-on:click="zhucetiao" v-bind:class="{red:is}">注册</p>
  </div>
</template>
<script>
  export default {
    name: 'putong',
    data () {
      return {
        names:'',
        password:'',
        passwordagain:'',
        email:'',
        is:false,
        one:false,
        two:false,
        three:false,
        four:false
      }
    },
    methods:{
      change(){
        if(this.names && this.password && this.passwordagain && this.email){
          this.is=true;
        }else{
          this.is=false;
        }
      },
      zhucetiao(){
        if(this.names && this.password && this.passwordagain && this.email){
          localStorage.setItem("telsn",this.names);
          localStorage.setItem("telsp",this.password);
          localStorage.setItem("telse",this.email);
          this.$router.push({
            path:'/shop',
            query:{
              mingzi:localStorage.getItem("telsn")
            }
          });

        }
      },
      ceshi(){
        var telsn=localStorage.getItem("telsn");
        var telsp=localStorage.getItem("telsp");
        var telse=localStorage.getItem("telse");
        console.log(telsn,telsp,telse)
      },
      shanchu1(){
        this.names='';
          this.is=false
      },
      shanchu2(){
        this.password='';
          this.is=false;
      },
      shanchu3(){
        this.passwordagain='';
          this.is=false;
      },
      shanchu4(){
        this.email='';
          this.is=false;
      }
    }

  }
</script>
<style scoped>
  .shuru{
    margin-top: 15px;
  }
  .shuru div{
    background: #FFFFFF;
    width: 100%;
    border-bottom: 2px solid #F5F5F5;
    height: 40px;line-height: 40px;
  }
  .cuo{
    background: #666666;padding: 2px 2px 2px 2px ;
    width: 9px;height: 9px;font-size: 10px;
    display: inline-block;
 border-radius: 12px;
    margin-left: 60px;
    color: white;text-align: center;
    line-height: 5px;
  }
  .shuru span{
    padding-left: 30px;
    padding-right: 10px;
  }
  .shuru input{
    border: 0;outline: none;
  }
  .yes{
    padding: 20px 0 20px 40px;
    font-size: 14px;
  }
  .xieyi{
    color: #3aa8ed;
  }
  .oku{
    width: 90%;margin-left: 5%;
    background: #ccc;
    font-size: 18px;
    line-height: 40px;
    text-align: center;
  }
  .red{
    background: red;color: white;
  }
</style>
