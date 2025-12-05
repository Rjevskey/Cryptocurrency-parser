export function requestApi() {
	return fetch(
		'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Ctether%2Cripple%2Cbinancecoin%2Csolana%2Cusd-coin%2Ctron%2Cdogecoin&vs_currencies=usd',
	)
		.then((response) => response.json())
		.then((objectCrypto) => {
			console.log(' Данные для таблицы криптовалют получены:', objectCrypto)

			return objectCrypto
		})
		.catch(function (error) {
			console.log('Упс, возникла ошибка! ' + error)
		})
}
