<template>
	<section class="px-[2rem] py-[10rem] bg-primary-violet text-center relative">
		<div class='translate-y-[-2rem] relative z-[1000]'>
			<h2 class="text-[2.7rem] font-w700 mb-[3rem] text-neutral-50 z-10 relative lg:text-[3.5rem]">
				Boost your links today
			</h2>
			<a
				href="#"
				class="capitalize mt-[2.5rem] py-[1.2rem] px-[3.5rem] bg-primary-cyan text-[2rem] font-w700 text-white rounded-full z-10 relative before:absolute before:left-0 before:top-0 block w-fit mx-auto before:w-full before:h-full before:bg-white overflow-hidden before:opacity-0 hover:before:opacity-30 before:transition-opacity"
				>get started</a
			>
		</div>
			<picture>
				<source :srcset="deskBg" media="(min-width:768px)" />
				<img :src="bg" aria-hidden="true" alt="" class="block absolute h-full top-0 right-0 z-[0]" />
			</picture>
	</section>
</template>

<script setup lang="ts">
import bg from 'assets/images/bg-boost-mobile.svg'
import deskBg from 'assets/images/bg-boost-desktop.svg'
</script>

<style scoped></style>
