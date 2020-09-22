import Vue from 'vue'
import App from './App.vue'
import * as VueGoogleMaps from "vue2-google-maps";
import vuetify from './plugins/vuetify' // path to vuetify export
import store from './store';

Vue.use(VueGoogleMaps, {
    load: {
        key: "AIzaSyAQJeNNNtbGuizrFzrJwFYwR-tp2Puw14Q",
        libraries: "places" // necessary for places input
    }
});

Vue.config.productionTip = false

new Vue({
    store,
    vuetify,
    render: h => h(App)
}).$mount('#app')