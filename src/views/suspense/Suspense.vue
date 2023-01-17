<template>
  <button @click="reload">Reload page</button>
  <BeforeSuspense :time="3000">
    <BeforeSuspense :time="2000" />
    <BeforeSuspense :time="1000">
      <BeforeSuspense :time="500" />
      <BeforeSuspense :time="4000" />
    </BeforeSuspense>
  </BeforeSuspense>
</template>

<script setup lang="ts">
import BeforeSuspense from "./BeforeSuspense.vue";

const reload = () => {
  window.location.reload();
};
</script>
<style>
html {
  background: slategray;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 60px auto 0 auto;
  max-width: 600px;
  background-color: rgba(0, 0, 0, 0.4);
}

button {
  padding: 4px 12px;
  margin-bottom: 20px;
  background: white;
  font-size: 14px;
  border: 1px solid black;
  cursor: pointer;
}
</style>
