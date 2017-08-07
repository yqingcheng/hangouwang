<template>
  <div class="fuiter">

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
    name: 'fuiter',
    data () {
      return {
        listall:[
          {
            "header" :"粮油",
            "list":[
              {"foods":"羊肉"},{"foods":"羊肚"},{"foods":"羊腿"},
              {"foods":"羊蝎子"},{"foods":"牛肉"},{"foods":"兔肉"},
              {"foods":"羊肉"},{"foods":"羊肚"},{"foods":"羊腿"},
              {"foods":"羊肉"},{"foods":"羊肚"}
            ]
          },
          {
            "header" :"干货",
            "list":[
              {"foods":"羊肉"},{"foods":"羊肚"},{"foods":"羊腿"},
              {"foods":"羊蝎子"},{"foods":"牛肉"}
            ]
          },
          {
            "header" :"调味品",
            "list":[
              {"foods":"羊肉"}
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
    /*border: 1px solid;*/
  }
  .cha div{
    width: 33.3%;
    line-height: 40px;
    display: inline;
    margin-left: -5px;
  }
  .cha{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .waiulq{
    margin-top: 10px;
    position: relative;
    /*border: 1px solid;*/
    margin-left: 20px;
  }
  .waiulq li{
    list-style: disc;
  }
  .waiulq li p{
    font-size: 19px;
    color: red;
  }
</style>
