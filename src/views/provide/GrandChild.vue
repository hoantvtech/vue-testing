<template>
  <p>GrandChild: message: {{ message }}</p>
</template>
<script setup lang="ts">
import { inject } from "vue";

const message = inject("message");
</script>
