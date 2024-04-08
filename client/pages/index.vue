<template>
	<v-container class="h-screen bg-amber-lighten-5" fluid>
		<v-row no-gutters class="justify-center" style="height: 600px">
			<v-col class="" cols="4">
				<v-img />
			</v-col>
			<v-col class="" cols="8">
				<v-row class="h-50 align-content-end justify-center pt-15">
					<div class="text-h2 font-weight-light text-brown-darken-3" style="width: 700px">
						Embrace the Multiplanetary Lifestyle
					</div>
				</v-row>
				<v-row class="d-flex flex-column h-50 align-content-center mt-10">
					<div class="text-body-1" style="width: 700px">
						Explore new worlds, expand human civilization, and redefine what it means to call
						multiple planets home. With advancements in space technology and exploration, the
						dream of living a life spanning across multiple planets is no longer a distant fantasy
						but a tangible reality awaiting discovery.
					</div>
					<div class="justify-start mt-5">
						<NuxtLink to="/launches">
							<v-btn variant="tonal" elevation="2" color="brown-darken-4" size="large">
								Launches
							</v-btn>
						</NuxtLink>
					</div>
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
