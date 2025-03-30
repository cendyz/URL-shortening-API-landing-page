<template>
	<section class="px-[2rem] py-[10rem] bg-primary-violet text-center relative">
		<h2 class="text-[2.7rem] font-w700 mb-[3rem] text-neutral-50 z-10 relative">Boost your links today</h2>
		<a
			href="#"
			class="capitalize mt-[2.5rem] py-[1.2rem] px-[3.5rem] bg-primary-cyan text-[2rem] font-w700 text-white rounded-full z-10 relative"
			>get started</a
		>
		<picture>
			<source :srcset="deskBg" media="(min-width:768px)">
			<img :src="bg" aria-hidden="true" alt="" class="block absolute h-full top-0 right-0 z-[0]" />
		</picture>
	</section>
</template>

<script setup lang="ts">
import bg from 'assets/images/bg-boost-mobile.svg'
import deskBg from 'assets/images/bg-boost-desktop.svg'
</script>

<style scoped></style>
