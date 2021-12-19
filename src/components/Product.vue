<template lang='pug'>
.flex.pr-4.rounded-2xl.border-2.shadow-xl(v-if='item')
  .w-full
    img.border-2.mr-4.rounded-2xl.h-auto(:src='item.thumbnailUrl' :class="!view && 'rounded-xl w-16 '")
    .flex.flex-col
      p.mb-4.text-violet-600.text-xl.font-bold {{item.name}}
      p.grow(v-html='item.description' v-if='view')
      .flex.justify-center
        p.font-bold.mr-4 {{item.price}}$
        button.rounded.bg-green-400.px-4(@click='buyProduct(item.id)' v-if='view') Buy
</template>

<script>
export default {
  props:{
    id:{
      type:Number
    },
    view:{
      type:Boolean,
      default:()=>true
    }
  },
  data:()=>({
    item:{},
  }),
  methods:{
    
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