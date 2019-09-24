import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'
import Content from './views/Content'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   component: Home
    // },
    // {
    //   path:'/about',
    //   name:"about",
    //   component: resolve=>(require(["@/views/About"],resolve))
    // },
    {
      path:'/',
      name:"content",
      component: Content
    }
  ]
})
