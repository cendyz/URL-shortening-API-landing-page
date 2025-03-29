<template>
	<section class="bg-neutral-100 pt-[15rem] pb-[10rem] px-[2rem] text-center">
		<div>
			<h2 class="text-[2.7rem] font-w700 mb-[2rem]">Advanced Statistics</h2>
			<p class="text-neutral-500">
				Track how your links are preforming across the web with our advanced statistics dashboard.
			</p>
		</div>
		<div
			class="grid gap-y-[8rem] px-[2rem] mt-[8rem] relative before:absolute before:w-[1rem] before:h-full before:bg-primary-cyan before:left-1/2 before:translate-x-[-50%]">
			<div
				class="bg-neutral-50 rounded-xl pb-[3rem] pt-[8rem] relative"
				v-for="(item, index) in statsData"
				:key="index">
				<div class="bg-primary-violet p-[2rem] rounded-full absolute top-[-3.6rem] left-1/2 translate-x-[-50%]">
					<img :src="item.img" :alt="item.title" class="block" />
				</div>
				<h3 class="text-[2.2rem] font-w700 mb-[2rem]">{{ item.title }}</h3>
				<p class="px-[2.5rem] text-[1.36rem] text-neutral-500 leading-[1.8]">{{ item.desc }}</p>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
import firstImg from 'assets/images/icon-brand-recognition.svg'
import secondImg from 'assets/images/icon-detailed-records.svg'
import thirdImg from 'assets/images/icon-fully-customizable.svg'

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
