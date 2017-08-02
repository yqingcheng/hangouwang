<template>
  <div class="chess">

    <div class="wrapfood">
      <ul class="waiulq" v-for="obj in listall">
        <li>
          <p>{{obj.header}}</p>
          <div class="cha" >
            <div v-for="cd in obj.list">{{cd.foods}}</div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  
  export default {
    name: 'chess',
    data () {
      return {
        listall:[
          {
            "header" :"肉类",
            "list":[
              {"foods":"羊肉"},{"foods":"羊肚"},{"foods":"羊腿"},
              {"foods":"羊蝎子"},{"foods":"牛肉"},{"foods":"兔肉"}
            ]
          },
          {
            "header" :"水果",
            "list":[
              {"foods":"羊肉"},{"foods":"羊肚"},{"foods":"羊腿"},
              {"foods":"羊蝎子"},{"foods":"牛肉"},{"foods":"兔肉"},
              {"foods":"羊肉"},{"foods":"羊肚"},{"foods":"羊腿"}
            ]
          },
          {
            "header" :"海鲜水产品",
            "list":[
              {"foods":"羊肉"},{"foods":"羊肚"}
            ]
          },
          {
            "header" :"蔬菜",
            "list":[
              {"foods":"羊肉"},{"foods":"羊肚"}
            ]
          }
        ]
      }
    }
  }
</script>
<style scoped>
  .wrapfood{
    width: 75%;
    position: absolute;
    top: 50px;
    right: 0;
    border: 1px solid;
    color: red;
  }
  .cha div{
    width: 33.3%;
    line-height: 30px;
  }
  .cha{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .waiulq{
    margin-top: -3px;
    position: relative;
  }
  .waiulq li{
    list-style: disc;
  }
</style>
