<template>
	<main class="grid temples overflow-x-clip">
		<Header class="row-start-1 row-end-3 colOne" />
		<LinkShorter class="row-start-2 row-end-4 colOne mt-[-8.5rem] md:mt-[-6rem]" />
		<FirstSection class="row-start-3 row-end-4 colOne" />
		<SecondSection class="row-start-4 row-end-5" />
		<Footer />
	</main>
</template>

<script setup lang="ts">
import useLinkStore from '~/store/linkStore'
const store = useLinkStore()

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


// const func = (seconds:number):string => {

// console.log(func(86399))
</script>

<style lang="scss">
@use '../assets/sass/reset.scss';

.temples {
	grid-template-columns: 1fr;
	grid-template-rows: 1fr repeat(5, auto);
}

.colOne {
	grid-column: 1/2;
}
</style>
