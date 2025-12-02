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
		<div class="main">
			<div class="tables-container">
				<CryptoTable />
				<CurrencyTable />
			</div>
		</div>
		<div class="slider">
			<CryptoSlider />
		</div>
		<FooterComponent />
	</div>
</template>

<style></style>
