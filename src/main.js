import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index.js'
import toast from 'components/common/toast/index.js'
import FastClick from 'fastclick'
import VueLazyLoad from 'vue-lazyload'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)

Vue.config.productionTip = false
Vue.prototype.$bus = new Vue()
Vue.use(toast)
//解决移动端300ms延迟
FastClick.attach(document.body)

//使用懒加载
Vue.use(VueLazyLoad,{
  loading:require('./assets/img/timg.jpg')
})

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')

