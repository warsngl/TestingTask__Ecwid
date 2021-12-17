<script>
export default{
  data:()=>({
    items:[],
  }),
  methods:{
    
  },
  computed:{
    filteredProducts(){
      if(!this.paramsKey){
        return this.items
      } else{
        return this.items.filter(i=>{
          return i.categoryIds[0]==this.paramsId
        })
      }
    },
    
  },
  async mounted(){
    this.items = await this.getData('products')
  }
}
</script>

<template lang='pug'>
.productsList
  ul(v-if='items')
    li(v-for='i in filteredProducts')
      router-link(:to="'/products/'+i.id")
        p {{i.name}}
        img(:src='i.thumbnailUrl')
      .flex.justify-center
        p {{i.defaultDisplayedPriceFormatted}}
        button(@click='buyProduct(i.id)') Buy
</template>