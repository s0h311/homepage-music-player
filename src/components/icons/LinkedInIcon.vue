<template>
  <img
    :src="linkedInBlackLogoUrl"
    :width="getIconSize($props)"
    :height="getIconSize($props)"
    class="min-w-[16px]"
  />
</template>

<script setup lang="ts">
  import { getIconSize, type FillIconProps } from './utils'
  import linkedInBlackLogoUrl from '../../assets/linkedin-black.png'

  defineProps<FillIconProps>()
</script>
