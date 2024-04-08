export const usePaginationStore = defineStore('paginationStore', {
	state: () => ({
		page: 1,
		offset: 0,
		limit: 10,
	}),
	actions: {
		nextPage() {
			this.page++
			this.offset += 10
		},
		previousPage() {
			if (this.page > 1) {
				this.page--
				this.offset -= 10
			}
		},
	},
})
