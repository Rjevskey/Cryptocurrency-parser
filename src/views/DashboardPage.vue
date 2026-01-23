<script setup>
import { ref, onMounted } from 'vue'
import WelcomeBanner from '@/components/WelcomeBanner.vue'

const showBanner = ref(false)

onMounted(() => {
	setTimeout(() => {
		showBanner.value = true
	}, 1000)

	setTimeout(() => {
		if (showBanner.value) {
			showBanner.value = false
		}
	}, 6000) // 1000 + 5000
})

function hideBanner() {
	showBanner.value = false
}
</script>

<template>
	<Transition name="banner">
		<WelcomeBanner v-show="showBanner" @close="hideBanner" />
	</Transition>
</template>

<style></style>
