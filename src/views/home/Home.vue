<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center" >购物街</div>
    </nav-bar>
    <tab-control v-show="isFixed"  ref="tabControl1"  :titles="['流行','新款','精选']" @tabClick="ftabClick" class="tab-control-copy"/>
<!--    <div style="height: 44px"></div>-->
    <scroll class="wrapper" ref="scroll" @scrollPos="scrollPos" :probe-type="3" :pull-up-load="true" @pullingUp="loadMore">
<!--      <swiper :swiper-slides="banners"  ></swiper>-->
      <swiper :swiper-slides="banners" @swiperImgLoad="swiperImgLoad" class="swiper"/>
      <home-recommend-view :recommends="recommends"></home-recommend-view>
      <feature />

      <tab-control  ref="tabControl2"  :titles="['流行','新款','精选']" @tabClick="ftabClick"></tab-control>

      <goods-list :goodslist="goods[currentIndex].list" ></goods-list>
    </scroll>
    <back-top @click.native="backClick" v-show="isShow"/>
  </div>
</template>



<script>
  import Swiper from 'components/common/swiper/Swiper'
  // import Swiper from './childComps/HomeSwiper.vue'
  import HomeRecommendView from "./childComps/HomeRecommendView";
  import Feature from "./childComps/FeatureView";

  import NavBar from 'components/common/navbar/NavBar.vue'
  import Scroll from "components/common/scroll/Scroll";

  import TabControl from 'components/content/TabControl.vue'
  import  GoodsList from 'components/content/goodslist/GoodsList.vue'

  import {getHomeMultiData,getHomeGoods} from "network/home";
  import {itemImgListenerMixin,backTopMixin} from 'common/mixin.js'
  import {BACK_POSITION} from 'common/const.js'

  export default {
    name: "Home",
    components: {
      HomeRecommendView,
      NavBar,
      Swiper,
      Feature,
      TabControl,
      GoodsList,
      Scroll
    },
    mixins:[itemImgListenerMixin,backTopMixin],
    data(){
      return {
        banners: [],
        recommends: [],
        imgUrl: '',
        goods: {
          "pop": {page: 0, list: []},
          "new": {page: 0, list: []},
          "sell": {page: 0, list: []}
        },
        currentIndex: 'pop',
        isFixed: false,
        tabOffsetTop: 0,
        scrollY: 0
      }
    },
    created() {
      this.getHomeMultiData()
      this.getHomeGoods('pop')
      this.getHomeGoods('new')
      this.getHomeGoods('sell')
      //console.log(this.goods[type].list);
    },
    activated() {
      // console.log(this.scrollY);
      this.$refs.scroll.scrollTo(0, this.scrollY, 0)
      this.$refs.scroll.refresh()
    },
    deactivated() {
      this.scrollY = this.$refs.scroll.getScrollY()
      this.$bus.$off('itemImgLoad', this.itemImgListener)

    },
    methods: {
      swiperImgLoad(){
        // console.log(this.$refs.tabControl2.$el.offsetTop);
        this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop
      },
      ftabClick(index){
        //console.log(index);
        switch (index) {
          case 0 :
            this.currentIndex = 'pop'
            break
          case 1 :
            this.currentIndex = 'new'
            break
          case 2 :
            this.currentIndex = 'sell'
            break
        }
        this.$refs.tabControl1.currentIndex = index
        this.$refs.tabControl2.currentIndex = index
        // console.log(this.goods[this.currentIndex].list);
      },
      getHomeMultiData(){
        getHomeMultiData().then(res => {
          // this.banners = res.data.banner.list
          this.banners = res.data.banner.list.map((item) => {
            return item.image
          })
          // console.log(this.banners)

          this.recommends = res.data.recommend.list
          // console.log(res.data);
        })
      },
      getHomeGoods(type){
        //在读取js 对象属性值时，最好采用中括号形式，可以避免对象的变量命是非法命名或者是纯数字时出现的异常
        //js 读取js对象使用点和中括号的区别：http://blog.csdn.net/tjcjava/article/details/65631905
        let page = this.goods[type].page +1
        getHomeGoods(type,page).then(res => {
          this.goods[type].list.push(...res.data.list)
          this.goods[type].page += 1
          //console.log(res);

        })
      },
      scrollPos(position){
        //console.log(Math.abs(position.y) > 1000);
        this.isShow = Math.abs(position.y) > BACK_POSITION
        this.isFixed = Math.abs(position.y) > this.tabOffsetTop
      },
      loadMore(position){
        this.getHomeGoods(this.currentIndex)
        //console.log('111');
        this.$refs.scroll && this.$refs.scroll.finishPullUp()
      }
    }
  }


</script>




<style scoped>
  #home{
    /*padding-top: 44px;*/
    height: 100vh;
    box-sizing: border-box;
    position: relative;
  }
.home-nav{
  background-color:var(--color-tint);
  color: #fff;
  /*position: fixed;*/
  /*left: 0;*/
  /*right: 0;*/
  /*top: 0;*/
  /*z-index: 99;*/
}

  /*.wrapper{*/
  /*  height: calc(100% - 49px);*/
  /*  background: white;*/
  /*  overflow: hidden;*/

  /*}*/

  .wrapper{
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
    background: #fff;
    overflow: hidden;
  }
.tab-control-copy{
  position: relative;
  z-index: 9999;
}

</style>
