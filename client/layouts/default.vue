<template>
	<v-layout>
		<v-app>
			<Navigation />
			<v-main>
				<slot />
			</v-main>
			<Footer />
		</v-app>
	</v-layout>
</template>
<script>
export default {
	name: 'DefaultLayout',
}
</script>
