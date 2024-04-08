<template>
	<v-app-bar
		name="app-bar"
		color="amber-lighten-5"
		scroll-behavior="hide"
		scroll-threshold="150"
		:elevation="0"
		style="outline: #9f6a00 3px solid"
	>
		<v-app-bar-title>
			<NuxtLink to="/" class="text-brown-darken-4 text-decoration-none font-weight-light text-h4">
				Apollo Systems
			</NuxtLink>
		</v-app-bar-title>
		<v-row align="center">
			<NuxtLink
				v-for="item in navigation"
				:key="item.name"
				:class="{
					'mx-5 text-decoration-none text-brown font-weight-bold': item.current,
					'mx-5 text-decoration-none text-black font-weight-light': !item.current,
				}"
				:to="item.href"
			>
				{{ item.name }}
			</NuxtLink>
		</v-row>
	</v-app-bar>
</template>

<script setup>
const route = useRoute()
const navigation = [
	{ name: 'Home', href: '/', current: route.name === 'index' },
	{ name: 'Launches', href: '/launches', current: route.name === 'launches' },
	{ name: 'Rockets', href: '/rockets', current: route.name.includes('rockets') },
	{ name: 'Favorites', href: '/favorites', current: route.name === 'favorites' },
]
</script>
