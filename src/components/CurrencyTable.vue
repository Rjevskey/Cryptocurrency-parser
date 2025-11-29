<script setup>
import { onMounted } from 'vue'
import { currencyApi } from '@/api/currency-api'

onMounted(() => {
	currencyApi()
})
</script>

<template>
	<table class="table-box__style">
		<tr>
			<th>
				<p class="table-box__style-tittle">Currency</p>
			</th>
			<th>
				<p class="table-box__style-tittle">Price (USD)</p>
			</th>
		</tr>

		<tr>
			<td>
				<div class="table-box__cell">
					<img
						src="/src/assets/img/lcon-coin/icon-currency/icon-rub.png"
						alt="image-rub"
						class="table-box__style-icons"
					/>
					<p class="table-box__style-nameCoin">Russian ruble,(RUB)</p>
				</div>
			</td>
			<td>
				<p class="rub-price">N/A</p>
			</td>
		</tr>

		<tr>
			<td>
				<div class="table-box__cell">
					<img
						src="/src/assets/img/lcon-coin/icon-currency/icon-usd.png"
						alt="image-usd"
						class="table-box__style-icons"
					/>
					<p class="table-box__style-nameCoin">Canadian dollar, (CAD)</p>
				</div>
			</td>
			<td>
				<p class="cad-price">N/A</p>
			</td>
		</tr>

		<tr>
			<td>
				<div class="table-box__cell">
					<img
						src="/src/assets/img/lcon-coin/icon-currency/icon-eur.png"
						alt="image-eur"
						class="table-box__style-icons"
					/>
					<p class="table-box__style-nameCoin">EURO, (EUR)</p>
				</div>
			</td>
			<td>
				<p class="eur-price">N/A</p>
			</td>
		</tr>

		<tr>
			<td>
				<div class="table-box__cell">
					<img
						src="/src/assets/img/lcon-coin/icon-currency/icon-yuan.png"
						alt="image-yuan"
						class="table-box__style-icons"
					/>
					<p class="table-box__style-nameCoin">Yuan, (CNY)</p>
				</div>
			</td>
			<td>
				<p class="cny-price">N/A</p>
			</td>
		</tr>

		<tr>
			<td>
				<div class="table-box__cell">
					<img
						src="/src/assets/img/lcon-coin/icon-currency/icon-gbp.png"
						alt="image-gbp"
						class="table-box__style-icons"
					/>
					<p class="table-box__style-nameCoin">Pound sterling, (GBP)</p>
				</div>
			</td>
			<td>
				<p class="gbp-price">N/A</p>
			</td>
		</tr>

		<tr>
			<td>
				<div class="table-box__cell">
					<img
						src="/src/assets/img/lcon-coin/icon-currency/icon-yuan.png"
						alt="image-eyn"
						class="table-box__style-icons"
					/>
					<p class="table-box__style-nameCoin">Japanese Yen, (JPY)</p>
				</div>
			</td>
			<td>
				<p class="jpy-price">N/A</p>
			</td>
		</tr>

		<tr>
			<td>
				<div class="table-box__cell">
					<img
						src="/src/assets/img/lcon-coin/icon-currency/icon-swissFranc.png"
						alt="image-swissFranc"
						class="table-box__style-icons"
					/>
					<p class="table-box__style-nameCoin">Swiss Franc, (CHF)</p>
				</div>
			</td>
			<td>
				<p class="chf-price">N/A</p>
			</td>
		</tr>

		<tr>
			<td>
				<div class="table-box__cell">
					<img
						src="/src/assets/img/lcon-coin/icon-currency/icon-try.png"
						alt="image-try"
						class="table-box__style-icons"
					/>
					<p class="table-box__style-nameCoin">Turkish Lira, (TRY)</p>
				</div>
			</td>
			<td>
				<p class="try-price">N/A</p>
			</td>
		</tr>

		<tr>
			<td>
				<div class="table-box__cell">
					<img
						src="/src/assets/img/lcon-coin/icon-currency/icon-dirham.png"
						alt="image-dirham"
						class="table-box__style-icons"
					/>
					<p class="table-box__style-nameCoin">UAE dirham, (AED)</p>
				</div>
			</td>
			<td>
				<p class="aed-price">N/A</p>
			</td>
		</tr>
	</table>
</template>
<style></style>
