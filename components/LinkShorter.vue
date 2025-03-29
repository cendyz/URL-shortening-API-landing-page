<template>
	<section class="px-[2rem]">
		<div class="relative p-[2.5rem] rounded-2xl bg-primary-violet overflow-hidden grid gap-y-[1.5rem]">
			<input type="text" placeholder="Shorten a link here..." :class="shortenStyles" />
			<button type="button" :class="shortenStyles" class="capitalize bg-primary-cyan text-white font-w700">shorten it!</button>
			<img :src="boostMobile" aria-hidden="true" alt="" class="absolute right-0" />
		</div>
	</section>
</template>

<script setup lang="ts">
import boostMobile from 'assets/images/bg-shorten-mobile.svg'

const shortenStyles: string = 'py-[1rem] px-[1.5rem] block z-[100] rounded-xl'
</script>

<style scoped></style>
