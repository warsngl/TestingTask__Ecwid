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
ul.mt-8(v-if="items")
  li.fc(v-for="i in filteredProducts" :key='i.id' class='mb-2 md:mb-4 lg:mb-8')
    Product(:id="i.id", :view='true')
</template>