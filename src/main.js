import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'

import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'fullpage.js/dist/fullpage.min.css'
import VueFormWizard from 'vue-form-wizard'
import 'vue-form-wizard/dist/vue-form-wizard.min.css'
import VueFullPage from 'vue-fullpage.js'
import axios from 'axios'
import VueAxios from 'vue-axios'
// import VueJwtDecode from 'vue-jwt-decode'
import VueJWT from 'vuejs-jwt'
import VueAnalytics from 'vue-analytics'

Vue.use(VueAxios, axios)
Vue.use(BootstrapVue);
Vue.use(VueFormWizard);
Vue.use(VueFullPage);
// Vue.use(VueJwtDecode)
Vue.use(VueJWT)

Vue.use(VueAnalytics, {
  id: 'UA-129169656-1'
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')