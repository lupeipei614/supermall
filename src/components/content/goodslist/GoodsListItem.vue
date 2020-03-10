<template>
  <div class="goods-list-item" @click="itemClick">
    <img v-lazy="showImage" @load="imgLoad" />
    <p>{{goodsItem.title}}</p>
    <span>{{goodsItem.price}}</span>
    <span>{{goodsItem.cfav}}</span>
  </div>
</template>

<script>
  export default {
    name: "GoodsListItem",
    props: {
      goodsItem: {
        type: Object,
        default(){
          return {}
        }
      }
    },
    computed: {
      showImage(){
        return this.goodsItem.image || this.goodsItem.show.img
      }
    },
    methods: {
      imgLoad(){

        //监测路由的方法
        // if(this.$route.path.indexOf('/home') !== -1){
        //   this.$bus.$emit('homeItemImgLoad')
        // }else if(this.$route.path.indexOf('/detail') !== -1){
        //   this.$bus.$emit('detailItemImgLoad')
        // }else{}

        this.$bus.$emit('itemImgLoad')
      },
      itemClick(){
        // this.$router.push('/detail/' + this.goodsItem.iid)     //动态路由
        this.$router.push({
          path: '/detail',
          query: {
            iid: this.goodsItem.iid
          }
        })
      }
    }
  }
</script>

<style scoped>
  .goods-list-item{
    padding-bottom: 20px;
    width: 50%;
    text-align: center;
  }
  .goods-list-item img{
    border-radius: 5px;
    width: 96%;
  }
  .goods-list-item p{
    font-size: 12px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    padding: 2px 6px;
  }
</style>
