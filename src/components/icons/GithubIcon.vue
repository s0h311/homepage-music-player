<template>
  <img
    :src="GithubBlackLogoUrl"
    :width="getIconSize($props)"
    :height="getIconSize($props)"
    class="min-w-[16px]"
  />
</template>

<script setup lang="ts">
  import { getIconSize, type FillIconProps } from './utils'
  import GithubBlackLogoUrl from '../../assets/github-black.png'

  defineProps<FillIconProps>()
</script>
