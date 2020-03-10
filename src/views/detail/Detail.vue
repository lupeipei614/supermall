<template>
  <div class="detail">
    <detail-nav-bar @titleClick="titleClick" ref="navbar"/>
    <scroll class="wrapper" ref="scroll" :probe-type="3" @scrollPos="scrollPos">
      <swiper :swiper-slides="topImages"/>
<!--      <detail-swiper :swiper-slides="topImages"/>-->
      <detail-base-info :goods="goodsInfo" />
      <detail-shop-info :shopInfo="shopInfo"/>
      <detail-good-info :detail-info="detailInfo" @imgLoad="imgLoad" />
      <detail-good-params :goods-params="goodsParams" ref="params"/>
      <detail-good-rates :good-rates="goodRates" ref="rates"/>
      <goods-list :goodslist="recommends" ref="recommends"/>
    </scroll>
    <detail-bottom-bar @addCart="addToCart"/>
    <back-top @click.native="backClick" v-show="isShow"/>
  </div>
</template>

<script>
  import DetailNavBar from "./childCmps/DetailNavBar";
  import Swiper from 'components/common/swiper/Swiper'
  // import DetailSwiper from "./childCmps/DetailSwiper";
  import DetailGoodInfoInfo from "./childCmps/DetailGoodInfo";
  import {getDetail,Goods,ShopInfo,GoodsParams, getRecommend} from "network/detail";

  import DetailBaseInfo from "./childCmps/DetailBaseInfo";
  import DetailShopInfo from "./childCmps/DetailShopInfo";
  import DetailGoodInfo from "./childCmps/DetailGoodInfo";
  import DetailGoodParams from "./childCmps/DetailGoodParams";
  import Scroll from "components/common/scroll/Scroll";
  import DetailGoodRates from "./childCmps/DetailGoodRates";
  import GoodsList from "components/content/goodslist/GoodsList";
  import {itemImgListenerMixin,backTopMixin} from 'common/mixin.js'
  import DetailBottomBar from "./childCmps/DetailBottomBar";
  import {BACK_POSITION} from 'common/const.js'





  // import {debounce} from "common/utils";

  export default {
    name: "Detail",
    components: {
      DetailBottomBar,
      GoodsList,
      DetailGoodRates,
      DetailNavBar,
      Swiper,
      // DetailSwiper,
      DetailGoodParams,
      DetailGoodInfo,
      Scroll,
      DetailShopInfo,
      DetailBaseInfo
    },
    mixins:[itemImgListenerMixin,backTopMixin],
    data(){
      return {
        iid: null,
        topImages: [],
        goodsInfo: {
          type: Object,
          default(){
            return {}
          }
        },
        shopInfo: {
          type: Object,
          default(){
            return {}
          }
        },
        detailInfo: {
          type: Object,
          default(){
            return {}
          }
        },
        goodsParams: {
          type: Object,
          default(){
            return {}
          }
        },
        goodRates: {
          type: Object,
          default(){
            return {}
          }
        },
        recommends: [],
        themeTopYs: [],
        getThemeTopYs: null,
        currentIndex: 0,
      }
    },
    created() {
      //获取商品的iid
      // this.iid = this.$route.params.iid      //动态路由
      this.iid = this.$route.query.iid

      //获取商品详情
      getDetail(this.iid).then(res => {
        // console.log(res.result)
        const data = res.result

        //获取轮播图数据
        this.topImages = data.itemInfo.topImages

        //获取商品基本信息
        this.goodsInfo = new Goods(data.columns,data.itemInfo, data.shopInfo.services)
        //对获取的商品基本信息进行处理
        let more = this.goodsInfo.services.pop()
        this.goodsInfo.columns.pop()
        this.goodsInfo.columns.push(more.name)

        //获得店铺基本信息的类
        this.shopInfo = new ShopInfo(data.shopInfo)

        //获取商品详情
        this.detailInfo = data.detailInfo
        // console.log(data.detailInfo);

        //获取产品参数
        this.goodsParams = new GoodsParams(data.itemParams.info, data.itemParams.rule)

         //获取用户评论
        if(data.rate.cRate !== 0){
          this.goodRates = data.rate
        }

      })

      //获取推荐数据
      getRecommend().then( res => {
        // console.log(res);
        this.recommends = res.data.list
        // console.log(this.recommends);
      })

      //获取themeTopY数组中给元素的值,对this.themeTopYs的赋值操作进行防抖
      //因为Detail.vue的方法imgLoad只会调用一次，所以不需要防抖处理
      // this.getThemeTopYs = debounce(() => {
      //   this.themeTopYs = []
      //   this.themeTopYs.push(0)
      //   this.themeTopYs.push(this.$refs.params.$el.offsetTop)
      //   this.themeTopYs.push(this.$refs.rates.$el.offsetTop)
      //   this.themeTopYs.push(this.$refs.recommends.$el.offsetTop)
      // }，100)

    },
    methods: {
      imgLoad(){
        // console.log('1111');
        this.$refs.scroll.refresh()


        // this.getThemeTopYs()

        this.themeTopYs = []
        this.themeTopYs.push(0)
        this.themeTopYs.push(this.$refs.params.$el.offsetTop)
        this.themeTopYs.push(this.$refs.rates.$el.offsetTop)
        this.themeTopYs.push(this.$refs.recommends.$el.offsetTop)
        // console.log(this.themeTopYs);
      },
      titleClick(index){
        // console.log('111');
        // console.log(this.themeTopYs[index])
        this.$refs.scroll && this.$refs.scroll.scrollTo(0, -this.themeTopYs[index], 0)
      },
      scrollPos(position){
        let scrollY =  Math.abs(position.y)
        let length = this.themeTopYs.length
        let positionY = Math.abs(position.y)

        //常规方法
        // for(let i = 0; i < length; i++ ){
        //   if(
        //     (this.currentIndex !=  i)
        //     &&
        //     (
        //       (i < length - 1 && positionY >= this.themeTopYs[i] && positionY < this.themeTopYs[parseInt(i) + 1])
        //       ||
        //       ((i === length - 1) && (positionY >= this.themeTopYs[i]))
        //     )
        //
        //   ){
        //     // console.log(i);
        //     this.currentIndex = i
        //     this.$refs.navbar.currentIndex = this.currentIndex
        //   }
        // }


        //hack方法
        this.themeTopYs.push(Number.MAX_VALUE)
        for(let i = 0; i < length - 1; i++){
          if(
            (this.currentIndex != i)
            &&
            (positionY >= this.themeTopYs[i] && positionY < this.themeTopYs[parseInt(i) + 1])
          ){
            this.currentIndex = i
            this.$refs.navbar.currentIndex = this.currentIndex
          }
        }

        //判断返沪顶部的按钮是否显示
        this.isShow = Math.abs(position.y) > BACK_POSITION
      },
      addToCart(){
        // console.log('商品加入了购物车');
        //获取加入购物车的商品信息
        const product = {}
        product.img = this.topImages[0]
        product.title = this.goodsInfo.title
        product.desc = this.goodsInfo.desc
        product.price = this.goodsInfo.lowNowPrice
        product.iid = this.iid
        product.check = false

        // console.log(Object.keys(product).length);

        // this.$store.commit({
        //   type: 'addCart',
        //   product
        // })

        this.$store.dispatch({
          type: 'addCart',
          product
        }).then(res => {
          console.log(res);
          // console.log(this.$toast);

          this.$toast.show(res, 2000)

        })

        // console.log(this.$store.state.cartList);
      }
    },
    destroyed() {
      this.$bus.$off('itemImgLoad',this.itemImgListener)
    }
  }
</script>

<style scoped>
.detail{
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background: #fff;
  position: relative;
  z-index: 999;
}
  /*.wrapper{*/
  /*  position: absolute;*/
  /*  top: 44px;*/
  /*  bottom: 0;*/
  /*  left: 0;*/
  /*  right: 0;*/
  /*}*/
.wrapper{
  height: calc(100% - 44px - 49px);
}
</style>
