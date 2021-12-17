<template lang='pug'>
.flex.justify-center.rounded-2xl.border-2.shadow-xl(v-if='item')
  .flex.pr-4
    img.border-2.mr-4.rounded-2xl.h-auto(:src='item.thumbnailUrl' :class="!view && 'rounded-xl w-16 '")
    .flex.flex-col
      p.mb-4.text-violet-600.text-xl.font-bold {{item.name}}
      p.grow(v-html='item.description' v-if='view')
      .flex.justify-center
        p.font-bold.mr-4 {{item.price}}$
        button.rounded-xl.bg-green-400.px-4(@click='buyProduct(item.id)' v-if='view') Buy
        button.rounded-xl.bg-red-400.px-4(@click='deleteProduct(item.id)' v-if='!view') Delete
</template>

<script>
export default {
  props:{
    id:{
      type:Number
    },
    view:{
      type:String
    }
  },
  data:()=>({
    item:{},
  }),
  methods:{
    deleteProduct(id){
      this.$store.commit('deleteProduct',id)
    }
  },
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