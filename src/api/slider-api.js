export function slaiderDataApi() {
	return fetch(
		'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Ctether%2Cripple%2Cbinancecoin%2Csolana%2Cusd-coin%2Ctron%2Cdogecoin&vs_currencies=usd&include_24hr_change=true',
	)
		.then((response) => response.json())
		.then((objectCrypto) => {
			console.log(' Данные для слайдера криптовалют получены:', objectCrypto)
			return objectCrypto
		})
		.catch((error) => {
			console.log('Ошибка загрузки данных слайдера:', error)
		})
}
