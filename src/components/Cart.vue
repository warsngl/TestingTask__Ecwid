<template lang='pug'>
ul
  li.mb-4.flex.justify-center(v-for="i in cart")
    Product(:id="i" view=false)
</template>

<script>
import Product from "./product.vue";
export default {
  data: () => ({}),
  methods: {},
  computed: {
    cart() {
      return this.$store.state.cart;
    },
  },
  components: { Product },
};
</script>

<style>
</style>