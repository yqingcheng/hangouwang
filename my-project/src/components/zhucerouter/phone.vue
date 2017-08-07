<template>
  <div class="phone">
    <div class="shuru">
      <div>
        <span>手&nbsp;&nbsp;机&nbsp;号</span>
        <input type="text" placeholder="请输入手机号">
      </div>
      <div>
        <span>验证码</span>
        <input type="text" placeholder="请输入4位验证码">
      </div>
    </div>
    <div class="yes">
      <input type="checkbox" checked>
      <span>同意</span>
      <span class="xieyi">用户注册协议</span>
    </div>

    <p class="oku">获取验证码</p>
  </div>

</template>
<script>
  export default {
    name: 'phone',

    data () {
      return {

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
</style>
