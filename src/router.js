import Vue from 'vue'
import Router from 'vue-router'
import Content from './views/Content'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'content',
      component: Content
    },
    // {
    //   path:'/about',
    //   name:"about",
    //   component: resolve=>(require(["@/views/About"],resolve))
    // },
  ]
})
