<template>
  <div class="goods-list">
<!--    {{goodslist}}-->
    <goods-list-item v-for="(item,index) in goodslist" :goods-item="item" />

  </div>
</template>

<script>
  import GoodsListItem from "./GoodsListItem";
  export default {
    name: "goodslist",
    props: {
      goodslist: {
        type: Array,
        default(){
          return []
        }
      }
    },
    components: {
      GoodsListItem
    }
  }
</script>

<style scoped>
.goods-list{
  display: flex;
  flex-wrap: wrap;
}
</style>
