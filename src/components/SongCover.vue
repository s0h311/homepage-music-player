<template>
  <div class="rounded-xl shadow-md p-5 text-2xl">
    <iframe
      width="100%"
      height="100%"
      scrolling="no"
      frameborder="no"
      allow="autoplay"
      :src
    ></iframe>
    <div
      style="
        font-size: 10px;
        color: #cccccc;
        line-break: anywhere;
        word-break: normal;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        font-family:
          Interstate,
          Lucida Grande,
          Lucida Sans Unicode,
          Lucida Sans,
          Garuda,
          Verdana,
          Tahoma,
          sans-serif;
        font-weight: 100;
      "
    ></div>
  </div>
</template>

<script setup lang="ts">
  import { computed } from 'vue'
  import type { SongContent } from './types'

  const props = defineProps<{ trackId: SongContent['trackId'] }>()

  const src = computed(
    () =>
      `https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${props.trackId}&color=%23ff5500&auto_play=true&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&visual=true`
  )
</script>
