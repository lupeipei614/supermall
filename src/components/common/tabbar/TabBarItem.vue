<template>
  <div class="tabbaritem" @click="itemClick">
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <div  :style="activeStyle" class="item-text"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
  export default {
    name: "TabBarItem",
    props: {
      path: {
        type: String
      },
      activeColor: {
        type: String,
        default: 'red'
      }
    },
    computed: {
      isActive(){
        return this.$route.path.indexOf(this.path) !== -1
      },
      activeStyle(){
        return this.isActive? {color: this.activeColor} : {}
      }
    },
    methods: {
      itemClick(){
        this.$router.replace(this.path)
      }
    }

  }
</script>

<style scoped>
.tabbaritem{
  flex: 1;
  text-align: center;
}

.tabbaritem img{
  height: 25px;
  margin-top: 4px;
  vertical-align: middle; /*图片下面默认有三个像素，可以通过vertical-align: middle消除*/
}
.item-text{
  font-size: 14px;
  line-height: 20px;
  color: #999
}
</style>
