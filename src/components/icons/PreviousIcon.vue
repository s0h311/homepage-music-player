<template>
  <svg
    :width="getIconSize($props)"
    :height="getIconSize($props)"
    viewBox="0 -960 960 960"
    class="min-w-[16px]"
    :class="fillColor ?? 'fill-current'"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M220-280v-400q0-17 11.5-28.5T260-720q17 0 28.5 11.5T300-680v400q0 17-11.5 28.5T260-240q-17 0-28.5-11.5T220-280Zm458-1L430-447q-9-6-13.5-14.5T412-480q0-10 4.5-18.5T430-513l248-166q5-4 11-5t11-1q16 0 28 11t12 29v330q0 18-12 29t-28 11q-5 0-11-1t-11-5Z"
    />
  </svg>
</template>

<script setup lang="ts">
  import { getIconSize, type FillIconProps } from './utils'

  defineProps<FillIconProps>()
</script>
