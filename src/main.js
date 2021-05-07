import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from "firebase"
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false

let firebaseConfig = { // 파이어베이스 설정 정보
  apiKey: "AIzaSyA_wdrEhnY9ioj4qD9buaPOOMY4W1gedXk",
  authDomain: "fwtalk.firebaseapp.com",
  projectId: "fwtalk",
  storageBucket: "fwtalk.appspot.com",
  messagingSenderId: "753398946190",
  appId: "1:753398946190:web:79d34bd13b789194e82cdf",
  measurementId: "G-E9D3MJEG4T"
}

firebase.initializeApp(firebaseConfig) // 파이어베이스 init
firebase.analytics() // analytics 사용하겠다는 뜻

Vue.use(ElementUI)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
