<template>
  <div class="dingdan">
    <div class="dingdanbar">
      <div>
        <span class="span1"></span>
        <span>我的订单</span>
      </div>
      <div>
        <p>查看所有订单></p>
      </div>
    </div>
    <div style="margin-top:10px;width: 100%;height: 5px;background: #f5f5f5"></div>

    <div class="dingdanlist">
      <div>
        <span></span>
        <p>代付款</p>
      </div>
      <div>
        <span></span>
        <p>代付款</p>
      </div>
      <div>
        <span></span>
        <p>代付款</p>
      </div>
      <div>
        <span></span>
        <p>代付款</p>
      </div>
      <div>
        <span></span>
        <p>代付款</p>
      </div>
    </div>
    <div style="width: 100%;height: 10px;background: #f5f5f5"></div>
    <div class="dingdanbar">
      <div>
        <span class="span2"></span>
        <span>我的财产</span>
      </div>
      <div>
        <p>查看所有财产></p>
      </div>
    </div>
    <div style="margin-top:15px;width: 100%;height: 10px;background: #f5f5f5"></div>

    <div class="dingdanbar">
      <div>
        <span class="span3"></span>
        <span>我的分销管理</span>
      </div>
      <div>
        <p>></p>
      </div>
    </div>
    <div style="margin-top:10px;width: 100%;height: 5px;background: #f5f5f5"></div>

    <div class="dingdanbar">
      <div>
        <span class="span4"></span>
        <span>收货地址管理</span>
      </div>
      <div>
        <p>></p>
      </div>
    </div>
    <div style="margin-top:10px;width: 100%;height: 5px;background: #f5f5f5"></div>

    <div class="dingdanbar">
      <div>
        <span class="span5"></span>
        <span >用户设置</span>
      </div>
      <div>
        <p>></p>
      </div>
    </div>
    <div style="margin-top:10px;width: 100%;height: 10px;background: #f5f5f5"></div>
    <footbar></footbar>
  </div>
</template>
<script>
  import footbar from './footbar.vue'
  export default {
    name: 'dingdan',
    components:{
      footbar
    },
    data () {
      return {

      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.dingdanbar div:nth-child(1) span:nth-child(1){
  margin-right: 0.1rem;float: left;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: 70%;
  width: 20px; height: 20px;display: block;
  }
.dingdanbar div:nth-child(1){
  float: left;
}
.dingdanbar div:nth-child(2){
  float: right;
}
  .dingdanbar{
    padding: 10px 20px 20px 10px ;
  }
  .dingdanlist div span:nth-child(1){
    background-image: url(http://www.hangowa.com/wap/images/mcc_01.png);
    background-size: cover;
    width: 23px; height: 23px;display: inline-block;

  }
.dingdanlist div{
  padding: 20px 0 20px 0;
  text-align: center;
  font-size: 14px;
  opacity: 0.5;
}
  .dingdanlist{
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: space-around;
  }
.span1{
  background-image: url(http://www.hangowa.com/wap/images/mc_01.png);
}
.span2{
  background-image: url(http://www.hangowa.com/wap/images/mc_02.png);
}
.span3{
  background-image: url(http://www.hangowa.com/wap/images/mc_05.png);
}
.span4{
  background-image: url(http://www.hangowa.com/wap/images/mc_03.png);
}
.span5{
  background-image: url(http://www.hangowa.com/wap/images/mc_04.png);
}

</style>
