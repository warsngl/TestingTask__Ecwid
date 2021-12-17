<template lang='pug'>
.product(v-if='item')
  p {{item.name}}
  p(v-html='item.description')
  img(:src='item.thumbnailUrl')
  p {{item.price}}
  button Buy
</template>

<script>
export default {
  data:()=>({
    item:{},
  }),
  computed:{
    
  },
  async mounted(){
    //null чтобы вместо ключа забирался весь объект
    this.item=await this.getData(`products/${this.paramsId}`,null)
  }
}
</script>

<style>

</style>