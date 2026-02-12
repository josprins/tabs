<script setup>
import { provide, ref } from 'vue'

const props = defineProps({
	justify: {
		type: String,
		validator: (val) => ['start', 'end'].includes(val),
	},
	modelValue: {
		type: [String, Number],
		default: null,
	},
})

const emit = defineEmits(['update:modelValue'])

const activeTabId = ref(props.modelValue)

function selectTab(id) {
	activeTabId.value = id
	emit('update:modelValue', id)
}

function isActive(id) {
	return activeTabId.value === id
}

provide('tabs', { selectTab, isActive })
</script>

<template>
	<div>
		<div class="tabs-wrapper" :class="justify">
			<slot />
		</div>
		<slot name="panels" />
	</div>
</template>

<style scoped>
.tabs-wrapper {
	display: flex;
}

.tabs-wrapper.end {
	justify-content: flex-end;
}

.tabs-wrapper.start {
	justify-content: flex-start;
}
</style>
