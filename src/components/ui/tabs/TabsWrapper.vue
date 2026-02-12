<script setup>
defineProps({
	justify: {
		type: String,
		validator: val => ['start', 'end'].includes(val)
	}
})
</script>

<template>
<div class="tabs-wrapper" :class="justify">
	<slot />
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
