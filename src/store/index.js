import { createStore } from 'vuex'

export const store = createStore({
  state () {
    return {
      cart: [],
    }
  },
  mutations: {
    buyProduct (state,id) {
      // let idOfDoubleProduct
      // state.cart.forEach(p=>{
      //   if(id==p.product){
      //     idOfDoubleProduct=p.idx
      //   }
      // })
      // if(idOfDoubleProduct==undefined){
        state.cart.push({product:id,idx:state.cart.length,count:1})
      // }else{
      //   state.cart[idOfDoubleProduct].count++
      // }
    },
    fillCart(state,cart){
      state.cart=cart
    },
    deleteProduct(state,id){
      // if(state.cart[id].count>1){
      //   state.cart[id].count--
      // }else{
        state.cart=state.cart.filter(p=>id!==p.idx)
    // }
  }
  },
  
})