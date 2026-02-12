<script setup>
defineProps({
	isActive: {
		type: Boolean,
		default: false,
	},
	isDisabled: {
		type: Boolean,
		default: false,
	},
	label: {
		type: String,
		required: true
	},
})
</script>

<template>
	<button :class="{ active: isActive, disabled: isDisabled }">
		{{ label }}
	</button>
</template>

<style scoped>
button {

}

button.active {

}

button.disabled {

}
</style>
