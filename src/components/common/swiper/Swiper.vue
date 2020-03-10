<template>
  <div class="detail-swiper">
    <swiper :options="swiperOption" v-if="swiperSlides.length>0">
      <swiper-slide v-for="(slide, index) in swiperSlides" :key="index">
        <img :src="slide" @load="imgLoad"/>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>

</template>

<script>
  import 'swiper/dist/css/swiper.css'
  import { swiper, swiperSlide } from 'vue-awesome-swiper'

  export default {
    name: "Swiper",
    components: {
      swiper,
      swiperSlide
    },
    props: {
      swiperSlides: {   //此变量需要接手一个数组，数组中的元素是滚动图片的src地址
        type: Array,
        default(){
          return []
        }
      }
    },
    data() {
      return {
        swiperOption: {
          loop: true,
          autoplay: {
            delay:3000,
            disableOnInteraction: false,
            stopOnLastSlide: false
          },
          observer:true,
          observeParents:true,
          pagination: {
            el: '.swiper-pagination'
          },
          speed: 1000,
          effect: 'slide'
        },
        isLoad: false
      }
    },
    methods: {
      imgLoad(){
        if(this.$route.path.indexOf('/home') !== -1){
          if(!this.isLoad){
            this.$emit('swiperImgLoad')
            this.isLoad = true
          }
        }
      }
    }
  }
</script>

<style scoped>
  .detail-swiper{
    text-align: center;
  }
  .detail-swiper img{
    width: 100%;
  }
</style>
