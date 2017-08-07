<template>
  <div class="denglu">
    <div class="denglu-header">
      <div @click="shouye">
        <span class="pppp"></span>
      </div>
      <span>登录</span>
      <span @click="zhuceq">注册</span>
    </div>
    <div class="shuru">
      <div>
        <span>账 户</span>
        <input @input="change" type="text" placeholder="请输入用户名/已验证手机" v-model="names">
        <p class="cuo" v-if="this.names" v-on:click="mingzi">x</p>
      </div>
      <div>
        <span>密 码</span>
        <input @input="changes" type="text" placeholder="请输入登录密码" v-model="password">
        <p class="cuo" v-if="this.password" v-on:click="mima">x</p>
      </div>
    </div>
    <div class="baozi">
      <div class="sevenday">
        <div >
          <input type="checkbox" checked>
          <span>七天自动登录</span>
        </div>
        <div>
          <span>忘记密码?</span>
        </div>
      </div>
      <p class="shima" v-on:click="denglutiao" v-bind:class="{red:is}">登录</p>
      <div class="hezuo">
        <span></span>
        <span>合作账号登录</span>
        <span></span>
      </div>
      <div class="qqt"></div>
      <div id="charu"></div>
    </div>

  </div>

</template>
<script>
  export default {
    name: 'denglu',
    methods:{
      shouye(){
        this.$router.push('/home');
      },
      zhuceq(){
        this.$router.push('/zhuce');
      },
      mingzi(){
        this.names='';
        this.is=false;
      },
      mima(){
        this.password='';
        this.is=false;
      },
      changes(){
        if(this.names && this.password){
          this.is=true;
        }
      },
      change(){
        if(this.names && this.password){
          this.is=true;
        }else{
          this.is=false;
        }
      },
      denglutiao(){
        var telsn=localStorage.getItem("telsn");
        var telsp=localStorage.getItem("telsp");
        if(this.names && this.password){
          if(this.names==telsn && this.password==telsp){
            this.$router.push({
              path:'/shop',
              query:{
                mingzi:localStorage.getItem("telsn")
              }
            })
          }else{
            var p=document.createElement('p');
            var charu=document.getElementById('charu');
            if(charu.children.length>0){
              charu.children.length=0;
            }
            p.innerHTML='用户名不存在';
            charu.appendChild(p);
            var id=setInterval(shijian,1000);
            var x=0;
            shijian();
            function shijian() {
              x++;
              if(x>4){
                clearInterval(id);
                charu.removeChild(p);
              }
            }
          }
        }
      }
    },
    data () {
      return {
        names:'',
        password:'',
        is:false

      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.denglu-header{
  width: 100%;height: 50px;  display: flex;
  justify-content: space-between;background: #F5F5F5;
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
  .shuru div{
    width: 100%;
    border-bottom: 2px solid #F5F5F5;
    height: 40px;line-height: 40px;
  }
  .shuru span{
    padding-left: 30px;
    padding-right: 10px;
  }
  .shuru input{
    border: 0;outline: none;
  }
  .sevenday{
    width: 100%;height: 55px;background: #F5F5F5;
    display: flex;justify-content: space-around;
    align-items: center;font-size: 14px;
  }
  .sevenday span:nth-child(1){
    color: #4FC0E8;
  }
.sevenday input{
  background: red;
}
/*.sevenday input:checked {*/
  /*border-color: #48CFAE;*/
  /*background-color: #48CFAE;*/
/*}*/
  .shima{
    width: 90%;line-height: 40px;background: #ccc;
    margin-left: 5%;text-align: center;
    margin-top: 5px;
  }
  .baozi{
    width: 100%;background: #f5f5f5;
    height: 500px;
  }
.hezuo{
  display: flex;justify-content: space-between;
  align-items: center;padding-top: 20px;
}
  .hezuo span:nth-child(1){
      width: 120px;
    height: 1px;
    border-bottom: 1px solid #555;
  }
.hezuo span:nth-child(2){
  font-size: 14px;
}
.hezuo span:nth-child(3){
  width: 120px;
  height: 1px;
  border-bottom: 1px solid #555;
}
  .qqt{
    border-radius: 40px;
    background-color: #FFF;
    background-position: 50% 50%;
    background-repeat: no-repeat;
    background-size: 70%;
    margin: 20px auto;
    border: 1px solid #4FC0E8;
    width: 40px ;height: 40px;
    background-image: url(http://www.hangowa.com/wap/images/qq.png);
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
.red{
  background: red;color: white;
}
  #charu p{
    width: 100px;
    height: 40px;color: #666666;
    padding: 10px;display: block;margin: auto;
    background: wheat;
    text-align: center;
    border: 1px solid #ccc;
    margin-top: -80px;
    line-height: 40px;
  }

</style>
