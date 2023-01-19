<template>
  <div>
    Parent:
    <AsyncPage />
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from "vue";

const AsyncPage = defineAsyncComponent(() => import("./Async.vue"));
</script>
