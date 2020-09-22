import Vue from 'vue'
import App from './App.vue'
import * as VueGoogleMaps from "vue2-google-maps";
import vuetify from '@/plugins/vuetify' // path to vuetify export

Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyAXmz8tEUXpAI_ZIVoyTV1OXHV-kdG993o",
    libraries: "places" // necessary for places input
  }
});

Vue.config.productionTip = false

new Vue({
    vuetify,
    render: h => h(App)
}).$mount('#app')