<script setup>
import { ref } from 'vue'
import { onMounted } from 'vue'
import { requestApi } from '@/api/crypto-api'

const cryptoSaved = ref({})

onMounted(() => {
	requestApi().then((apiData) => {
		cryptoSaved.value = apiData
	})
})

const crypto = ref([
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
	{ id: 'tron', name: 'Tron', icon: '/src/assets/img/lcon-coin/icon-crypto/tron-icon.png' },
	{ id: 'dogecoin', name: 'Dogecoin', icon: '/img/lcon-coin/icon-crypto/dogicoin-icon.png' },
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

		<tr v-for="value in crypto" :key="value.id">
			<td>
				<div class="table__cell">
					<img :src="value.icon" class="table__icons" />
					<p class="table__nameCoin">{{ value.name }}</p>
				</div>
			</td>
			<td>
				<p class=".table__price--usdc">{{ cryptoSaved[value.id]?.usd }}</p>
			</td>
		</tr>
	</table>
</template>
<style></style>
