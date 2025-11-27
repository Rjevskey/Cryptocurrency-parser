function requestApi() {
	fetch(
		'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Ctether%2Cripple%2Cbinancecoin%2Csolana%2Cusd-coin%2Ctron%2Cdogecoin&vs_currencies=usd',
	)
		.then((response) => response.json())
		.then((objectCrypto) => {
			console.log(' Данные для таблицы криптовалют получены:', objectCrypto)

			if (objectCrypto.bitcoin.usd) {
				document.querySelector('.btc-price').textContent = objectCrypto.bitcoin.usd
			} else {
				console.log('Bitcoin не найден в ответе')
			}

			if (objectCrypto.ethereum) {
				document.querySelector('.eth-price').textContent = objectCrypto.ethereum.usd
			} else {
				console.log('Ethereum не найден в ответе')
			}

			if (objectCrypto.tether) {
				document.querySelector('.ttr-price').textContent = objectCrypto.tether.usd
			} else {
				console.log('tether не найден в ответе')
			}

			if (objectCrypto.ripple) {
				document.querySelector('.xrp-price').textContent = objectCrypto.ripple.usd
			} else {
				console.log('XRP не найден в ответе')
			}

			if (objectCrypto.binancecoin) {
				document.querySelector('.bnb-price').textContent = objectCrypto.binancecoin.usd
			} else {
				console.log('BNB не найден в ответе')
			}

			if (objectCrypto.solana) {
				document.querySelector('.solana-price').textContent = objectCrypto.solana.usd
			} else {
				console.log('Solana не найдена в ответе')
			}

			if (objectCrypto['usd-coin']) {
				document.querySelector('.usdc-price').textContent = objectCrypto['usd-coin'].usd
			} else {
				console.log('USD не найден в ответе')
			}

			if (objectCrypto.tron) {
				document.querySelector('.tron-price').textContent = objectCrypto.tron.usd
			} else {
				console.log('TRON coin не найден в ответе')
			}

			if (objectCrypto.dogecoin) {
				document.querySelector('.doge-price').textContent = objectCrypto.dogecoin.usd
			} else {
				console.log('Dogecoin не найден в ответе')
			}
		})
		.catch(function (error) {
			console.log('Упс, возникла ошибка! ' + error)
		})
}

document.addEventListener('DOMContentLoaded', requestApi)
