import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'

// Element UI
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css' //archivo css
import locale from 'element-ui/lib/locale'
import lang from 'element-ui/lib/locale/lang/es'

import firebase from 'firebase'

Vue.use(ElementUI)

// configure language
Vue.use(ElementUI, { locale })
locale.use(lang)

Vue.config.productionTip = false

  // Initialize Firebase
var config = {
  apiKey: "AIzaSyDAAjd5uusmCBN_jxMUohkOqgGHFRdaLAg",
  authDomain: "login-firebaseui.firebaseapp.com",
  databaseURL: "https://login-firebaseui.firebaseio.com",
  projectId: "login-firebaseui",
  storageBucket: "login-firebaseui.appspot.com",
  messagingSenderId: "83992144420"
};
firebase.initializeApp(config)

firebase.auth().onAuthStateChanged(function() {
  new Vue({
    router,
    render: h => h(App)
  }).$mount('#app')
});
