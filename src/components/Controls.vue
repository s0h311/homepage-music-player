<template>
  <div class="flex items-center gap-10">
    <button @click="$emit('previous')">
      <PreviousIcon lg />
    </button>

    <button
      v-if="playing"
      @click="pause"
    >
      <PauseIcon xl />
    </button>

    <button
      v-else
      @click="resume"
    >
      <ResumeIcon xl />
    </button>

    <button @click="$emit('next')">
      <NextIcon lg />
    </button>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import NextIcon from './icons/NextIcon.vue'
  import PauseIcon from './icons/PauseIcon.vue'
  import PreviousIcon from './icons/PreviousIcon.vue'
  import ResumeIcon from './icons/ResumeIcon.vue'

  const emits = defineEmits<{
    previous: [void]
    next: [void]
    pause: [void]
    resume: [void]
  }>()

  const playing = ref<boolean>(true)

  function pause(): void {
    playing.value = false
    emits('pause')
  }

  function resume(): void {
    playing.value = true
    emits('resume')
  }
</script>
