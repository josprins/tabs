<script setup>
import { inject } from 'vue'

const tabs = inject('tabs')

const props = defineProps({
	id: {
		type: [String, Number],
		required: true,
	},
	isDisabled: {
		type: Boolean,
		default: false,
	},
	label: {
		type: String,
		required: true,
	},
	isRouterLink: {
		type: Boolean,
		default: false,
	},
	linkParams: {
		type: Object,
		default: () => ({}),
	},
})

function handleSelect() {
	if (!props.isDisabled) {
		tabs.selectTab(props.id)
	}
}
</script>

<template>
	<div>
		<router-link
			v-if="isRouterLink"
			:to="linkParams"
			:class="{ active: tabs.isActive(id), disabled: isDisabled }"
			@click="handleSelect"
		>
			{{ label }}
		</router-link>
		<button
			v-else
			:class="{ active: tabs.isActive(id), disabled: isDisabled }"
			:disabled="isDisabled"
			@click="handleSelect"
		>
			{{ label }}
		</button>
	</div>
</template>

<style scoped>
button {
}

button.active {
	background-color: var(--accent);
}

button.disabled {
}
</style>
