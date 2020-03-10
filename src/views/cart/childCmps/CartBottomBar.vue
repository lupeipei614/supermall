<template>
  <div class="cart-bottom-bar">
    <div class="select">
      <div class="btn"  @click.stop="btnClick" :class="{selected: isAllSelected}"></div>
      <span>全选</span>
    </div>
    <div class="total">合计：{{totalPrice | showPrice}}</div>
    <div class="compute">去结算({{totalCount}})</div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  export default {
    name: "CartBottomBar",
    computed: {
      ...mapGetters([
        'isAllSelected',
        'cartList'
      ]),
      totalPrice(){
        let total = this.cartList.filter( item => {
          return item.check === true
        }).reduce((preV, val) => {
          return preV + val.count * val.price
        },0)
        return total
      },
      totalCount(){
        let total = this.cartList.filter( item => {
          return item.check === true
        }).reduce((preV, val) => {
          return preV + val.count
        },0)
        return total
      }
    },
    methods: {
      btnClick(){
        //每次点击前，都判断下购物车的商品是否有没选中的，
        //有没选中的就全选中，没有没选中的，就全取消


        //第一张方法
        //当this.isSelected为true，把购物车中所有产品选中
        // if(!(this.isAllSelected)){
        //   for (let item of this.cartList){
        //     item.check = true
        //   }
        // }else{
        //   for (let item of this.cartList){
        //     item.check = false
        //   }
        // }

        //第二种方法
        //forEach用来对数组种的元素进行处理
        if(!(this.isAllSelected)){
         this.cartList.forEach(item => {
            item.check = true
          })
        }else{
          this.cartList.forEach(item => {
            item.check = false
          })
        }


        //第三种方法是不可以的，不是所有的地方都可以做简化的
        // this.cartList.forEach(item => {
        //   item.check = !(this.isAllSelected)
        // })
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
  .cart-bottom-bar{
    height: 25px;
    background: #eee;
    box-shadow: 0 -1px 1px rgba(120,120,120,0.6);
    padding-left: 8px;
    line-height: 25px;
    position: absolute;
    bottom: 49px;
    left: 0;
    right: 0;
    display: flex;
  }
  .select{
    width: 50px;
    display: flex;
    align-items: center;
  }

  .total{
    margin-left: 10px;
    flex: 1;
  }
  .compute{
    width: 80px;
    background: orangered;
    color: #fff;
    text-align: center;
    position: relative;
    top: -1px;
    height: 26px;
  }

  .btn{
    width: 16px;
    height: 16px;
    border:1px solid #aaa;
    border-radius:50%;
    overflow: hidden;
    margin-right: 4px;
  }

  .selected{
    background: url("~assets/img/cart/allSelected.png");
    border: 1px solid #ff5777;
    background-size: 100% 100%;
  }

</style>
