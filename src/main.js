import Vue from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import FlagIcon from 'vue-flag-icon'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret, faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import rate from 'vue-rate'
library.add(faUserSecret, faStar)
Vue.component('font-awesome-icon', FontAwesomeIcon)


Vue.config.productionTip = false
Vue.use(FlagIcon);
Vue.use(rate)

new Vue({
    render: h => h(App),
}).$mount('#app')