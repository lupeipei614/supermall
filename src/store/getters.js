export default {
  cartListLength(state){
    return state.cartList.length
  },
  isAllSelected(state){
    if(state.cartList.length === 0){
      return  false
    }
    //第一种方法：filer方法
      // return  !(
      //   state.cartList.filter(item => {
      //     return item.check === false
      //   }).length > 0
      // )


    //第二种方法：普通方法
    // for(let item in state.cartList){
    //   if(!item.check){
    //     return  false
    //   }
    // }
    // return  true


    //第三种方法：find方法
    return !(
      state.cartList.find(item => {
        return item.check === false
      })
    )
  },
  cartList(state){
    return state.cartList
  }
}
