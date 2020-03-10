<template>
  <div id="tabbar" :style="{background:bgColor}">
    <slot></slot>
  </div>

</template>

<script>
  export default {
    name: "TabBar",
    props: {
      bgColor: {
        type: String,
        default: '#000'
      }
    }
  }
</script>

<style scoped>
#tabbar{
  display: flex;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  box-shadow: 0 -1px 1px rgba(222,222,222,.7);
}
</style>
