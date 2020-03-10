<template>
  <div class="detail-nav-bar">
    <nav-bar>
      <div slot="left" @click="backClick">
        <img src="~assets/img/common/back.svg" class="back"/>
      </div>
      <div slot="center" class="titles">
        <div v-for="(item,index) in titles"
             :class="{active: index === currentIndex}"
             @click="itemClick(index)">
          {{item}}
        </div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
  export default {
    name: "DetailNavBar",
    components: {
      NavBar
    },
    data(){
      return {
        titles: ['商品','参数','评论','推荐'],
        currentIndex: 0
      }
    },
    methods: {
      itemClick(index){
        this.currentIndex = index
        this.$emit('titleClick',index)
      },
      backClick(){
        this.$router.back()
      }
    }
  }
</script>

<style scoped>
  .detail-nav-bar{
    background: #fff;
    position: relative;
    z-index: 99999;
  }
  .back{
    height: 15px;
    vertical-align: middle;
  }


  .titles{
    display: flex;
    text-align: center;
  }

  .titles div{
    flex:1;
    font-size: 12px;
  }
  .active{
    color: var(--color-high-text);
  }


</style>
