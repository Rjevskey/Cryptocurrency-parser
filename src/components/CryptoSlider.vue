<script setup>
import { ref, onMounted, nextTick } from 'vue'
import { slaiderDataApi } from '@/api/slider-api'
import Swiper from 'swiper'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'

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

const formatPrice = (price) => {
	if (!price) return '$N/A'
	return `$${price.toFixed(2)}`
}

const formatChange = (change) => {
	if (!change) return 'N/A%'
	return `${Math.abs(change).toFixed(2)}%`
}

const getChangeClass = (change) => {
	if (!change) return 'neutral'
	return change > 0 ? 'positive' : change < 0 ? 'negative' : 'neutral'
}

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
				breakpoints: {
					768: { slidesPerView: 2 },
				},
			})
		})
	})
})
</script>

<template>
	<div class="swiper crypto-slider">
		<div class="swiper-wrapper">
			<div class="swiper-slide" v-for="value in tokenSlider" :key="value.id">
				<div class="crypto-card">
					<div class="crypto-card__header">
						<img :src="value.icon" :alt="value.name" class="crypto-card__icon" />
						<h3 class="crypto-card__title">{{ value.name }}</h3>
					</div>
					<div class="crypto-card__content">
						<p class="crypto-card__price">
							{{ formatPrice(savedSliderData[value.id]?.usd) }}
						</p>
						<span
							class="crypto-card__change"
							:class="getChangeClass(savedSliderData[value.id]?.usd_24h_change)"
						>
							{{ formatChange(savedSliderData[value.id]?.usd_24h_change) }}
						</span>
					</div>
				</div>
			</div>
		</div>
		<div class="swiper-pagination"></div>
		<div class="swiper-button-prev"></div>
		<div class="swiper-button-next"></div>
	</div>
</template>
<style></style>
