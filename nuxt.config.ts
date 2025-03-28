export default defineNuxtConfig({
				compatibilityDate: '2024-11-01',
				devtools: { enabled: true },
				modules: ['@nuxtjs/tailwindcss', '@nuxt/icon', '@nuxt/image'],
				app: {
								head: {
												htmlAttrs: {
																lang: 'en',
												},
												title: 'Frontend Mentor',
												link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }],
												meta: [
																{
																				name: 'description',
																				content:
																								'Shorten your long URLs instantly with our fast and reliable link shortener. Easy to use, free, and perfect for sharing links anywhere. Try it now!',
																},
												],
								},
				},
})