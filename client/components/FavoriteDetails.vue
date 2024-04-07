<template>
	<v-card class="mx-auto bg-grey-lighten-4">
		<v-container fluid>
			<v-row dense>
				<v-col cols="7">
					<v-img
						src="https://cdn.vuetifyjs.com/images/cards/plane.jpg"
						class="white--text align-end"
						gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
					/>
				</v-col>
				<v-col class="align-content-center">
					<div class="text-h4 text-center">{{ favorite }}</div>
				</v-col>
			</v-row>
		</v-container>
	</v-card>
</template>

<script lang="ts" setup>
defineProps(['favorite'])
</script>
