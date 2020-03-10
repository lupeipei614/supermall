<template>
  <div class="detail-base-info" v-if="Object.keys(goods).length !== 0">
    <h5 class="title">{{goods.title}}</h5>
    <div class="price-info">
      <span class="price">{{goods.lowNowPrice}}</span>
      <span class="old-price" v-if="goods.oldPrice">{{goods.oldPrice}}</span>
      <span :style="{background:goods.discountBgColor}" class="discount" v-if="goods.discountDesc">{{goods.discountDesc}}</span>
    </div>
    <div class="services" v-if="goods.columns && (goods.columns.length !== 0)">
      <div v-for="item in goods.columns">{{item}}</div>
    </div>
    <div class="services" v-if="goods.services && (goods.services.length !==0)" style="border:none">
      <div v-for="item in goods.services" >
        <img :src="item.icon"/>
        <span>{{item.name}}</span>
      </div>
    </div>
<!--    <div class="services" v-if="goods.columns && goods.services && goods.services.length && goods.columns.length">-->
<!--      <div v-for="item in goods.columns.slice(0,2)">{{item}}</div>-->
<!--      <div v-for="item in goods.services.slice(0,1)">{{item.name}}</div>-->
<!--    </div>-->

<!--    <div class="services" v-if="goods.services && (goods.services.length !==0)">-->
<!--      <div v-for="item in goods.services.slice(0,3)" >-->
<!--        <img :src="item.icon"/>-->
<!--        <span>{{item.name}}</span>-->
<!--      </div>-->
<!--    </div>-->

  </div>
</template>

<script>
  export default {
    name: "DetailBaseInfo",
    props: {
      goods: {
        type: Object,
        default(){
          return {}
        }
      }
    }
  }
</script>

<style scoped>
  .detail-base-info{
    padding:5px;
    font-size: 12px;
  }
  .price-info{
    padding: 8px 0;
  }
  .price{
    color: var(--color-high-text);
    font-size: 18px;
    font-weight: bold;
    letter-spacing: 1px;
    padding: 0 6px;
  }
  .old-price{
    color: #999;
    padding: 0 6px;
    text-decoration:line-through;
  }
  .discount{
    color:#fff;
    padding:2px 4px;
    border-radius: 10px;
    position: relative;
    top: -8px;
  }
  .services{
    display: flex;
    color: #999;
    padding: 10px 0;
    text-align: center;
   justify-content: space-between;
    border-bottom: 1px solid #eee;
  }
.services img{
  vertical-align: middle;
  height: 14px;
  margin-right: 2px;
}
</style>
