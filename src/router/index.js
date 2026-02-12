import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/views/HomePage.vue'
import DetailsPage from '@/views/DetailsPage.vue'
import AssortmentPage from '@/views/AssortmentPage.vue'
import QuestionnairesPage from '@/views/QuestionnairesPage.vue'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			component: HomePage,
			children: [
				{ path: 'details', name: 'details', component: DetailsPage },
				{ path: 'assortment', name: 'assortment', component: AssortmentPage },
				{ path: 'questionnaires', name: 'questionnaires', component: QuestionnairesPage },
			],
		},
	],
})

export default router
