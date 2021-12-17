export const base={
  data:()=>({
    uri:'https://app.ecwid.com/api/v3/58958138/',
    token:'?token=public_7BxbJGWyDaZfSQqjVS5Ftr4jzXkS43UD',
  }),
  computed:{
    paramsId(){
      // возвращает ид по ключу
      return this.paramsKey ? this.$route.params?.[this.paramsKey] : ''
    },
    url(){
      return this.uri+this.nest+this.token
    },
    paramsKey(){
      //возвращает имя роута
      let key = this.$route.fullPath.match(/[a-z]/gi)
      key ? key=key.join('')+'Id' : key=''
      return key
    },
    cartVol(){
      return this.$store.state.cart.length
    }
  },
  methods:{
    //универсальный фетч
    async getData(nest='products',key='items'){
      this.nest=nest
      let data=[]
      await fetch(this.url).then(res=>res.json()).then(res=>{
        key ? data=res[key] : data=res
        console.log(data);
      }) 
      return data
    },
    buyProduct(id){
      this.$store.commit('buyProduct',id)
      this.saveLS(this.$store.state.cart)
    },
    saveLS(state){
      localStorage.setItem('cart',JSON.stringify(state))
    },
    getLS(){
      return JSON.parse(localStorage.getItem('cart'))
    }
  }
}