<script setup>
import HeaderComponent from './components/HeaderComponent.vue'
import CryptoTable from './components/CryptoTable.vue'
import CurrencyTable from './components/CurrencyTable.vue'
import CryptoSlider from './components/CryptoSlider.vue'
import FooterComponent from './components/FooterComponent.vue'
import HeaderTables from './components/HeaderTables.vue'
</script>

<template>
	<div class="general-container">
		<HeaderComponent />
		<HeaderTables />
		<div class="main-container">
			<div class="main-container__table-box">
				<CryptoTable />
				<CurrencyTable />
			</div>
		</div>
		<div class="slider-container">
			<CryptoSlider />
		</div>
		<FooterComponent />
	</div>
</template>

<style></style>
