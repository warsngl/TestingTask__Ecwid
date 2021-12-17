import { createStore } from 'vuex'

export const store = createStore({
  state () {
    return {
      cart: [],
    }
  },
  mutations: {
    buyProduct (state,id) {
      state.cart.push(id)
    },
    fillCart(state,cart){
      state.cart=cart
    }
  }
})