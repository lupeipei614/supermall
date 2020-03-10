import {ADD_COUNT,ADD_TO_CART} from './mutation-typs'

export default {
  addCart(context,payload){
    return new Promise((resolve, reject) => {
      let oldProduct = context.state.cartList.find(item => item.iid === payload.product.iid)
      if(oldProduct){
        context.commit({
          type: ADD_COUNT,
          oldProduct
        })
        resolve('商品数量加一')
      }else{
        context.commit(ADD_TO_CART, payload.product)
        resolve('添加了新商品')
      }
    })

  }
}
