<template>
  <div class="async-component loaded">
    <!-- We don't need a spinner here since loading is handled at the root -->
    <slot />
  </div>
</template>

<script setup lang="ts">
// https://vueschool.io/articles/vuejs-tutorials/suspense-everything-you-need-to-know/
// eslint-disable-next-line vue/no-setup-props-destructure
const { time } = defineProps({
  time: {
    type: Number,
    required: true,
  },
});

console.log("Mounting " + time);

// Add in a delay to simulate loading data
await new Promise((resolve) => {
  setTimeout(() => {
    console.log("Resolving " + time);
    resolve("OK");
  }, time);
});
</script>

<style scoped>
.async-component {
  border: 1px solid rgb(200, 200, 200);
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.1);
  padding: 32px;
  margin: 20px;
}

.loaded {
  background: rgba(0, 255, 100, 0.2);
  border-color: rgb(0, 255, 100);
}
</style>
