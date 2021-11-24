import Vue from 'vue'
import Home from '../components/Home.vue'
import Summary from '../components/Summary'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', component: Home },
    { path: '/Summary', component: Summary }
  ]
})

export default router
