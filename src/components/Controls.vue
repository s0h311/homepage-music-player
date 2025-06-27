<template>
  <div class="flex items-center justify-center gap-10">
    <motion.button
      :whilePress="{ scale: 0.9 }"
      @click="$emit('previous')"
    >
      <PreviousIcon
        lg
        fill-color="fill-primary"
      />
    </motion.button>

    <motion.button
      v-if="playing"
      :whilePress="{ scale: 0.9 }"
      @click="pause"
    >
      <PauseIcon
        xl
        fill-color="fill-primary"
      />
    </motion.button>

    <motion.button
      v-else
      :whilePress="{ scale: 0.9 }"
      @click="resume"
    >
      <ResumeIcon
        xl
        fill-color="fill-primary"
      />
    </motion.button>

    <motion.button
      :whilePress="{ scale: 0.9 }"
      @click="$emit('next')"
    >
      <NextIcon
        lg
        fill-color="fill-primary"
      />
    </motion.button>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import NextIcon from './icons/NextIcon.vue'
  import PauseIcon from './icons/PauseIcon.vue'
  import PreviousIcon from './icons/PreviousIcon.vue'
  import ResumeIcon from './icons/ResumeIcon.vue'
  import { motion } from 'motion-v'

  const emits = defineEmits<{
    previous: [void]
    next: [void]
    pause: [void]
    resume: [void]
  }>()

  const playing = ref<boolean>(false)

  function pause(): void {
    playing.value = false
    emits('pause')
  }

  function resume(): void {
    playing.value = true
    emits('resume')
  }
</script>
