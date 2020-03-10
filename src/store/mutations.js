import {ADD_COUNT,ADD_TO_CART} from './mutation-typs'

export default {
  // addCart(state, payload){
  //   //判断原来购物车中是否有添加的商品
  //   // let oldProduct = null
  //   // for(let item of state.cartList){
  //   //   if(item.iid === payload.product.iid){
  //   //     oldProduct = item     //因为item是一个对象，会把他的引用地址赋值给oldProduct,
  //   //   }
  //   // }
  //
  //   //另一种简单的方法
  //   let oldProduct = state.cartList.find(item => item.iid === payload.product.iid)
  //
  //
  //   if(oldProduct){
  //     oldProduct.count += 1     //oldProduct改变原有属性的值或添加新属性，都会改变state.cartList中对应的对象
  //   }else{
  //     payload.product.count = 1
  //     state.cartList.push(payload.product)
  //   }
  // }
  [ADD_COUNT](state,payload){
    payload.oldProduct.count += 1
  },
  [ADD_TO_CART](state,payload){
    payload.count = 1
    state.cartList.push(payload)
  }
}
