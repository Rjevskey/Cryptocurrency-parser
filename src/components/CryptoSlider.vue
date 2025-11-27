<script setup>
import { onMounted } from 'vue'
import { slaiderDataApi } from '@/api/slider-api'
// @ts-ignore
import Swiper from 'swiper'
// @ts-ignore
import { Navigation, Pagination, Autoplay } from 'swiper/modules'

onMounted(() => {
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
			el: '.swiper-pagination', // Селектор контейнера для точек
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
</script>

<template>
	<div>
		<div class="swiper crypto-slider">
			<!-- Обертка слайдов -->
			<div class="swiper-wrapper">
				<!-- Слайд 1 -->
				<div class="swiper-slide">
					<div class="crypto-card">
						<h3>Bitcoin</h3>
						<p class="btc-slider">N/A</p>
						<span class="change">N/A</span>
					</div>
				</div>
				<div class="swiper-slide">
					<div class="crypto-card">
						<h3>USDC</h3>
						<p class="usdc-slide">N/A</p>
						<span class="change">N/A</span>
					</div>
				</div>
				<!-- Слайд 2 -->
				<div class="swiper-slide">
					<div class="crypto-card">
						<h3>Ethereum</h3>
						<p class="eth-slider">N/A</p>
						<span class="change">N/A</span>
					</div>
				</div>
				<div class="swiper-slide">
					<div class="crypto-card">
						<h3>Tether</h3>
						<p class="ttr-slider">N/A</p>
						<span class="change">N/A</span>
					</div>
				</div>
				<div class="swiper-slide">
					<div class="crypto-card">
						<h3>XRP</h3>
						<p class="xrp-slider">N/A</p>
						<span class="change">N/A</span>
					</div>
				</div>
				<div class="swiper-slide">
					<div class="crypto-card">
						<h3>BNB</h3>
						<p class="bnb-slider">N/A</p>
						<span class="change">N/A</span>
					</div>
				</div>
				<div class="swiper-slide">
					<div class="crypto-card">
						<h3>Solana</h3>
						<p class="solana-slide"></p>
						<span class="change">-1.1%</span>
					</div>
				</div>
				<!-- Элементы управления -->
			</div>
			<!-- Добавьте остальные слайды... -->
			<div class="swiper-pagination"></div>
			<!-- Точки-пагинация -->
			<div class="swiper-button-prev"></div>
			<!-- Кнопка "назад" -->
			<div class="swiper-button-next"></div>
			<!-- Кнопка "вперед" -->
		</div>
	</div>
</template>
<style></style>
