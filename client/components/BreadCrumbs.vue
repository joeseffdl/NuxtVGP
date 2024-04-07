<template>
	<v-breadcrumbs :items="items" class="text-subtitle-1">
		<template #prepend>
			<v-icon icon="mdi-rocket" size="small" />
		</template>
	</v-breadcrumbs>
</template>

<script lang="ts" setup>
defineProps<{
	items: {
		title: string
		disabled: boolean
		href: string
	}[]
}>()
</script>
