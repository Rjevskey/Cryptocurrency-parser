<script setup>
import { ref, onMounted } from 'vue'
import AvatarDemoProfil from './AvatarDemoProfil.vue'
import CloseButton from './CloseButton.vue'
</script>

<template>
	<div class="welcomeBanner">
		<div class="welcomeBanner__border">
			<CloseButton @close="$emit('close')" />
			<AvatarDemoProfil />
			<h3>Welcome back, Test User!</h3>
		</div>
	</div>
</template>

<style></style>
