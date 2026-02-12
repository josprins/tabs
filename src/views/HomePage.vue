<script setup>
import { onMounted, ref } from 'vue'

import TabsWrapper from '@/components/ui/tabs/TabsWrapper.vue'
import TabComponent from '@/components/ui/tabs/TabComponent.vue'

const tabsArray = ref([])

onMounted(() => {

	// I do this here because in a real world situation you want fetch that data here or its passed down as a prop
	tabsArray.value = [
		{
			id: 1,
			label: 'Details',
			icon: 'myIcon',
			isActive: true,
			isDisabled: false,
			suffix: 0
		},
		{
			id: 2,
			label: 'Assortment',
			icon: 'myIcon',
			isActive: false,
			isDisabled: false,
			suffix: 0
		},
		{
			id: 3,
			label: 'Questionnaires',
			icon: 'myIcon',
			isActive: false,
			isDisabled: false,
			suffix: 0
		},
		{
			id: 4,
			label: 'Certi',
			icon: 'myIcon',
			isActive: false,
			isDisabled: true,
			suffix: 0
		},
	]
})
</script>

<template>
	<div>
		<tabs-wrapper justify="start">
			<tab-component
				v-for="tab in tabsArray"
				:key="tab.id"
				:label="tab.label"
				:is-active="tab.isActive"
				:is-disabled="tab.isDisabled"
			/>
		</tabs-wrapper>
	</div>
</template>

<style scoped></style>
