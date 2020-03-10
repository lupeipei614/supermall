<template>
  <div>
    <tab-bar bgColor="#f6f6f6">
      <tab-bar-item path="/home" activeColor="#348409">
        <img src="~assets/img/tabbar/home.png" slot="item-icon" >
        <img src="~assets/img/tabbar/home-active.png" slot="item-icon-active" >
        <p slot="item-text">首页</p>
      </tab-bar-item>
      <tab-bar-item path="/goods" activeColor="#348409">
        <img src="~assets/img/tabbar/category.png" slot="item-icon">
        <img src="~assets/img/tabbar/category-active.png" slot="item-icon-active">
        <p slot="item-text">分类</p>
      </tab-bar-item>
      <tab-bar-item path="/cart" activeColor="#348409">
        <img src="~assets/img/tabbar/cart.png" slot="item-icon">
        <img src="~assets/img/tabbar/cart-active.png" slot="item-icon-active">
        <p slot="item-text">购物车</p>
      </tab-bar-item>
      <tab-bar-item path="/profile" activeColor="#348409">
        <img src="~assets/img/tabbar/profile.png" slot="item-icon">
        <img src="~assets/img/tabbar/profile-active.png" slot="item-icon-active">
        <p slot="item-text">我的</p>
      </tab-bar-item>
    </tab-bar>
  </div>

</template>

<script>
  import TabBar from 'components/common/tabbar/TabBar.vue'
  import TabBarItem from "components/common/tabbar/TabBarItem";
  export default {
    name: "MainTabBar",
    components: {
      TabBarItem,
      TabBar
    }
  }
</script>

<style scoped>

</style>
