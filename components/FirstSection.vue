<template>
	<section class="bg-[#eff1f7] pt-[15rem] pb-[10rem] px-[2rem] text-center">
		<div class="lg:container">
			<div class="mb-[8rem] xl:px-[2rem]" v-if="store.shortedLinks.length">
				<div
					class="bg-white p-[1.5rem] text-left rounded-xl mb-[2rem] lg:flex lg:items-center lg:justify-between"
					v-for="(item, index) in store.shortedLinks"
					:key="index">
					<a href="#" class="pb-[1rem] border-b-[1px] block lg:pb-0 lg:border-none max-w-[40rem]">{{ item.link2 }}</a>
					<div class="lg:grid grids lg:items-center lg:gap-x-[3rem]">
						<a href="#" class="mt-[1.3rem] mb-[1.5rem] block text-primary-cyan">{{ item.link1 }}</a>
						<button
							type="button"
							@click="handleCopy(index)"
							class="py-[1rem] w-full font-w700 text-white rounded-lg lg:py-[.7rem] lg:w-[12rem] transition-opacity"
							:class="
								isCopied && checkIndex === index
									? 'bg-neutral-gray-400 hover:opacity-100 cursor-default pointer-events-none'
									: 'bg-primary-cyan hover:opacity-65'
							">
							{{ index == checkIndex ? copyText : 'Copy' }}
						</button>
					</div>
				</div>
			</div>
			<div class="sm:w-[46rem] sm:mx-auto">
				<h2 class="text-[2.7rem] lg:text-[3.5rem] font-w700 mb-[2rem]">Advanced Statistics</h2>
				<p class="text-neutral-500">
					Track how your links are preforming across the web with our advanced statistics dashboard.
				</p>
			</div>
			<div
				class="grid gap-y-[8rem] mx-[2rem] mt-[8rem] relative before:absolute before:w-[1rem] before:h-full before:bg-primary-cyan before:left-1/2 before:translate-x-[-50%] md:flex md:flex-wrap md:justify-between md:before:rounded-xl xl:flex-nowrap xl:gap-x-[3rem] xl:text-left xl:mt-[10rem] xl:mb-[10rem] xl:before:w-full xl:before:h-[1rem] xl:before:top-1/2">
				<div
					class="bg-neutral-50 rounded-xl pb-[3rem] pt-[8rem] relative sm:w-[40rem] sm:mx-auto md:mx-0 md:w-[45%] xl:w-auto"
					v-for="(item, index) in statsData"
					:key="index"
					:class="index === 2 && 'md:mx-auto'"
					:style="{ transform: width >= 1280 ? `translateY(${Math.round(index * 5)}rem)` : 'translateY(0rem)' }">
					<div
						class="bg-primary-violet p-[2rem] rounded-full absolute top-[-3.9rem] left-1/2 translate-x-[-50%] xl:left-[16%]">
						<img :src="item.img" :alt="item.title" class="block" />
					</div>
					<h3 class="text-[2.2rem] font-w700 mb-[2rem] xl:px-[4rem]">{{ item.title }}</h3>
					<p class="px-[2.5rem] text-[1.36rem] text-neutral-500 leading-[1.8] xl:text-[1.5rem] xl:px-[4rem]">
						{{ item.desc }}
					</p>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
import firstImg from 'assets/images/icon-brand-recognition.svg'
import secondImg from 'assets/images/icon-detailed-records.svg'
import thirdImg from 'assets/images/icon-fully-customizable.svg'
import useLinkStore from '~/store/linkStore'
import { useWindowSize } from '#imports'
const { width } = useWindowSize()

const store = useLinkStore()
const checkIndex = ref(0)
const copyText = ref<string>('Copy')
const isCopied = ref<boolean>(false)

interface Stats {
	img: string
	title: string
	desc: string
}

const handleCopy = async (index: number): Promise<void> => {
	checkIndex.value = index
	await navigator.clipboard.writeText(store.shortedLinks[index].link1)
	copyText.value = 'Copied!'
	isCopied.value = true
	setTimeout(() => {
		isCopied.value = false
		copyText.value = 'Copy'
	}, 2000)
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

<style scoped lang="scss">
@media (min-width: 1024px) {
	.grids {
		grid-template-columns: repeat(2, auto);
	}
}
</style>
