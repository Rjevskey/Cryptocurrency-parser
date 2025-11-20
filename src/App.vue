<script setup>
import HeaderComponent from './components/HeaderComponent.vue'
import ModalComponent from './components/ModalComponent.vue'
import CryptoTable from './components/CryptoTable.vue'
import CurrencyTable from './components/CurrencyTable.vue'
import CryptoSlider from './components/CryptoSlider.vue'
import FooterComponent from './components/FooterComponent.vue'
import HeaderTables from './components/HeaderTables.vue'
</script>

<template>
	<div class="general-container">
		<HeaderComponent />
		<ModalComponent />
		<HeaderTables />
		<div class="main-container">
			<div class="main-container__table-box">
				<CryptoTable />
				<CurrencyTable />
			</div>
		</div>
		<CryptoSlider />
		<FooterComponent />
	</div>
</template>

<style></style>
