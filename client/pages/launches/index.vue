<template>
	<v-container fluid class="bg-amber-lighten-5" style="min-height: 700px">
		<v-container fluid>
			<div class="d-flex flex-column flex-md-row justify-space-between" no-gutters>
				<div class="d-flex align-center justify-center justify-md-start ga-2">
					<h1>SpaceX Launches</h1>
					<v-chip class="d-none d-lg-flex text-center" color="blue">
						Data from SpaceX GraphQL
					</v-chip>
				</div>
				<div class="d-flex flex-wrap align-center justify-center justify-md-end">
					<v-select
						v-model="selectedYear"
						class="pt-5 mr-2"
						clearable
						:items="availableYears"
						density="compact"
						label="Filter By Year"
						style="width: 150px; max-width: 200px"
					/>
					<div class="d-flex ga-2">
						<v-btn
							prepend-icon="mdi-sort-numeric-ascending"
							variant="tonal"
							style="height: 40px; width: 120px"
							@click="sortAscending"
						>
							Sort Asc
						</v-btn>
						<v-btn
							prepend-icon="mdi-sort-numeric-descending"
							variant="tonal"
							style="height: 40px; width: 120px"
							@click="sortDescending"
						>
							Sort Desc
						</v-btn>
					</div>
				</div>
			</div>
			<v-table class="bg-amber-lighten-5" style="height: 580px">
				<thead>
					<tr>
						<th class="text-left">Mission Name</th>
						<th class="text-left">Launch Date</th>
						<th class="text-left">Site</th>
						<th class="text-left">Rocket</th>
						<th class="text-left">Details</th>
						<th class="text-left">Actions</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="launch in sortedLaunches" :key="launch.id">
						<td>{{ launch.mission_name }}</td>
						<td>
							{{
								new Date(launch.launch_date_utc).toLocaleDateString('en-US', {
									year: 'numeric',
									month: 'long',
									day: 'numeric',
								})
							}}
						</td>
						<td>{{ launch.launch_site ?? 'N/A' }}</td>
						<td>
							<NuxtLink
								class="text-decoration-none"
								:to="{
									path: `/rockets/${launch.rocket.rocket.name.replace(/\s+/g, '-')}`,
									query: {
										rocketId: launch.rocket.rocket.id,
										rocketName: launch.rocket.rocket.name,
										rocketStatus: launch.rocket.rocket.active,
										rocketCountry: launch.rocket.rocket.country,
										rocketDescription: launch.rocket.rocket.description,
										rocketDiameterInFeet: launch.rocket.rocket.diameter.feet,
										rocketDiameterInMeters: launch.rocket.rocket.diameter.meters,
										rocketFirstFlight: launch.rocket.rocket.first_flight,
										rocketHeightInFeet: launch.rocket.rocket.height.feet,
										rocketHeightInMeters: launch.rocket.rocket.height.meters,
										rocketMassInKg: launch.rocket.rocket.mass.kg,
										rocketMassInLb: launch.rocket.rocket.mass.lb,
										rocketStages: launch.rocket.rocket.stages,
									},
								}"
							>
								{{ launch.rocket.rocket.name }}
							</NuxtLink>
						</td>

						<td>{{ launch.details ?? 'No details available' }}</td>
						<td>
							<v-btn
								size="x-small"
								icon="mdi-star"
								:elevation="favoritesStore.favorites.has(launch.rocket.rocket.name) ? 0 : 1"
								:class="
									favoritesStore.favorites.has(launch.rocket.rocket.name)
										? 'text-yellow-accent-4'
										: 'text-black'
								"
								color="transparent"
								@click="favoritesStore.toggleFavorites(launch.rocket.rocket.name)"
							/>
						</td>
					</tr>
				</tbody>
			</v-table>
			<div class="d-flex justify-center align-content-center mt-5" no-gutters>
				<v-btn variant="tonal" elevation="1" @click="loadMore">Load More</v-btn>
			</div>
		</v-container>
	</v-container>
</template>
<script lang="ts" setup>
// SEO Header
useHead({
	title: 'Launches - Apollo Systems',
	meta: [
		{
			name: 'description',
			content: "This is Joseph Miape De Leon's submission to Apollo Systems' Front End Developer Exam",
		},
	],
})

// Access useFavoriteStore
const favoritesStore = useFavoriteStore()

// Access usePaginationStore
const paginationStore = usePaginationStore()
const paginationLimit = paginationStore.limit
let paginationOffset = paginationStore.offset

// GraphQL API Query
const query = gql`
	query getLaunches($limit: Int, $offset: Int) {
		launches(limit: $limit, offset: $offset) {
			id
			mission_name
			launch_site {
				site_id
				site_name
				site_name_long
			}
			launch_date_utc
			details
			rocket {
				rocket {
					active
					country
					description
					diameter {
						feet
						meters
					}
					first_flight
					height {
						feet
						meters
					}
					id
					mass {
						kg
						lb
					}
					name
					stages
				}
			}
		}
	}
`
const { result, fetchMore } = useQuery(query, () => ({
	limit: paginationLimit,
	offset: paginationOffset,
}))

function loadMore() {
	paginationOffset += 10
	fetchMore({
		variables: {
			offset: paginationOffset,
		},
		updateQuery: (previousResult, { fetchMoreResult }) => {
			const newlyFetchedLaunches = fetchMoreResult.launches
			return {
				launches: [...previousResult.launches, ...newlyFetchedLaunches],
			}
		},
	})
}

const launches = computed(() => result.value?.launches ?? [])

// Filtering Composable
const { filteredLaunches, selectedYear, availableYears } = useFilterDateByYear(launches)
// Sorting Composable
const { sortedLaunches, sortAscending, sortDescending } = useSortingByLaunchDate(filteredLaunches)
</script>
