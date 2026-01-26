<script setup>
import { useRoute } from 'vue-router'
import HeaderComponent from '@/components/HeaderComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'

const route = useRoute()

const isMaintenancePage = route.path === '/maintenance'
</script>

<template>
	<div class="general-container">
		<HeaderComponent v-if="false" />
		<router-view></router-view>
		<FooterComponent v-if="!isMaintenancePage" />
	</div>
</template>

<style></style>
