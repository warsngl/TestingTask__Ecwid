<template lang='pug'>
.fc
  .rounded-2xl.border-2.shadow-xl(v-if='item' class="xl:w-70vw")
    .flex
      img.border-2.rounded-2xl.my-auto(:src='item.thumbnailUrl' :class="!view ? 'h-24 lg:h-48 lg:mr-4':'h-20 md:h-32 lg:h-36 xl:h-48 2xl:h-64'")
      .fcol.w-full
        router-link.fcol.grow(:to="'/products/' + item.id")
          p.text-violet-600.font-bold.mb-1.text-center(class='md:text-base lg:text-xl') {{item.name}}
          p.description(v-html='item.description' class='text-xs md:text-base lg:text-lg')
        .fc.items-center.py-1
          p.font-bold.mr-4 {{item.price}}$
          button.rounded.bg-green-400(@click='buyProduct(item.id)' v-if='view' class='px-4 md:px-4 md:py-1 lg:px-8 lg:py-2 hover:bg-blue-200') Buy
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
.description>p:last-child{
  @apply flex justify-center items-center text-xs md:text-sm xl:text-base 2xl:mt-8
}
.description>p:last-child>strong{
  @apply ml-1 
}
</style>