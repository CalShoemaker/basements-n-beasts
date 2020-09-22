<template>
  <div>
    <google-map />
    <Game />
  </div>
</template>


<script>
import Game from '@/components/Game'
import GoogleMap from "./components/GoogleMap";

export default {
  name: 'App',
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
