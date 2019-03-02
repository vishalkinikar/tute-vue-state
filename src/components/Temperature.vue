<template>
  <div class="component">
    <div class="row">
      The temperature is {{temperature}} &deg;{{units}}&nbsp;
      <button @click="incTemperature">+</button>&nbsp;
      <button @click="decTemperature">&minus;</button>
    </div>
    <div class="row">
      <button @click="toggleUnits">Toggle temperature units</button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import store from '../store/store';
export default Vue.extend({
  data() {
    const iniState = store.getState();
    return {
      temperature: iniState.temperature.value,
      units: iniState.temperature.units,
    };
  },
  mounted() {
    store.getState.map(s => {
      this.temperature = s.temperature.value;
      this.units = s.temperature.units;
    });
  },
  methods: {
    incTemperature() {
      store.actions.incrementTemperature(+1);
    },
    decTemperature() {
      store.actions.incrementTemperature(-1);
    },
    toggleUnits() {
      store.actions.toggleTemperatureUnits();
    },
  },
});
</script>
