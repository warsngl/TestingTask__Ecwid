<script>
export default{
  data:()=>({
    categories:[],
  }),
  methods:{

  },
  async mounted(){
    this.categories= await this.getData('categories')
  }
}
</script>

<template lang='pug'>
h1
  router-link(to='/') Home
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
  margin-top: 20px;
}
.router-link-exact-active{
  text-decoration: underline;
}
</style>
