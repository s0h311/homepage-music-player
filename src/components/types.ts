import type { Component } from 'vue'

export type Content = TextContent | SongContent

export type TextContent = {
  title: string
  text: string
}

export type SocialLink = {
  title: string
  url: string
  icon: Component
}

export type SongContent = {
  title: string
  trackId: string
}
