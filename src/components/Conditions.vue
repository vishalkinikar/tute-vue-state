<template>
  <div class="component">
    <div class="row">
      <label class="container">
        Precipitations
        <input
          type="checkbox"
          :checked="precipitations"
          @change="changePrecipitations($event.target.checked)"
        >
        <span class="checkmark"/>
      </label>
    </div>
    <div class="row">
      <label>Sky&nbsp;</label>
      <input type="text" :value="sky" @keyup="changeSky($event.target.value)">
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
      precipitations: iniState.conditions.precipitations,
      sky: iniState.conditions.sky,
    };
  },
  mounted() {
    store.getState.map(s => {
      this.precipitations = s.conditions.precipitations;
      this.sky = s.conditions.sky;
    });
  },
  methods: {
    changePrecipitations(value: boolean) {
      store.actions.setPrecipitations(value);
    },
    changeSky(value: string) {
      store.actions.setSky(value);
    },
  },
});
</script>
