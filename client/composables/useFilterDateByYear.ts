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

export const useFilterDateByYear = (launches: { value: Launch[] }) => {
	const selectedYear = ref<number | null>(null)
	const availableYears = computed(() => {
		const years = new Set<number>()
		launches.value.forEach((launch: Launch) => {
			const launchYear = new Date(launch.launch_date_utc).getFullYear()
			years.add(launchYear)
		})
		return Array.from(years).sort()
	})

	function setYear(year: number | null) {
		selectedYear.value = year
	}

	const filteredLaunches = computed(() => {
		if (!selectedYear.value) {
			return launches.value
		} else {
			return launches.value.filter((launch: Launch) => {
				const launchYear = new Date(launch.launch_date_utc).getFullYear()
				return launchYear === (selectedYear.value as number)
			})
		}
	})

	return {
		filteredLaunches,
		selectedYear,
		availableYears,
		setYear,
	}
}
