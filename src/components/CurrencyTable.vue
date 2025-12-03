<script setup>
import { ref } from 'vue'
import { onMounted } from 'vue'
import { currencyApi } from '@/api/currency-api'

onMounted(() => {
	currencyApi()
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
		<tr v-for="currency in currencies" :key="currency.code">
			<th>
				<h4 class="table__title">Currency</h4>
			</th>
			<th>
				<h4 class="table__title">Price (USD)</h4>
			</th>
		</tr>

		<tr>
			<td>
				<div class="table__cell">
					<img
						src="/src/assets/img/lcon-coin/icon-currency/icon-rub.png"
						alt="image-rub"
						class="table__icons"
					/>
					<p class="table__nameCoin">Russian ruble,(RUB)</p>
				</div>
			</td>
			<td>
				<p class="table__price--rub">N/A</p>
			</td>
		</tr>

		<tr>
			<td>
				<div class="table__cell">
					<img
						src="/src/assets/img/lcon-coin/icon-currency/icon-usd.png"
						alt="image-usd"
						class="table__icons"
					/>
					<p class="table__nameCoin">Canadian dollar, (CAD)</p>
				</div>
			</td>
			<td>
				<p class="table__price--cad">N/A</p>
			</td>
		</tr>

		<tr>
			<td>
				<div class="table__cell">
					<img
						src="/src/assets/img/lcon-coin/icon-currency/icon-eur.png"
						alt="image-eur"
						class="table__icons"
					/>
					<p class="table__nameCoin">EURO, (EUR)</p>
				</div>
			</td>
			<td>
				<p class="table__price--eur">N/A</p>
			</td>
		</tr>

		<tr>
			<td>
				<div class="table__cell">
					<img
						src="/src/assets/img/lcon-coin/icon-currency/icon-yuan.png"
						alt="image-yuan"
						class="table__icons"
					/>
					<p class="table__nameCoin">Yuan, (CNY)</p>
				</div>
			</td>
			<td>
				<p class="table__price--cny">N/A</p>
			</td>
		</tr>

		<tr>
			<td>
				<div class="table__cell">
					<img
						src="/src/assets/img/lcon-coin/icon-currency/icon-gbp.png"
						alt="image-gbp"
						class="table__icons"
					/>
					<p class="table__nameCoin">Pound sterling, (GBP)</p>
				</div>
			</td>
			<td>
				<p class="table__price--gbp">N/A</p>
			</td>
		</tr>

		<tr>
			<td>
				<div class="table__cell">
					<img
						src="/src/assets/img/lcon-coin/icon-currency/icon-yuan.png"
						alt="image-eyn"
						class="table__icons"
					/>
					<p class="table__nameCoin">Japanese Yen, (JPY)</p>
				</div>
			</td>
			<td>
				<p class="table__price--jpy">N/A</p>
			</td>
		</tr>

		<tr>
			<td>
				<div class="table__cell">
					<img
						src="/src/assets/img/lcon-coin/icon-currency/icon-swissFranc.png"
						alt="image-swissFranc"
						class="table__icons"
					/>
					<p class="table__nameCoin">Swiss Franc, (CHF)</p>
				</div>
			</td>
			<td>
				<p class="table__price--chf">N/A</p>
			</td>
		</tr>

		<tr>
			<td>
				<div class="table__cell">
					<img
						src="/src/assets/img/lcon-coin/icon-currency/icon-try.png"
						alt="image-try"
						class="table__icons"
					/>
					<p class="table__nameCoin">Turkish Lira, (TRY)</p>
				</div>
			</td>
			<td>
				<p class="table__price--try">N/A</p>
			</td>
		</tr>

		<tr>
			<td>
				<div class="table__cell">
					<img
						src="/src/assets/img/lcon-coin/icon-currency/icon-dirham.png"
						alt="image-dirham"
						class="table__icons"
					/>
					<p class="table__nameCoin">UAE dirham, (AED)</p>
				</div>
			</td>
			<td>
				<p class="table__price--aed">N/A</p>
			</td>
		</tr>
	</table>
</template>
<style></style>
