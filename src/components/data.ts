import GithubIcon from './icons/GithubIcon.vue'
import LinkedInIcon from './icons/LinkedInIcon.vue'
import type { TextContent, Content, SocialLink, SongContent } from './types'

const textContentData: TextContent[] = [
  {
    title: 'Who I Am',
    text: `My name is Soheil, and I'm a Software Engineer based in Hamburg`,
  },
  {
    title: 'Who I Am Part II',
    text: `I enjoy reading books.
    Some of my favourites are <i>Harari's</i> <mark>Sapiens</mark> and <mark>Homo Deus</mark> and
    <i>Hawking's</i> <mark>Brief Answers to Big Questions</mark>. I also like traveling, running, rock music, playing the guitar and swimming.
    Interested in robust software architecture design and frontend tooling.`,
  },
  {
    title: 'What I Do',
    text: `Software Engineer at <a href="https://check24.de" target="_blank">CHECK24</a> in Hamburg. Working with smart and passionate people.`,
  },
  {
    title: 'What I Do Part II',
    text: `I help organizing community events from time to time. Last one was <a href="https://hamburg.devfest.de" target="_blank">DevFest Hamburg</a> 2024.`,
  },
  {
    title: 'What I Do Part III',
    text: `I contribute to a small extent to open source projects. Some of the repos include Nuxt, Next.js, React and Supabase.`,
  },
  {
    title: 'Experimenting With Things',
    text: `Currently building <a href="https://github.com/s0h311/rereact" target="_blank">meta framework</a> for React.<br/><br/>
		Built a zero dependency <a href="https://github.com/s0h311/yugen" target="_blank">state management library</a> in JavaScript.<br/><br/>
    Built <a href="https://github.com/s0h311/strict-transitions" target="_blank">extensions</a> to make Redux, NgRx, Pinia and co. safer to work with.<br/><br/>
    Built a Nuxt.js SaaS <a href="https://github.com/s0h311/nuxt-one" target="_blank">boilerplate</a> with Auth, DB, Payment etc.<br/><br/>
    Built a <a href="https://github.com/s0h311/feed-monky" target="_blank">Feedback collecting app</a> that uses AI to create TODOs from the feedbacks.<br/><br/>
    For book lovers: a <a href="https://github.com/s0h311/remind5" target="_blank">reminder app</a>.<br/><br/>
    <a href="https://roostercafe.de" target="_blank">Landing page</a> for my favorite café.<br/><br/>
    Gave a <a href="https://github.com/s0h311/workshops" target="_blank">web development workshop</a> for students of my uni.<br/><br/>
    Built a basic <a href="https://github.com/s0h311/go-webserver" target="_blank">web server</a> in Go.<br/><br/>
    And more...`,
  },
]

export const socialLinksData: SocialLink[] = [
  {
    title: 'Github',
    url: 'https://github.com/s0h311',
    icon: GithubIcon,
  },
  {
    title: 'LinkedIn',
    url: 'https://linkedin.com/in/soheiln',
    icon: LinkedInIcon,
  },
]

const songsData: SongContent[] = [
  {
    title: 'Champagne Supernova',
    trackId: '291233511',
  },
  {
    title: 'Heart-Shaped Box',
    trackId: '258954379',
  },
  {
    title: 'Everlong',
    trackId: '150438358',
  },
]

export const contentData: Content[] = [...textContentData, ...songsData]
