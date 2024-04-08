<template>
	<v-container class="bg-amber-lighten-5" fluid style="min-height: 750px">
		<v-row no-gutters class="justify-center align-center gx-5" style="min-height: 650px">
			<v-col
				class="align-content-center"
				cols="12"
				sm="8"
				md="8"
				lg="6"
				style="height: 100%; width: 100%"
			>
				<v-img
					src="https://cdn.vuetifyjs.com/images/cards/house.jpg"
					class="white--text align-end"
					gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
				/>
			</v-col>
			<v-spacer class="d-none d-lg-flex" />
			<v-col cols="12" md="8" lg="6" class="px-lg-5" style="height: 100%; width: 100%">
				<v-row class="h-50 align-content-end justify-center pt-15">
					<v-col
						class="text-h4 font-weight-light text-left text-brown-darken-3"
						style="min-width: 550px"
					>
						Embrace the Multiplanetary Lifestyle
					</v-col>
				</v-row>
				<v-row class="d-flex flex-column h-50 align-content-center mt-5">
					<v-col class="text-body-1" style="min-width: 550px">
						Explore new worlds, expand human civilization, and redefine what it means to call
						multiple planets home. With advancements in space technology and exploration, the
						dream of living a life spanning across multiple planets is no longer a distant fantasy
						but a tangible reality awaiting discovery.
					</v-col>
					<v-col class="justify-start mt-2">
						<NuxtLink to="/launches">
							<v-btn variant="tonal" elevation="2" color="brown-darken-4" size="large">
								Launches
							</v-btn>
						</NuxtLink>
					</v-col>
				</v-row>
			</v-col>
		</v-row>
	</v-container>
</template>

<script setup>
// SEO Header
useHead({
	title: 'Apollo Systems - Front End Developer Exam',
	meta: [
		{
			name: 'description',
			content: "This is Joseph Miape De Leon's submission to Apollo Systems' Front End Developer Exam",
		},
	],
})
</script>
