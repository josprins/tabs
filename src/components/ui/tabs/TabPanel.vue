<script setup>
import { inject } from 'vue'

const tabs = inject('tabs')

const props = defineProps({
	id: {
		type: [String, Number],
		required: true,
	},
})

function isVisible() {
	return tabs.isActive(props.id)
}
</script>

<template>
	<div v-if="isVisible()" class="tab-panel">
		<slot />
	</div>
</template>

<style scoped>
.tab-panel {
	padding: var(--panel-padding);
	background-color: var(--panel-bg);
	border: var(--border-width, 1px) solid var(--panel-border);
	border-radius: var(--panel-radius);
}
</style>
