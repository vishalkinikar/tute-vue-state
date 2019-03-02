<template>
  <div id="app">
    <Conditions/>
    <Temperature/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Conditions from './components/Conditions.vue';
import Temperature from './components/Temperature.vue';

export default Vue.extend({
  name: 'app',
  components: {
    Conditions,
    Temperature,
  },
});
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
