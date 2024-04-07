import { ref, computed } from 'vue'

interface Launch {
	id: string
	mission_name: string
	launch_site?: {
		site_id: string
		site_name: string
		site_name_long: string
	}
	launch_date_utc: Date
	details?: string
	rocket: {
		rocket: {
			id: string
			name: string
			active: boolean
			country: string
			description: string
			diameter: {
				feet: number
				meters: number
			}
			first_flight: Date
			height: {
				feet: number
				meters: number
			}
			mass: {
				kg: number
				lb: number
			}
			stages: number
		}
	}
}

export const useSortingByLaunchDate = (launches: { value: Launch[] }) => {
	const sortingMethod = ref<boolean | null>(null)

	const sortedLaunches = computed(() => {
		const sortedLaunchData = [...launches.value]
		sortedLaunchData.sort((a, b) => {
			const dateA = new Date(a.launch_date_utc)
			const dateB = new Date(b.launch_date_utc)
			if (sortingMethod.value === true) {
				return dateA.getTime() - dateB.getTime()
			} else if (sortingMethod.value === false) {
				return dateB.getTime() - dateA.getTime()
			}
			return 0
		})
		return sortedLaunchData
	})

	const sortAscending = () => {
		sortingMethod.value = true
	}

	const sortDescending = () => {
		sortingMethod.value = false
	}

	return {
		sortAscending,
		sortDescending,
		sortedLaunches,
	}
}
