<template>
  <ul class="flex items-center gap-5 justify-end">
    <li
      v-for="link in links"
      :key="link.title"
    >
      <a
        :href="link.url"
        target="_blank"
        :aria-label="link.title"
      >
        <component
          :is="link.icon"
          lg
        />
      </a>
    </li>
  </ul>
</template>

<script setup lang="ts">
  import type { SocialLink } from './types'

  defineProps<{
    links: SocialLink[]
  }>()
</script>
