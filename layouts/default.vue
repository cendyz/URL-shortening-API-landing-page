<template>
	<nav class="lg:container flex justify-between items-center px-[2rem] py-[4rem] z-[1000] relative" ref="navRef">
		<div class="flex items-center gap-x-[3rem]">
			<img :src="logo" alt="shortly logo" class="w-[12rem]" />
			<a
				href="#"
				v-for="(item, index) in linksData.slice(0, 3)"
				:key="index"
				class="hidden md:inline-block capitalize text-neutral-gray-200 hover:text-neutral-gray-400 transition-colors"
				>{{ item }}</a
			>
		</div>
		<div class="hidden md:flex gap-x-[2.5rem] items-center">
			<a
				href="#"
				v-for="(item, index) in linksData.slice(3)"
				:key="index"
				class="hidden md:inline-block capitalize text-neutral-gray-200 last:py-[.6rem] last:px-[2rem] last:bg-primary-cyan last:rounded-full last:text-white last:font-w700 hover:first:text-neutral-gray-400 transition-colors last:transition-opacity hover:last:opacity-65"
				>{{ item }}</a
			>
		</div>
		<button @click="isOpen = !isOpen" class="md:hidden">
			<Icon v-show="!isOpen" name="quill:hamburger" class="text-[2.9rem]"></Icon>
			<Icon v-show="isOpen" name="hugeicons:cancel-01" class="text-[2.9rem]"></Icon>
		</button>
		<Transition>
			<div
				v-if="isOpen && width < 768"
				class="absolute top-[10rem] z-[100] bg-primary-violet left-1/2 translate-x-[-50%] text-white grid gap-y-[2.5rem] w-[calc(100%-3.5rem)] px-[3rem] py-[4rem] text-center rounded-xl">
				<a
					href="#"
					v-for="(item, index) in linksData"
					:key="index"
					class="capitalize text-[1.8rem] font-w700 last:py-[1.2rem] last:px-[3.5rem] last:bg-primary-cyan last:rounded-full"
					:class="index === 2 && 'border-b-[1px] border-neutral-gray-200 pb-[2.5rem]'"
					>{{ item }}</a
				>
			</div>
		</Transition>
	</nav>
</template>

<script setup lang="ts">
import { useWindowSize } from '#imports'
import logo from '/assets/images/logo.svg'
const { width } = useWindowSize()
const isOpen = ref<boolean>(false)
const linksData = ref<string[]>(['features', 'pricing', 'resources', 'login', 'sign up'])

const navRef = ref<null | HTMLElement>(null)

const handleClickOutside = (e: Event): void => {
	if (navRef.value && !navRef.value.contains(e.target as HTMLElement)) {
		isOpen.value = false
	}
}

watch(
	() => isOpen.value,
	newValue => {
		if (newValue) {
			document.addEventListener('click', handleClickOutside)
		} else {
			document.removeEventListener('click', handleClickOutside)
		}
	}
)
</script>

<style lang="scss">
.v-leave-to,
.v-enter-from {
	opacity: 0;
}

.v-leave-active,
.v-enter-active {
	transition: opacity 0.2s;
}
</style>
