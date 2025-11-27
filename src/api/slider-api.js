export function slaiderDataApi() {
	return fetch(
		'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Ctether%2Cripple%2Cbinancecoin%2Csolana%2Cusd-coin%2Ctron%2Cdogecoin&vs_currencies=usd',
	)
		.then((response) => response.json())
		.then((objectCrypto) => {
			console.log(' Данные для слайдера криптовалют получены:', objectCrypto)
			if (objectCrypto.bitcoin.usd) {
				document.querySelector('.btc-slider').textContent = objectCrypto.bitcoin.usd
			} else {
				console.log('Bitcoin не найден в ответе на слайдер')
			}

			if (objectCrypto['usd-coin']) {
				document.querySelector('.usdc-slide').textContent = objectCrypto['usd-coin'].usd
			} else {
				console.log('USD не найден в ответе на слайдер')
			}
			if (objectCrypto.ethereum.usd) {
				document.querySelector('.eth-slider').textContent = objectCrypto.ethereum.usd
			} else {
				console.log('Ethereum не найден в ответе на слайдер')
			}
			if (objectCrypto.tether.usd) {
				document.querySelector('.ttr-slider').textContent = objectCrypto.tether.usd
			} else {
				console.log('Tether не найден в ответе на слайдер')
			}
			if (objectCrypto.ripple.usd) {
				document.querySelector('.xrp-slider').textContent = objectCrypto.ripple.usd
			} else {
				console.log('XRP не найден в ответе на слайдер')
			}
			if (objectCrypto.binancecoin.usd) {
				document.querySelector('.bnb-slider').textContent = objectCrypto.binancecoin.usd
			} else {
				console.log('BNB не найден в ответе на слайдер')
			}
			if (objectCrypto.solana.usd) {
				document.querySelector('.solana-slide').textContent = objectCrypto.solana.usd
			} else {
				console.log('Solana не найдена в ответе на слайдер')
			}
		})
}
slaiderDataApi()
