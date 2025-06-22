<template>
  <div
    class="rounded-xl shadow-md p-5 text-2xl"
    v-html="content"
  ></div>
</template>

<script setup lang="ts">
  defineProps<{
    content: string
  }>()
</script>
