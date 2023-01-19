<template>
  <input v-model="message" />
  {{ hello }}
  <Child />
</template>
<script setup lang="ts">
import { ref, provide, inject } from "vue";
import Child from "./Child.vue";
const i18n = inject<{ greetings: { hello: string } }>("i18n");
const hello = i18n?.greetings.hello;

const message = ref("hello world.");
provide("message", message);
</script>
