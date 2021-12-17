<script>
import Product from "./Product.vue";
export default {
  data: () => ({
    items: [],
  }),
  methods: {},
  computed: {
    filteredProducts() {
      if (!this.paramsKey) {
        return this.items;
      } else {
        return this.items.filter((i) => {
          return i.categoryIds[0] == this.paramsId;
        });
      }
    },
  },
  async mounted() {
    this.items = await this.getData("products");
  },
  components: { Product },
};
</script>

<template lang='pug'>
.px-8
  ul(v-if="items")
    li.mb-8(v-for="i in filteredProducts" :key='i.id')
      router-link(:to="'/products/' + i.id")
        Product(:id="i.id", view="Home")
</template>