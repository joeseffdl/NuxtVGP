<template>
	<v-footer name="footer" color="black" class="footer-container py-5 text-center text-subtitle-2">
		<v-row justify="center" no-gutters>
			<div class="mx-2">
				{{ new Date().getFullYear() }}
			</div>
			<NuxtLink v-for="item in footer" :key="item.name" class="mx-2" :to="item.href">
				<strong>{{ item.name }}</strong>
			</NuxtLink>
		</v-row>
	</v-footer>
</template>

<script setup>
const footer = [
	{ name: 'GitHub', href: 'https://github.com/joeseffdl' },
	{ name: 'LinkedIn', href: 'https://www.linkedin.com/in/joeseffdl/' },
]
</script>
<style scoped>
.footer-container {
	max-height: 60px;
}
</style>
