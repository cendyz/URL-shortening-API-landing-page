import { defineStore } from 'pinia'

type ShortenedLink = { link1: string; link2: string }

const useLinkStore = defineStore('link-store', {
	state: () => ({
		shortedLinks: [] as ShortenedLink[],
		userLink: '',
		apiLink: '',
	}),
	actions: {
		async sendLink() {
			try {
				const response: { result_url?: string; error?: string } = await $fetch('/api/shortLinkApi', {
					method: 'POST',
					body: { url: this.userLink },
				})

				if (response.result_url) {
					this.shortedLinks.push({ link1: response.result_url, link2: this.userLink })
				}
			} catch (error) {
				console.log(error)
			}
		},
	},
})

export default useLinkStore
