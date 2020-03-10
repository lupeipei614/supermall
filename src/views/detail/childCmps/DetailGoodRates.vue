<template>
  <div class="good-rates" v-if="Object.keys(goodRates).length !== 0">
    <div class="title clearfix">
      <div class="left">用户评价</div>
     <a href="" class="right"> <span >更多</span></a>
    </div>
    <div  v-if="goodRates.list && goodRates.list.length !== 0">
      <div v-for="(item,index) in goodRates.list" :key="index">
        <div class="user">
          <img :src="item.user.avatar"/>
          <span>{{item.user.uname}}</span>
        </div>
        <p class="user-rates">{{item.content}}</p>
        <div class="user-detail">
          <span>{{item.created | showDate}}</span>
          <span>{{item.style}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {formatDate} from "common/utils";

  export default {
    name: "DetailGoodRates",
    props: {
      goodRates: {
        type: Object,
        default(){
          return {}
        }
      }
    },
    filters: {
      showDate(value){
        let date = new Date(value * 1000)
        return formatDate(date,'yyyy-MM-dd')
      }
    }
  }
</script>

<style scoped>
.good-rates{
  padding: 10px;
  font-size: 12px;
}
.title{
  border-top: 3px solid #eee;
  border-bottom: 3px solid #eee;
  line-height: 40px;
}
.left{
  float: left;

}
.right{
  float: right;
}
.clearfix:after{
  content: '';
  height: 0;
  clear: both;
  display: block;
  visibility: hidden;
}
.user img{
  height: 30px;
  border-radius: 15px;
  vertical-align: middle;
}
.user span{
 line-height: 60px;
  padding: 0 5px;
}
  .user-rates{
    line-height: 20px;
  }
  .user-detail{
    line-height: 26px;
    color: #aaa;
  }
</style>
