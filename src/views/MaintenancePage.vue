<script setup>
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import ButtonComponent from '@/components/ButtonComponent.vue'
import InformBanner from '@/components/InformBanner.vue'

const router = useRouter()
const showBanner = ref(false)

function goBack() {
	router.back()
}

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
	<div class="maintenance-page">
		<div class="maintenance">
			<Transition name="banner">
				<InformBanner v-show="showBanner" @close="hideBanner">
					<template #icon-banner>
						<div class="banner__icon">
							<img
								src="/img/maintenance-img/Maintenance-banner-byDEZ.jpg"
								alt=""
								class="banner__icon--img"
							/>
						</div>
					</template>
					<template #text-banner>
						<h3>Opsssssssssssss.....!</h3>
					</template>
				</InformBanner>
			</Transition>
			<div class="maintenance-image">
				<img
					src="/img/maintenance-img/Maintenance-back-byDEZ.jpg"
					alt=""
					class="maintenance-image_set"
				/>
			</div>
			<div class="maintenance-border">
				<h1>Technical work</h1>
			</div>
			<div class="maintenance-button">
				<ButtonComponent text="GO BACK!" @click="goBack()" />
			</div>
		</div>
	</div>
</template>

<style></style>
