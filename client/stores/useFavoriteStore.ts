export const useFavoriteStore = defineStore('favoriteStore', {
	state: () => ({
		favorites: new Set<string>(),
	}),
	actions: {
		toggleFavorites(favorite: string) {
			this.favorites.has(favorite) ? this.favorites.delete(favorite) : this.favorites.add(favorite)
		},
		clearFavorites() {
			this.favorites.clear()
		},
	},
})
