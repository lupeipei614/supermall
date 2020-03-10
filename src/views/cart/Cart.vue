<template>
  <div class="cart">
    <nav-bar class="nav-bar">
      <div slot="center">购物车({{cartListLength}})</div>
    </nav-bar>
    <scroll class="wrapper" ref="scroll">
      <cart-list/>
    </scroll>
    <cart-bottom-bar/>


  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
  import {mapGetters} from 'vuex'
  import CartList from "./childCmps/CartList";
  import Scroll from "components/common/scroll/Scroll";
  import CartBottomBar from "./childCmps/CartBottomBar";

  export default {
    name: "Cart",
    components: {
      CartBottomBar,
      Scroll,
      CartList,
      NavBar
    },
    computed: {
      // ...mapGetters(['cartListLength'])
     ...mapGetters({
       cartListLength: 'cartListLength'
     })
    },
    activated() {
      this.$refs.scroll.refresh()
    }
  }
</script>

<style scoped>
  .cart{
    height: 100vh;
    font-size: 12px;
  }
  .nav-bar{
    background: var(--color-tint);
    color: #fff;
  }
  .wrapper{
    height: calc(100% - 44px - 49px - 25px);
    overflow: hidden;
  }

</style>
