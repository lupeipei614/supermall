import {debounce} from "./utils";
import BackTop from "components/common/backTop/BackTop";

export const itemImgListenerMixin = {
  data(){
    return {
      itemImgListener: null
    }
  },
  mounted() {
    const refresh = debounce(this.$refs.scroll.refresh)
    this.itemImgListener = () => {
      refresh()
      // console.log(this.$refs.scroll);

    }
    this.$bus.$on('itemImgLoad', this.itemImgListener)
  }
}

export const backTopMixin = {
  components: {
    BackTop
  },
  data(){
    return {
      isShow: false
    }
  },
  methods: {
    backClick(){
      this.$refs.scroll && this.$refs.scroll.scrollTo(0, 0, 500)
    }
  }
}
