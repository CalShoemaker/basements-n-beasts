import Vue from 'vue'
import App from './App.vue'
import * as VueGoogleMaps from "vue2-google-maps";

Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyAXmz8tEUXpAI_ZIVoyTV1OXHV-kdG993o",
    libraries: "places" // necessary for places input
  }
});

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')