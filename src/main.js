import { createApp } from 'vue'
import App from './App.vue'
import './assets/index.css'
import { createRouter,createWebHistory } from 'vue-router'
import Product from './components/Product.vue'
import Home from './components/Home.vue'
import {base} from './mixins/base'
const routes = [
  { path: '/', component: Home },
  { path: '/products/:productsId', component: Product },
  { path: '/categories/:categoriesId', component: Home },
  
]

const router = createRouter({
  history: createWebHistory(),
  routes, // short for `routes: routes`
})

createApp(App).use(router).mixin(base).mount('#app')
