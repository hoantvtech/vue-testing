<template>
  <div>Mouse position is at: {{ x }}, {{ y }}</div>
  {{ data }} - {{ error }}
</template>

<script setup lang="ts">
import { useMouse } from "../../utils/mouse";
import { useFetch } from "../../utils/fetch-data";

const { x, y } = useMouse();
const { data, error } = useFetch("https://api.publicapis.org/entries");
</script>
