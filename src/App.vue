<script setup lang="ts">
import { RouterView } from "vue-router";
import { toVietnameseSlug, toSlugFile } from "vietnamese-url";
import { onMounted } from "vue";

onMounted(() => {
  const slug = toSlugFile("Đường dẫn ảnh viết bằng tiếng    Việt   .jpg");
  console.log("slug: ", slug);
});
</script>

<template>
  <RouterView />
</template>

<style scoped></style>
