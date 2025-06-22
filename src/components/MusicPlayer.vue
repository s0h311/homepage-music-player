<template>
  <div class="flex flex-col md:rounded-xl shadow-md p-5 h-full gap-5">
    <TextCover
      v-if="currentContent && 'text' in currentContent"
      class="overflow-scroll h-full"
      :content="currentContent.text"
    />

    <SongCover
      v-if="currentContent && 'trackId' in currentContent"
      class="overflow-scroll h-full"
      :trackId="currentContent.trackId"
    />

    <div class="mt-auto grid gap-5">
      <ShareBar :links="socialLinks" />

      <h2
        v-if="currentContent"
        class="font-bold text-lg"
      >
        {{ currentContent.title }}
      </h2>

      <Progress
        class="w-full"
        :max="contents.length"
        :value="currentContentIndex"
      />

      <Controls
        @previous="previous"
        @next="next"
        @pause="pause"
        @resume="resume"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
  import { computed, ref } from 'vue'
  import TextCover from './TextCover.vue'
  import Progress from './Progress.vue'
  import Controls from './Controls.vue'
  import type { Content, SocialLink } from './types'
  import { contentData, socialLinksData } from './data'
  import ShareBar from './ShareBar.vue'
  import SongCover from './SongCover.vue'

  const currentContentIndex = ref<number>(0)

  const currentContent = computed(() => {
    if (contents.value.length > 0) {
      return contents.value[currentContentIndex.value]
    }

    return null
  })

  const contents = ref<Content[]>(contentData)

  const socialLinks = ref<SocialLink[]>(socialLinksData)

  function previous(): void {
    if (currentContentIndex.value === 0) {
      currentContentIndex.value = contents.value.length - 1
      return
    }

    currentContentIndex.value--
  }

  function next(): void {
    if (currentContentIndex.value === contents.value.length - 1) {
      currentContentIndex.value = 0
      return
    }

    currentContentIndex.value++
  }

  function pause(): void {
    alert("Doesn't work yet")
  }

  function resume(): void {
    alert("Doesn't work yet")
  }
</script>
