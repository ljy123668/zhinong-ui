import Vue from 'vue';
import Button from './button.vue'
import Icon from './icon.vue'
Vue.component('z-button', Button)
Vue.component('z-icon', Icon)

new Vue({
  el: '#app',
})