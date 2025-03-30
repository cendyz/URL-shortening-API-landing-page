<template>
	<section class="bg-neutral-100 pt-[15rem] pb-[10rem] px-[2rem] text-center">
		<div class="mb-[8rem]" v-if="store.shortedLinks.length">
			<div
				class="bg-neutral-50 p-[1.5rem] text-left rounded-xl mb-[2rem]"
				v-for="(item, index) in store.shortedLinks"
				:key="index">
				<a href="#" class="pb-[1rem] border-b-[1px] block">{{ item.link1 }}</a>
				<a href="#" class="mt-[1.3rem] mb-[1.5rem] block text-primary-cyan">{{ item.link2 }}</a>
				<button class="py-[1rem] w-full bg-primary-cyan font-w700 text-white rounded-lg">Copy</button>
			</div>
		</div>
		<div class="sm:w-[39rem] sm:mx-auto">
			<h2 class="text-[2.7rem] font-w700 mb-[2rem]">Advanced Statistics</h2>
			<p class="text-neutral-500">
				Track how your links are preforming across the web with our advanced statistics dashboard.
			</p>
		</div>
		<div
			class="grid gap-y-[8rem] px-[2rem] mt-[8rem] relative before:absolute before:w-[1rem] before:h-full before:bg-primary-cyan before:left-1/2 before:translate-x-[-50%]">
			<div
				class="bg-neutral-50 rounded-xl pb-[3rem] pt-[8rem] relative sm:w-[40rem] sm:mx-auto"
				v-for="(item, index) in statsData"
				:key="index">
				<div class="bg-primary-violet p-[2rem] rounded-full absolute top-[-3.9rem] left-1/2 translate-x-[-50%]">
					<img :src="item.img" :alt="item.title" class="block" />
				</div>
				<h3 class="text-[2.2rem] font-w700 mb-[2rem]">{{ item.title }}</h3>
				<p class="px-[2.5rem] text-[1.36rem] text-neutral-500 leading-[1.8]">
					{{ item.desc }}
				</p>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
import firstImg from 'assets/images/icon-brand-recognition.svg'
import secondImg from 'assets/images/icon-detailed-records.svg'
import thirdImg from 'assets/images/icon-fully-customizable.svg'
import useLinkStore from '~/store/linkStore'

const store = useLinkStore()

interface Stats {
	img: string
	title: string
	desc: string
}

const statsData = ref<Stats[]>([
	{
		img: firstImg,
		title: 'Brand Recognition',
		desc: 'Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.',
	},
	{
		img: secondImg,
		title: 'Detailed Records',
		desc: 'Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.',
	},
	{
		img: thirdImg,
		title: 'Fully Customizable',
		desc: 'Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.',
	},
])
</script>

<style scoped></style>
