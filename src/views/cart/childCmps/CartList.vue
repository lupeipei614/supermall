<template>
  <div class="cart-list">
    <cart-list-item  v-for="item in $store.state.cartList" :product="item"/>
  </div>
</template>

<script>


  import CartListItem from "./CartListItem";
  export default {
    name: "cartList",
    components: {CartListItem}
  }
</script>

<style scoped>


</style>
