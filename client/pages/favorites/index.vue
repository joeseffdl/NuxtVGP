<template>
	<v-container fluid>
		<BreadCrumbs :items="favoritesBreadcrumbs" />
		<v-row v-if="!showFavoritesUI" align="center" justify="center" style="height: 525px">
			<h3>You do not have any favorites at the moment.</h3>
		</v-row>
		<v-container v-if="showFavoritesUI">
			<v-row class="mb-5 px-2" justify="end" no-gutters>
				<v-btn variant="tonal" @click="favoritesStore.clearFavorites">Clear Favorites</v-btn>
			</v-row>
			<v-row no-gutters>
				<v-col
					v-for="favorite in favoritesStore.favorites"
					:key="favorite"
					cols="12"
					md="6"
					class="pa-2"
				>
					<FavoriteDetails :favorite="favorite" />
				</v-col>
			</v-row>
		</v-container>
	</v-container>
</template>
<script lang="ts" setup>
useHead({
	title: 'Favorites - Apollo Systems',
	meta: [
		{
			name: 'description',
			content: "This is Joseph Miape De Leon's submission to Apollo Systems' Front End Developer Exam",
		},
	],
})

const favoritesBreadcrumbs = [
	{
		title: 'Home',
		disabled: false,
		href: '/',
	},
	{
		title: 'Favorites',
		disabled: true,
		href: '/favorites',
	},
]

const favoritesStore = useFavoriteStore()
const showFavoritesUI = computed(() => {
	return favoritesStore.favorites.size > 0
})
</script>
