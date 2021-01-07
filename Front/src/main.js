import Vue from 'vue'
import App from './modules/app/views/App.vue'
import router from './router'
import store from './store'
import moment from 'moment'

// Install BootstrapVue
import { BootstrapVue } from 'bootstrap-vue'
Vue.use(BootstrapVue)

// Install Paginate
import Paginate from 'vuejs-paginate'
Vue.component('paginate', Paginate)

// Install progressbar
import vueTopprogress from 'vue-top-progress'
Vue.use(vueTopprogress)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

Vue.filter('formatDate', function(value) {
    if (value) {
        return moment(String(value)).format('MM/DD/YYYY hh:mm')
    }
});
