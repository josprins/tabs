<script setup>
import { reactive, ref } from 'vue'

import TabsWrapper from '@/components/ui/tabs/TabsWrapper.vue'
import TabComponent from '@/components/ui/tabs/TabComponent.vue'
import TabPanel from '@/components/ui/tabs/TabPanel.vue'

const tabsArray = reactive([
	{
		id: 1,
		label: 'Details',
		icon: 'myIcon',
		isDisabled: false,
		suffix: 0,
	},
	{
		id: 2,
		label: 'Assortment',
		icon: 'myIcon',
		isDisabled: false,
		suffix: 0,
	},
	{
		id: 3,
		label: 'Questionnaires',
		icon: 'myIcon',
		isDisabled: false,
		suffix: 0,
	},
	{
		id: 4,
		label: 'Certi',
		icon: 'myIcon',
		isDisabled: true,
		suffix: 0,
	},
])

// const routerTabsArray = ref([
// 	{
// 		id: 'details',
// 		label: 'Details',
// 		isDisabled: false,
// 		linkParams: { name: 'details' },
// 	},
// 	{
// 		id: 'assortment',
// 		label: 'Assortment',
// 		isDisabled: false,
// 		linkParams: { name: 'assortment' },
// 	},
// 	{
// 		id: 'questionnaires',
// 		label: 'Questionnaires',
// 		isDisabled: false,
// 		linkParams: { name: 'questionnaires' },
// 	},
// ])
</script>

<template>
	<div>
		<tabs-wrapper justify="start" :model-value="1">
			<tab-component
				v-for="tab in tabsArray"
				:key="tab.id"
				:id="tab.id"
				:label="tab.label"
				:is-disabled="tab.isDisabled"
			/>
			<template #panels>
				<tab-panel :id="1">
					<p>Details panel content</p>
				</tab-panel>
				<tab-panel :id="2">
					<p>Assortment panel content</p>
				</tab-panel>
				<tab-panel :id="3">
					<p>Questionnaires panel content</p>
				</tab-panel>
				<tab-panel :id="4">
					<p>Certi panel content</p>
				</tab-panel>
			</template>
		</tabs-wrapper>

<!--		<h2>Router Tabs</h2>-->
<!--		<tabs-wrapper justify="start" model-value="details">-->
<!--			<tab-component-->
<!--				v-for="tab in routerTabsArray"-->
<!--				:key="tab.id"-->
<!--				:id="tab.id"-->
<!--				:label="tab.label"-->
<!--				:is-disabled="tab.isDisabled"-->
<!--				:is-router-link="true"-->
<!--				:link-params="tab.linkParams"-->
<!--			/>-->
<!--		</tabs-wrapper>-->
<!--		<router-view />-->
	</div>
</template>

<style scoped></style>
