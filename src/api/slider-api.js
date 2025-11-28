export function slaiderDataApi() {
	return fetch(
		'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Ctether%2Cripple%2Cbinancecoin%2Csolana%2Cusd-coin%2Ctron%2Cdogecoin&vs_currencies=usd&include_24hr_change=true',
	)
		.then((response) => response.json())
		.then((objectCrypto) => {
			console.log(' Данные для слайдера криптовалют получены:', objectCrypto)

			if (objectCrypto.bitcoin) {
				document.querySelector('.btc-slider').textContent = '$' + objectCrypto.bitcoin.usd
				const btcChange = objectCrypto.bitcoin.usd_24h_change
				const btcElement = document.querySelector('.btc-change')
				btcElement.textContent = btcChange.toFixed(2) + '%'
				if (btcChange > 0) btcElement.classList.add('positive')
				else if (btcChange < 0) btcElement.classList.add('negative')
				else btcElement.classList.add('neutral')
			} else {
				console.log('Bitcoin не найден в ответе на слайдер')
			}

			if (objectCrypto['usd-coin']) {
				document.querySelector('.usdc-slide').textContent =
					'$' + objectCrypto['usd-coin'].usd
				const change = objectCrypto['usd-coin'].usd_24h_change
				const element = document.querySelector('.usdc-change')
				element.textContent = change.toFixed(2) + '%'
				if (change > 0) element.classList.add('positive')
				else if (change < 0) element.classList.add('negative')
				else element.classList.add('neutral')
			} else {
				console.log('USD не найден в ответе на слайдер')
			}

			if (objectCrypto.ethereum) {
				document.querySelector('.eth-slider').textContent = '$' + objectCrypto.ethereum.usd
				const change = objectCrypto.ethereum.usd_24h_change
				const element = document.querySelector('.eth-change')
				element.textContent = change.toFixed(2) + '%'
				if (change > 0) element.classList.add('positive')
				else if (change < 0) element.classList.add('negative')
				else element.classList.add('neutral')
			} else {
				console.log('Ethereum не найден в ответе на слайдер')
			}

			if (objectCrypto.tether) {
				document.querySelector('.ttr-slider').textContent = '$' + objectCrypto.tether.usd
				const change = objectCrypto.tether.usd_24h_change
				const element = document.querySelector('.ttr-change')
				element.textContent = change.toFixed(2) + '%'
				if (change > 0) element.classList.add('positive')
				else if (change < 0) element.classList.add('negative')
				else element.classList.add('neutral')
			} else {
				console.log('Tether не найден в ответе на слайдер')
			}

			if (objectCrypto.ripple) {
				document.querySelector('.xrp-slider').textContent = '$' + objectCrypto.ripple.usd
				const change = objectCrypto.ripple.usd_24h_change
				const element = document.querySelector('.xrp-change')
				element.textContent = change.toFixed(2) + '%'
				if (change > 0) element.classList.add('positive')
				else if (change < 0) element.classList.add('negative')
				else element.classList.add('neutral')
			} else {
				console.log('XRP не найден в ответе на слайдер')
			}

			if (objectCrypto.binancecoin) {
				document.querySelector('.bnb-slider').textContent =
					'$' + objectCrypto.binancecoin.usd
				const change = objectCrypto.binancecoin.usd_24h_change
				const element = document.querySelector('.bnb-change')
				element.textContent = change.toFixed(2) + '%'
				if (change > 0) element.classList.add('positive')
				else if (change < 0) element.classList.add('negative')
				else element.classList.add('neutral')
			} else {
				console.log('BNB не найден в ответе на слайдер')
			}

			if (objectCrypto.solana) {
				document.querySelector('.solana-slide').textContent = '$' + objectCrypto.solana.usd
				const change = objectCrypto.solana.usd_24h_change
				const element = document.querySelector('.solana-change')
				element.textContent = change.toFixed(2) + '%'
				if (change > 0) element.classList.add('positive')
				else if (change < 0) element.classList.add('negative')
				else element.classList.add('neutral')
			} else {
				console.log('Solana не найдена в ответе на слайдер')
			}
		})
}

slaiderDataApi()
