<template lang='pug'>
p.mt-8(v-if='!cart.length') Cart is clear
ul(v-else)
  li.mb-4.flex.justify-center(v-for="i in cart" :key='i.idx')
    Product(:id="i.product" :view='false' class='w-1/2')
    button.rounded.bg-red-400.px-4.ml-4.h-auto(@click='deleteProduct(i.idx)') {{i.count}}
</template>

<script>
import Product from "./product.vue";
export default {
  data: () => ({}),
  methods: {
    deleteProduct(id){
      console.log(id);
      this.$store.commit('deleteProduct',id)
      this.saveLS(this.$store.state.cart)
    },
  },
  computed: {
    viewProp(){
      return false
    },
    cart() {
      return this.$store.state.cart;
    },
  },
  components: { Product },
};
</script>

<style>
</style>