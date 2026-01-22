<script setup>
import { ref, onMounted } from 'vue'
import WelcomeBanner from '@/components/WelcomeBanner.vue'
onMounted(() => {
	setTimeout(() => {
		showBanner.value = true
	}, 1000)
})

const showBanner = ref()
</script>

<template>
	<Transition name="banner">
		<WelcomeBanner v-if="showBanner" @close="showBanner.value = false" />
	</Transition>
</template>

<style></style>
