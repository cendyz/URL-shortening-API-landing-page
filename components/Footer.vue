<template>
	<footer>
		<img src="" alt="logo" />
		<div>
			<div>
				<h4></h4>
				<a href=""></a>
			</div>
		</div>
		<div>
			<img src="" alt="fb icon" />
		</div>
	</footer>
</template>

<script setup lang="ts"></script>

<style scoped></style>
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