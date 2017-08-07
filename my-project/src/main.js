// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from "axios"
// import animate from 'animate.css'
import VueAwesomeSwiper from "vue-awesome-swiper"

// import VueResource from 'vue-resource';

Vue.config.productionTip = false;

// Vue.use(VueResource)
Vue.use(VueAwesomeSwiper);
Vue.prototype.arr=[];
Vue.prototype.arr1=[];

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },

})
