export function currencyApi() {
	return fetch('https://api.exchangerate-api.com/v4/latest/USD')
		.then((response) => response.json())
		.then((dataPackage) => {
			console.log('Данные для таблицы денежных валют получены:', dataPackage)
			return dataPackage.rates
		})
		.catch((error) => {
			console.log('Ошибка загрузки данных валют:', error)
		})
}
