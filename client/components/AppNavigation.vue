<template>
	<v-app-bar
		name="app-bar"
		color="transparent"
		scroll-behavior="hide"
		scroll-threshold="150"
		:elevation="0"
	>
		<v-app-bar-title>
			<NuxtLink to="/" color="black">
				<v-icon icon="mdi-rocket-launch" size="40" />
			</NuxtLink>
		</v-app-bar-title>
		<v-row align="center">
			<NuxtLink
				v-for="item in navigation"
				:key="item.name"
				class="mx-5 text-decoration-none"
				color="black"
				:to="item.href"
			>
				<strong>
					{{ item.name }}
				</strong>
			</NuxtLink>
		</v-row>
		<template #append>
			<v-app-bar-nav-icon />
		</template>
	</v-app-bar>
	<!-- <v-navigation-drawer location="right">
      <v-list>
        <v-list-item title="Home"></v-list-item>
        <v-list-item title="Launches"></v-list-item>
        <v-list-item title="Rockets"></v-list-item>
      </v-list>
    </v-navigation-drawer> -->
</template>

<script setup>
const route = useRoute()
const navigation = [
	{ name: 'Home', href: '/', current: route.name === 'index' },
	{ name: 'Launches', href: '/launches', current: route.name === 'launches' },
	{ name: 'Rockets', href: '/rockets', current: route.name.includes('rockets') },
]
</script>

<style scoped>
.container {
	display: flex;
	justify-content: center;
	background: #000;
}

.navigation-container {
	max-width: 1200px;
	margin: auto;
	height: 100px;
}
</style>
