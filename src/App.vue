<template>
  <v-app>
    <v-main>
      <v-container>
        {{ count }}
        <v-card>
          <v-card-title>Google Map</v-card-title>
          <v-card-text>
            <google-map />
          </v-card-text>
        </v-card>
        <v-card>
          <v-card-title>Game</v-card-title>
          <v-card-text>
            <Game v-if="false" />
          </v-card-text>
        </v-card>
      </v-container>
    </v-main>
  </v-app>
</template>


<script>
import Game from '@/components/Game'
import GoogleMap from "./components/GoogleMap";
import {mapGetters, mapState, mapActions} from 'vuex';

export default {
  name: 'App',
  mounted(){
    this.increment();
    console.log("COUNT: ", this.count);
  },
  computed:{
    ...mapState({
      count: state => state.cart.count
    }),
    ...mapGetters([
      'cart/count'
    ])
  },
  methods: {
    ...mapActions({
      increment:'cart/increment'
    })
  },
  components: { Game,GoogleMap }
}
</script>

<style lang="scss">
body {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
}
</style>
