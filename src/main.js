import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import { routes } from './router/routes'
import { store } from './store/store'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

Vue.use(VueRouter)
Vue.use(VueResource)

const router = new VueRouter({
  routes
});

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
