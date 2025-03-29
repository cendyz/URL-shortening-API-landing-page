<template>
	<section class="px-[2rem]">
		<div class="relative p-[2.5rem] rounded-2xl bg-primary-violet overflow-hidden grid gap-y-[1.5rem]">
			<div class="relative z-[10]">
				<input
					@keyup.enter="shortLink"
					type="text"
					placeholder="Shorten a link here..."
					class="mb-[0.5rem] border-[3px] w-full"
					:class="[shortenStyles, isError ? 'border-secondary-red' : 'border-transparent']"
					v-model.trim="inputData.link" />
				<p v-if="isError" class="text-[1.2rem] text-secondary-red italic">{{ errorMessage }}</p>
			</div>
			<button
				type="button"
				:class="shortenStyles"
				class="capitalize bg-primary-cyan text-white font-w700"
				@click="shortLink">
				shorten it!
			</button>
			<img :src="boostMobile" aria-hidden="true" alt="" class="absolute right-0" />
		</div>
	</section>
</template>

<script setup lang="ts">
import boostMobile from 'assets/images/bg-shorten-mobile.svg'
import useLinkStore from '~/store/linkStore'
const store = useLinkStore()
const linkRegex = /^(https?:\/\/)?([\w-]+\.)+[\w-]{2,}(\/[\w-./?%&=]*)?$/
const isError = ref<boolean>(false)
const inputData = reactive({
	link: '',
})
const errorMessage = ref<string | undefined>()

const firstLink = 'https://www.youtube.com/'
const secondLink = 'https://www.instagram.com/'

const shortLink = (): void => {
	if (!inputData.link) {
		isError.value = true
		errorMessage.value = 'Please add a link'
	} else if (!linkRegex.test(inputData.link)) {
		isError.value = true
		errorMessage.value = 'Please provide a valid link'
	} else {
		isError.value = false
		inputData.link = ''
		store.addLinks(firstLink, secondLink)
	}
}

const shortenStyles: string = 'py-[1rem] px-[1.5rem] block z-[100] rounded-xl'
</script>

<style scoped></style>
