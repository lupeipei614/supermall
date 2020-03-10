<template>
  <div>
    <swiper :options="swiperOption" v-if="swiperSlides.length>0">
      <swiper-slide v-for="(slide, index) in swiperSlides" :key="index">
        <img :src="slide.image" width="100%" @load="imgLoad"/>
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
      swiperSlides: {
        type: Array
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
    mounted() {
      // setInterval(() => {
      //   console.log('simulate async data')
      //   if (this.swiperSlides.length < 10) {
      //     this.swiperSlides.push(this.swiperSlides.length + 1)
      //   }
      // }, 3000)
    },
    methods: {
      imgLoad(){
        if(!this.isLoad){
          this.$emit('swiperImgLoad')
          this.isLoad = true
        }

      }
    }
  }
</script>

<style scoped>

</style>
