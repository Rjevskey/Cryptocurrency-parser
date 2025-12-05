<script setup>
import { ref } from 'vue'
import { onMounted } from 'vue'
import { currencyApi } from '@/api/currency-api'

const savedCurrency = ref({})

onMounted(() => {
	currencyApi().then((apiData) => {
		savedCurrency.value = apiData
	})
})

const currencies = ref([
	{
		code: 'RUB',
		name: 'Russian ruble',
		icon: '/src/assets/img/lcon-coin/icon-currency/icon-rub.png',
	},
	{
		code: 'CAD',
		name: 'Canadian dollar',
		icon: '/src/assets/img/lcon-coin/icon-currency/icon-usd.png',
	},
	{ code: 'EUR', name: 'EURO', icon: '/src/assets/img/lcon-coin/icon-currency/icon-eur.png' },
	{ code: 'CNY', name: 'Yuan', icon: '/src/assets/img/lcon-coin/icon-currency/icon-yuan.png' },
	{
		code: 'GBP',
		name: 'Pound sterling',
		icon: '/src/assets/img/lcon-coin/icon-currency/icon-gbp.png',
	},
	{
		code: 'JPY',
		name: 'Japanese Yen',
		icon: '/src/assets/img/lcon-coin/icon-currency/icon-yuan.png',
	},
	{
		code: 'CHF',
		name: 'Swiss Franc',
		icon: '/src/assets/img/lcon-coin/icon-currency/icon-swissFranc.png',
	},
	{
		code: 'TRY',
		name: 'Turkish Lira',
		icon: '/src/assets/img/lcon-coin/icon-currency/icon-try.png',
	},
	{
		code: 'AED',
		name: 'UAE dirham',
		icon: '/src/assets/img/lcon-coin/icon-currency/icon-dirham.png',
	},
])
</script>

<template>
	<table class="table">
		<tr>
			<th>
				<h4 class="table__title">Currency</h4>
			</th>
			<th>
				<h4 class="table__title">Price (USD)</h4>
			</th>
		</tr>

		<tr v-for="currency in currencies" :key="currency.code">
			<td>
				<div class="table__cell">
					<img :src="currency.icon" class="table__icons" />
					<p class="table__nameCoin">{{ currency.name }}</p>
				</div>
			</td>
			<td>
				<p class="table__price--rub">{{ savedCurrency[currency.code] }}</p>
			</td>
		</tr>
	</table>
</template>
<style></style>
