<script>
export default{
  data:()=>({
    categories:[],
  }),
  methods:{

  },
  async mounted(){
    this.categories= await this.getData('categories')
    this.$store.commit('fillCart',this.getLS())
  }
}
</script>

<template lang='pug'>
.sticky.top-0
  .navbar
    router-link(to='/') Home
    p {{cartVol}}
ul.flex.justify-between.w-64.mx-auto(v-if='categories')
  li(v-for='c in categories')
    router-link(:to="'/categories/'+c.id") {{c.name}}
router-view
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.router-link-exact-active{
  text-decoration: underline;
}
.navbar{
  padding: 8px 16px;
  display: flex;
  justify-content: space-between;
  background: blue;
}
</style>
