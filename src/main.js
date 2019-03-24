import Vue from 'vue'

import VueRouter from 'vue-router'
Vue.use(VueRouter);
import App from './App.vue'
import Home from './components/Home.vue'
import BookProfile from './components/BookProfile.vue'
import FastWriter from './components/FastWriter.vue'
import store from './store'
const router = new VueRouter({
  routes: [
    {
      path: '/', component: Home, name: 'Home'
    },
    {
      path: '/fast-writer/:id', component: FastWriter, name: 'FastWriter'
    },
    {
      path: '/Books/:id', component: BookProfile, name: 'BookProfile'
    }
  ],
  mode: 'history'
})

new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})
