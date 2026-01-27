<script setup>
import { ref, onMounted } from 'vue'
import InformBanner from '@/components/InformBanner.vue'
import AvatarDemoProfil from '@/components/AvatarDemoProfil.vue'
const showBanner = ref(false)

onMounted(() => {
	setTimeout(() => {
		showBanner.value = true
	}, 1000)

	setTimeout(() => {
		if (showBanner.value) {
			showBanner.value = false
		}
	}, 6000)
})

function hideBanner() {
	showBanner.value = false
}
</script>

<template>
	<Transition name="banner">
		<InformBanner v-show="showBanner" @close="hideBanner">
			<template #icon-banner>
				<AvatarDemoProfil />
			</template>
			<template #text-banner><h3>WELCOME BACK, TEST USER</h3> </template>
		</InformBanner>
	</Transition>
</template>

<style></style>
