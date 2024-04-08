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
			<NuxtLink to="/" style="text-decoration: none">
				<span class="d-none d-md-flex text-brown-darken-4 font-weight-light text-h4">
					Apollo Systems
				</span>
				<div>
					<v-icon
						class="d-md-none text-decoration-none text-h4"
						color="brown-lighten-1"
						icon="mdi-rocket-launch"
					/>
				</div>
			</NuxtLink>
		</v-app-bar-title>
		<v-row align="center">
			<NuxtLink
				v-for="item in navigation"
				:key="item.name"
				:to="item.href"
				class="mx-5 text-black text-decoration-none font-weight-light"
				:class="{ 'text-brown font-weight-bold': $route.path === item.href }"
				exact
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
