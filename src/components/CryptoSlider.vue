<script setup>
import { ref } from 'vue'
import { onMounted } from 'vue'
import { slaiderDataApi } from '@/api/slider-api'
import { nextTick } from 'vue'
// @ts-ignore
import Swiper from 'swiper'
// @ts-ignore
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
onMounted(() => {
	slaiderDataApi().then((apiData) => {
		savedSliderData.value = apiData
		nextTick(() => {
			new Swiper('.crypto-slider', {
				modules: [Navigation, Pagination, Autoplay],
				loop: true,
				slidesPerView: 2,
				spaceBetween: 20,
				autoplay: {
					delay: 6000,
					disableOnInteraction: false,
					pauseOnMouseEnter: true,
				},
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
				},
				pagination: {
					el: '.swiper-pagination',
					clickable: true,
					type: 'bullets',
					dynamicBullets: true,
				},
				scrollbar: {
					el: '.swiper-scrollbar',
				},
				breakpoints: {
					768: {
						slidesPerView: 2,
					},
				},
			})
		})
	})
})

slaiderDataApi().then((apiData) => {
	savedSliderData.value = apiData
})

const savedSliderData = ref({})

const tokenSlider = ref([
	{ id: 'usd-coin', name: 'USDC', icon: '/src/assets/img/lcon-coin/icon-crypto/usdc-icon.png' },
	{
		id: 'bitcoin',
		name: 'Bitcoin',
		icon: '/src/assets/img/lcon-coin/icon-crypto/bitcoin-icon.png',
	},
	{
		id: 'ethereum',
		name: 'Ethereum',
		icon: '/src/assets/img/lcon-coin/icon-crypto/ethereum-icon.png',
	},
	{ id: 'tether', name: 'Tether', icon: '/src/assets/img/lcon-coin/icon-crypto/tether-icon.png' },
	{ id: 'ripple', name: 'XRP', icon: '/src/assets/img/lcon-coin/icon-crypto/xrp-icon.png' },
	{ id: 'binancecoin', name: 'BNB', icon: '/src/assets/img/lcon-coin/icon-crypto/bnb-icon.png' },
	{ id: 'solana', name: 'Solana', icon: '/src/assets/img/lcon-coin/icon-crypto/solana-icon.png' },
])
</script>

<template>
	<div class="swiper crypto-slider">
		<div class="swiper-wrapper">
			<div class="swiper-slide" v-for="value in tokenSlider" :key="value.id">
				<div class="crypto-card">
					<h3>{{ value.name }}</h3>
					<img :src="value.icon" :alt="value.name" />
					<p>{{ savedSliderData[value.id]?.usd || 'N/A' }}</p>
					<span>{{ savedSliderData[value.id]?.usd_24h_change || 'N/A' }}%</span>
				</div>
			</div>
		</div>
		<div class="swiper-pagination"></div>
		<div class="swiper-button-prev"></div>
		<div class="swiper-button-next"></div>
	</div>
</template>
<style></style>
