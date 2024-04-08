<template>
	<v-container fluid class="bg-amber-lighten-5" style="min-height: 700px">
		<BreadCrumbs :items="rocketsBreadcrumbs" />
		<v-row class="justify-start" wrap no-gutters>
			<v-col v-for="rocket in rockets" :key="rocket.id" cols="12" lg="6" class="w-50 pa-5">
				<RocketDetailsCard :rocket="rocket" />
			</v-col>
		</v-row>
	</v-container>
</template>

<script lang="ts" setup>
useHead({
	title: 'Rockets - Apollo Systems',
	meta: [
		{
			name: 'description',
			content: "This is Joseph Miape De Leon's submission to Apollo Systems' Front End Developer Exam",
		},
	],
})

const rocketsBreadcrumbs = [
	{
		title: 'Home',
		disabled: false,
		href: '/',
	},
	{
		title: 'Rockets',
		disabled: true,
		href: '/rockets',
	},
]

const query = gql`
	query getRockets {
		rockets {
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
`
const { data } = useAsyncQuery<{
	rockets: {
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
	}[]
}>(query)
const rockets = computed(() => data.value?.rockets ?? [])
</script>
