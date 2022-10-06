import Vue from 'vue'
import App from './App.vue'
import router from './router'

import axios from 'axios'
axios.defaults.baseURL = "http://127.0.0.1:8000";

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap'

//import FontAwesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";


//import Toasted
import Toasted from "vue-toasted";

// Toasted
Vue.use(Toasted);

//Font Awesome
library.add(fas, fab, far);
Vue.component("font-awesome-icon", FontAwesomeIcon);


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
