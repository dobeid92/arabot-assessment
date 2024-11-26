import Vue from 'vue'
import App from './App.vue'
import 'vuetify/dist/vuetify.min.css';
import vuetify from './plugins/vuetify'

import '@/assets/css/app.css';

import store from './store'

import InputField from './components/basic/ArabotInputField.vue';
import Button from './components/basic/ArabotButton.vue';
import Dropdown from './components/basic/ArabotDropdown.vue';


Vue.use(vuetify);

Vue.component('arabot-input-field', InputField)
Vue.component('arabot-button', Button)
Vue.component('arabot-dropdown', Dropdown)

Vue.config.productionTip = false

new Vue({
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app')
