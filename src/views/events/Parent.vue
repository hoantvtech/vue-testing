<template>
  <div>
    <Child @onUpdateMe="onUpdateMe" />
    <p>{{ message }}</p>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import Child from "./Child.vue";

const message = ref("Hello World !");
const onUpdateMe = () => {
  message.value = "Clicked me";
};
</script>
