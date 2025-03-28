<template>
	<main>
		<Header />
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
</style>
