<template>
	<v-container fluid class="h-100">
		<BreadCrumbs :items="breadcrumbs" />
		<v-row class="d-flex flex-column align-content-center justify-center mt-2">
			<div class="font-weight-medium text-uppercase" style="font-size: 7rem">
				{{ rocketName }}
			</div>
		</v-row>
		<v-row class="my-15 justify-center text-center ga-5" no-gutters>
			<v-col cols="5" md="2">
				<div class="text-h6 text-uppercase text-medium-emphasis" no-gutters>Height</div>
				<div class="text-h5" no-gutters>
					{{ rocketHeightInMeters }} meters
					<span class="text-disabled">/ {{ rocketHeightInFeet }} ft</span>
				</div>
			</v-col>
			<v-col cols="5" md="3">
				<div class="text-h6 text-uppercase text-medium-emphasis" no-gutters>Diameter</div>
				<div class="text-h5" no-gutters>
					{{ rocketDiameterInMeters }} meters
					<span class="text-disabled">/ {{ rocketDiameterInFeet }} ft</span>
				</div>
			</v-col>
			<v-col cols="5" md="3">
				<div class="text-h6 text-uppercase text-medium-emphasis" no-gutters>Mass</div>
				<div class="text-h5" no-gutters>
					{{ new Intl.NumberFormat().format(rocketMassInKg) }} kg
					<span class="text-disabled">
						/ {{ new Intl.NumberFormat().format(rocketMassInLb) }} lb
					</span>
				</div>
			</v-col>
			<v-col cols="5" md="2">
				<div class="text-h6 text-uppercase text-medium-emphasis" no-gutters>Stages</div>
				<div class="text-h5" no-gutters>
					{{ rocketStages }}
				</div>
			</v-col>
		</v-row>
		<v-row class="justify-center" no-gutters>
			<v-col cols="10" sm="8" md="6">
				<v-row class="justify-center" align="center" no-gutters>
					<v-icon class="text-h4" icon="mdi-map-marker" size="large" />
					<span class="text-h4 font-weight-medium">
						{{ rocketCountry }}
					</span>
				</v-row>
				<v-row class="text-h6 text-medium-emphasis justify-center ga-2" no-gutters>
					First Flight:
					{{
						new Date(rocketFirstFlight).toLocaleDateString('en-US', {
							year: 'numeric',
							month: 'long',
							day: 'numeric',
						})
					}}
					<v-chip v-if="rocketId" :color="rocketStatus === 'true' ? 'green' : 'red'">
						{{ rocketStatus === 'true' ? 'Active' : 'Inactive' }}
					</v-chip>
				</v-row>
				<v-row class="text-center text-subtitle-1 mt-5 mb-10" no-gutters>
					{{ rocketDescription }}
				</v-row>
			</v-col>
		</v-row>
	</v-container>
</template>

<script setup>
const route = useRoute()
const {
	rocketId,
	rocketName,
	rocketStatus,
	rocketCountry,
	rocketDescription,
	rocketDiameterInFeet,
	rocketDiameterInMeters,
	rocketFirstFlight,
	rocketHeightInFeet,
	rocketHeightInMeters,
	rocketMassInKg,
	rocketMassInLb,
	rocketStages,
} = route.query

useHead({
	title: `${rocketName} - Apollo Systems`,
	meta: [
		{
			name: 'description',
			content: "This is Joseph Miape De Leon's submission to Apollo Systems' Front End Developer Exam",
		},
	],
})

const breadcrumbs = [
	{
		title: 'Home',
		disabled: false,
		href: '/',
	},
	{
		title: 'Rockets',
		disabled: false,
		href: '/rockets',
	},
	{
		title: `${rocketName}`,
		disabled: true,
	},
]
</script>
