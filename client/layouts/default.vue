<template>
	<v-layout>
		<v-app>
			<AppNavigation />
			<v-main>
				<slot />
			</v-main>
			<AppFooter />
		</v-app>
	</v-layout>
</template>
<script>
export default {
	name: 'DefaultLayout',
}
</script>
