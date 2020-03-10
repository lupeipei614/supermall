<template>
  <div class="cart-list-item" @click="itemClick">
      <div class="btn" :class="{selected:product.check}" @click.stop="btnClick">
        <img src="~assets/img/cart/selected.png"/>
      </div>
      <img :src="product.img" class="item-img"/>
      <div class="item-info">
        <p class="title">{{product.title}}</p>
        <p class="desc">{{product.desc}}</p>
        <div class="item-info-bottom">
          <span class="price">{{goodPrice | showPrice}}</span>
          <span class="count">x {{product.count}}</span>
        </div>
      </div>
  </div>
</template>

<script>
  export default {
    name: "CartListItem",
    props: {
      product: {
        type: Object,
        default(){
          return {}
        }
      }

    },
    data(){
      return {
        isActive: true,
      }
    },
    computed: {
      goodPrice(){
        return this.product.price * this.product.count
      }
    },
    methods: {
      itemClick(){
        this.$router.push({
          path: '/detail',
          iid: this.product.iid
        })
      },
      btnClick(){
        this.product.check = !this.product.check
      }
    },
    filters: {
      showPrice(goodPrice){
        return '￥' + parseFloat(goodPrice).toFixed(2)
      }
    }
  }
</script>

<style scoped>
  .cart-list-item{
    padding: 4px 5px;
    border-bottom: 1px solid #eee;
    display: flex;
    font-size: 12px;
    width: 100%;
    align-items: center;
    justify-content: center;
  }
  .btn{
    border:1px solid #aaa;
    border-radius:50%;
    width: 16px;
    height: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }
  .btn img{
    width: 100%;
  }
  .selected{
    background: #ff5777;
    border: 1px solid #ff5777;
  }
  .item-img{
    width:80px;
    height: 100px;
    margin: 0 5px;
    display: block;
    border-radius: 5px;

  }
  .item-info{
    height: 100px;
    position: relative;
    width: 60%;
    float: right;
  }
  .title, .desc{
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: 14px;
    line-height: 24px;
  }
  .desc{
    font-size: 12px;
  }
  .item-info-bottom{
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    line-height: 30px;
  }



  .price{
    color: orange;
    float: left;
    font-size: 14px;
  }
  .count{
    color: gray;
    float: right;
  }





</style>
