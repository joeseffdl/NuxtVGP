<template>
	<v-card
		class="v-card--relative mx-auto"
		height="500"
		:color="rocket.active ? 'teal-lighten-4' : 'red-lighten-4'"
	>
		<v-row class="h-25 justify-space-between pt-10 mx-10" no-gutters>
			<v-icon class="text-center" icon="mdi-rocket" size="52" />
			<div class="text-h6 mt-1">
				{{
					new Date(rocket.first_flight).toLocaleDateString('en-US', {
						year: 'numeric',
						month: 'long',
						day: 'numeric',
					})
				}}
			</div>
		</v-row>
		<v-row class="d-flex flex-column h-50 mx-10" align="start" justify="center" no-gutters>
			<h2 class="text-h2 font-weight-bold">{{ rocket.name }}</h2>
			<h5 class="text-h5 mt-1 font-weight-medium text-medium-emphasis">
				{{ rocket.country }}
			</h5>
		</v-row>
		<v-row class="h-25 mx-10 mt-10 align-content-start justify-space-between" no-gutters>
			<v-icon
				size="50"
				icon="mdi-star"
				:color="favoritesStore.favorites.has(rocket.name) && 'amber-accent-4'"
				@click="favoritesStore.toggleFavorites(rocket.name)"
			/>
			<v-btn
				size="large"
				variant="elevated"
				:color="rocket.active ? 'teal-lighten-2' : 'red-lighten-2'"
				:disabled="reveal"
				@click="reveal = true"
			>
				More Details
			</v-btn>
		</v-row>

		<v-expand-transition>
			<v-card v-if="reveal" class="v-card-absolute bg-grey-lighten-4">
				<v-row class="h-25 d-flex justify-end mx-5">
					<v-card-actions>
						<v-btn color="red-accent-4" variant="text" @click="reveal = false">Close</v-btn>
					</v-card-actions>
				</v-row>
				<v-row class="h-50 d-flex justify-center align-center">
					<v-col cols="10">
						<v-card-text class="text-center text-h6">
							<p>{{ rocket.description }}</p>
						</v-card-text>
					</v-col>
				</v-row>
				<v-row class="h-25 d-flex justify-center align-start">
					<v-card-actions>
						<NuxtLink
							:to="{
								path: `/rockets/${rocket.name.replace(/\s+/g, '-')}`,
								query: {
									rocketId: rocket.id,
									rocketName: rocket.name,
									rocketStatus: rocket.active,
									rocketCountry: rocket.country,
									rocketDescription: rocket.description,
									rocketDiameterInFeet: rocket.diameter.feet,
									rocketDiameterInMeters: rocket.diameter.meters,
									rocketFirstFlight: rocket.first_flight,
									rocketHeightInFeet: rocket.height.feet,
									rocketHeightInMeters: rocket.height.meters,
									rocketMassInKg: rocket.mass.kg,
									rocketMassInLb: rocket.mass.lb,
									rocketStages: rocket.stages,
								},
							}"
						>
							<v-btn size="x-large" color="cyan-accent-4" variant="tonal">Specifications</v-btn>
						</NuxtLink>
					</v-card-actions>
				</v-row>
			</v-card>
		</v-expand-transition>
	</v-card>
</template>

<script lang="ts" setup>
defineProps<{
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
}>()

const reveal = ref(false)
const favoritesStore = useFavoriteStore()
</script>

<style>
.v-card-relative {
	position: relative;
}

.v-card-absolute {
	top: 0;
	opacity: 1 !important;
	position: absolute;
	width: 100%;
	height: 100%;
}
</style>
