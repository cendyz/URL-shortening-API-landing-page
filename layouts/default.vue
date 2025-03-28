<template>
	<nav class="container flex justify-between items-center px-[2rem] py-[4rem]">
		<img :src="logo" alt="shortly logo" class="w-[12rem]" />
		<button>
			<Icon name="quill:hamburger" class="text-[2.9rem]"></Icon>
		</button>
		<div class="absolute hidden">
			<a href=""></a>
		</div>
	</nav>
</template>

<script setup lang="ts">
import logo from '/assets/images/logo.svg'
</script>

<style lang="scss"></style>
