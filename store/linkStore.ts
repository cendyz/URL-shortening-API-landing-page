import { defineStore } from 'pinia'

type ShortenedLink = { link1: string; link2: string }

const useLinkStore = defineStore('link-store', {
	state: () => ({
		shortedLinks: [] as ShortenedLink[],
	}),
	actions: {
		addLinks(link1: string, link2: string) {
			this.shortedLinks.push({ link1, link2 })
		},
	},
})

export default useLinkStore
