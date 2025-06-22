<template>
  <progress
    class="progress progress-accent w-56"
    :max
    :value="value + 1"
  />
</template>

<script setup lang="ts">
  defineProps<{
    max: number
    value: number
  }>()
</script>

<style scoped>
  ::-webkit-progress-bar {
    border-radius: 10px;
  }
</style>
