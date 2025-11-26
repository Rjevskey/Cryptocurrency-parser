function requestApi() {
	let receivedRequest = fetch(
		'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Ctether%2Cripple%2Cbinancecoin%2Csolana%2Cusd-coin%2Ctron%2Cdogecoin&vs_currencies=usd',
	)
		.then((response) => response.json())
		.then((objectCrypto) => {
			console.log('Полученные данные:', objectCrypto)
			objectCrypto.bitcoin.usd

			document.querySelector('.btc-price').textContent = objectCrypto.bitcoin.usd
		})
		.then((objectCrypto) => {
			if (objectCrypto.ethereum) {
				document.querySelector('.eth-price').textContent = objectCrypto.ethereum.usd
			} else {
				console.log('Ethereum не найден в ответе')
			}
		})
}

document.addEventListener('DOMContentLoaded', requestApi)
