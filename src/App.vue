<template>
  <div>
    <div id="app">
      <div class="root">
        <h3>
          <img alt="Vue logo" height="40" src="./assets/logo.png"> Using Vue
        </h3>
        <Conditions/>
        <Temperature/>
      </div>
    </div>
    <div id="tracer"></div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Conditions from './components/Conditions.vue';
import Temperature from './components/Temperature.vue';
import meiosisTracer from 'meiosis-tracer';
import store from './store/store';
export default Vue.extend({
  name: 'app',
  components: {
    Conditions,
    Temperature,
  },
  mounted() {
    if (process.env.NODE_ENV !== 'production') {
      meiosisTracer({ selector: '#tracer', streams: [store.getState] });
    }
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
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: left;
  font-size: 22px;
}

#tracer {
  width: 440px;
  position: fixed;
  top: 0;
  right: 0;
}

#app h3 {
  display: flex;
  align-items: center;
}

.root {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.component {
  display: flex;
  flex-direction: column;
  border: 1px solid #7e7e7e;
  border-radius: 10px;
  margin: 20px 20px;
  padding: 20px 20px;
}

.row {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 10px 10px;
}

#app button {
  padding: 4px 14px;
  font-size: 18px;
  border: none;
  text-decoration: none;
  background-color: #2f95dc;
  color: white;
  border-radius: 4px;
}

#app input[type='text'] {
  /* width: 100%; */
  font-size: 18px;
  padding: 6px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

/* The container */
.container {
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* Hide the browser's default checkbox */
.container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

/* Create a custom checkbox */
.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: #eee;
}

/* On mouse-over, add a grey background color */
.container:hover input ~ .checkmark {
  background-color: #ccc;
}

/* When the checkbox is checked, add a blue background */
.container input:checked ~ .checkmark {
  background-color: #2196f3;
}

/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
  content: '';
  position: absolute;
  display: none;
}

/* Show the checkmark when checked */
.container input:checked ~ .checkmark:after {
  display: block;
}

/* Style the checkmark/indicator */
.container .checkmark:after {
  left: 9px;
  top: 5px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
</style>
