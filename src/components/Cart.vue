<template lang='pug'>
ul
  li(v-for='i in cart')
    Product(:id='i')
</template>

<script>
import Product from "./Product.vue"
export default {
    data: () => ({}),
    methods: {
        
    },
    computed:{
      cart(){
        return this.$store.state.cart
      }
    },
    components: { Product }
}
</script>

<style>

</style>