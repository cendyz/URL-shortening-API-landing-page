<template>
	<footer class="bg-neutral-gray-400 text-center py-[6rem] px-[2rem]">
		<div class="container lg:grid grids">
			<img :src="logo" alt="logo shortly" class="filt" />
			<div class="mt-[5rem] grid gap-y-[4rem] lg:grid-cols-3 lg:gap-x-[4rem] lg:mx-auto lg:mt-0">
				<div v-for="(item, index) in footerData" :key="index" class="grid text-neutral-50 capitalize lg:text-left">
					<h4 class="text-[1.7rem] font-w700 mb-[2.5rem]">{{ item.title }}</h4>
					<a
						href="#"
						v-for="(item2, index2) in item.links"
						:key="index2"
						class="pb-[1rem] text-neutral-gray-100 lg:w-max">
						{{ item2 }}</a
					>
				</div>
			</div>
			<div class="mt-[4rem] flex gap-x-[2rem] justify-center lg:mt-0">
				<Icon
					:name="item.img"
					:alt="`${item.alt}`"
					v-for="(item, index) in iconsData"
					:key="index"
					class="text-white text-[2.7rem]" />
			</div>
		</div>
	</footer>
</template>

<script setup lang="ts">
import logo from 'assets/images/logo.svg'

interface Links {
	title: string
	links: string[]
}

interface Icons {
	img: string
	alt: string
}

const footerData = ref<Links[]>([
	{
		title: 'Features',
		links: ['Link Shortening', 'brandend links', 'analytics'],
	},
	{
		title: 'resources',
		links: ['blog', 'developers', 'support'],
	},
	{
		title: 'company',
		links: ['about', 'our team', 'careers', 'contact'],
	},
])

const iconsData = ref<Icons[]>([
	{
		img: 'f7:logo-facebook',
		alt: 'facebook',
	},
	{
		img: 'mdi:twitter',
		alt: 'twitter',
	},
	{
		img: 'bi:pinterest',
		alt: 'pinterest',
	},
	{
		img: 'akar-icons:instagram-fill',
		alt: 'instagram',
	},
])
</script>

<style scoped>
.filt {
	filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(55deg) brightness(108%) contrast(101%);
}

.grids {
	grid-template-columns: repeat(3, auto);
}
</style>
<!-- export default defineEventHandler(async (event) => {
    try {
      const body = await readBody(event)
      
      if (!body?.url) {
        return { error: "No URL provided" }
      }
  
      const response = await $fetch<{ result_url?: string; error?: string }>(
        "https://cleanuri.com/api/v1/shorten",
        {
          method: "POST",
          body: new URLSearchParams({ url: body.url }),
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
        
        }
      )
  
      return response
    } catch (error) {
      return { error: "Failed to shorten the URL" }
    }
  }) -->
