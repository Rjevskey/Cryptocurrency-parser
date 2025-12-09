<script setup>
import CryptoTable from '@/components/CryptoTable.vue'
import CurrencyTable from '@/components/CurrencyTable.vue'
import CryptoSlider from '@/components/CryptoSlider.vue'
import HeaderTables from '@/components/HeaderTables.vue'
</script>

<template>
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
</template>

<style></style>
