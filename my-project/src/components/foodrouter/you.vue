<template>
  <div class="you">

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
    name: 'you',
    data () {
      return {
        listall:[
          {
            "header" :"茗茶",
            "list":[
              {"foods":"红茶"},{"foods":"水果茶"},{"foods":"绿茶"},
              {"foods":"花草茶"}
            ]
          },
          {
            "header" :"冲调谷物/饮品",
            "list":[
              {"foods":"冲饮品"}
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
