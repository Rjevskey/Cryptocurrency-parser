<script setup>
import HeaderComponent from '@/components/HeaderComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
</script>

<template>
	<div class="general-container">
		<HeaderComponent />
		<router-view></router-view>
		<FooterComponent />
	</div>
</template>
<style></style>
