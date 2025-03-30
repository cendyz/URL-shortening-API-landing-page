<template>
	<section class="px-[2rem] sm:w-[60rem] sm:mx-auto md:w-full lg:container">
		<div class="relative p-[2.5rem] md:p-[3.5rem] rounded-2xl bg-primary-violet overflow-hidden">
			<div class="grid gap-y-[1.5rem] md:flex md:justify-between">
				<input
					@keyup.enter="shortLink"
					type="text"
					placeholder="Shorten a link here..."
					class="mb-[0.5rem] w-full relative z-[10] border-[3px] md:mb-0"
					:class="[shortenStyles, isError ? 'border-secondary-red' : 'border-transparent']"
					v-model.trim="inputData.link" />
				<p v-if="isError && width < 768" class="text-[1.2rem] text-secondary-red italic z-[1000] relative">
					{{ errorMessage }}
				</p>
				<button
					type="button"
					:class="shortenStyles"
					class="capitalize bg-primary-cyan text-white font-w700 md:px-[3rem] md:py-[1.35rem] md:w-[18rem] md:ml-[2rem]"
					@click="shortLink">
					shorten it!
				</button>
			</div>
			<p v-if="isError && width >= 768" class="text-[1.2rem] text-secondary-red italic z-[1000] relative mt-[.5rem]">
				{{ errorMessage }}
			</p>
			<picture>
				<source :srcset="boostDesktop" media="(min-width: 768px)" />
				<img :src="boostMobile" aria-hidden="true" alt="" class="absolute right-0 top-0 h-full" />
			</picture>
		</div>
	</section>
</template>

<script setup lang="ts">
import { useWindowSize } from '#imports'
import boostMobile from 'assets/images/bg-shorten-mobile.svg'
import boostDesktop from 'assets/images/bg-shorten-desktop.svg'
import useLinkStore from '~/store/linkStore'
const { width } = useWindowSize()
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

<style scoped lang="scss"></style>
