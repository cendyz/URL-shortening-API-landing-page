<template>
	<main class="grid temples">
		<Header class="row-start-1 row-end-3 colOne" />
		<LinkShorter class="row-start-2 row-end-4 colOne mt-[-7.5rem]" />
		<FirstSection class="row-start-3 row-end-4 colOne"/>
	</main>
</template>

<script setup lang="ts">
const urlToShorten = ref('https://icones.js.org/collection/ic')
const shortUrl = ref('')
const error = ref('')

// const shortenUrl = async () => {
// 	try {
// 		const response = await $fetch('/api/shorten', {
// 			method: 'POST',
// 			body: { url: urlToShorten.value },
// 		})

// 		if (response.result_url) {
// 			shortUrl.value = response.result_url
// 		} else {
// 			error.value = response.error || 'Unknown error'
// 		}
// 	} catch (err) {
// 		error.value = 'Failed to shorten URL'
// 	}
// }

// onMounted(() => {
// 	shortenUrl()

// })
</script>

<style lang="scss">
@use '../assets/sass/reset.scss';

.temples {
	grid-template-columns: 1fr;
	grid-template-rows: 1fr auto auto 1fr 1fr 1fr;
}

.colOne {
	grid-column: 1/2;
}
</style>
