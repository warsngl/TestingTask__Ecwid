<template lang='pug'>
.product(v-if='item')
  p {{item.name}}
  p(v-html='item.description')
  img(:src='item.thumbnailUrl')
  p {{item.price}}
  button(@click='buyProduct(item.id)' v-if='!id') Buy
</template>

<script>
export default {
  props:{
    id:{
      type:Number
    }
  },
  data:()=>({
    item:{},
  }),
  computed:{
  },
  async mounted(){
    //null чтобы вместо ключа забирался весь объект
    this.item=this.id ? await this.getData(`products/${this.id}`,null) : await this.getData(`products/${this.paramsId}`,null)
  }
}
</script>

<style>

</style>