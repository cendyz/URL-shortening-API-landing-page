<template>
	<nav class="container flex justify-between items-center px-[2rem] py-[4rem]" ref="navRef">
		<img :src="logo" alt="shortly logo" class="w-[12rem]" />
		<button @click="isOpen = !isOpen">
			<Icon v-show="!isOpen" name="quill:hamburger" class="text-[2.9rem]"></Icon>
			<Icon v-show="isOpen" name="hugeicons:cancel-01" class="text-[2.9rem]"></Icon>
		</button>
		<Transition>
			<div
				v-if="isOpen"
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
import logo from '/assets/images/logo.svg'
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
