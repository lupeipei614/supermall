import Toast from './Toast.vue';

const obj = {}
obj.install = function (Vue){
  // console.log('安装了toast插件');

  //创建Toast组件构造器
  const toastConstructor = Vue.extend(Toast)

  //用组件构造器生成Toast实例
  const toast = new toastConstructor()

  //手动的将组件挂载到某一个元素上
  toast.$mount(document.createElement('div'))
  //toast的$el就是创建的div了


  document.body.appendChild(toast.$el)
  Vue.prototype.$toast = toast
}


export default obj
