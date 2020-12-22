import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import firebase from 'firebase'
import vuescroll from 'vue-scroll'
import { firebaseConfig } from '../firebase-config.js'

firebase.initializeApp(firebaseConfig);

/*Vue.directive('scroll', {
    inserted: function (el, binding) {
      let f = function (evt) {
        if (binding.value(evt, el)) {
          window.removeEventListener('scroll', f)
        }
      }
      window.addEventListener('scroll', f)
    }
  })*/

createApp(App).use(store).use(router).use(vuescroll, {throttle: 600}).mount('#app')
