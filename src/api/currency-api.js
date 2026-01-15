export function currencyApi() {
	const controller = new AbortController()
	const signal = controller.signal
	setTimeout(signal, 5000)
	return fetch('https://api.exchangerate-api.com/v4/latest/USD')
		.then((response) => {
			if (!response.ok) {
				throw new Error(`HTTP ${response.status}`)
			}
			return response.json()
		})
		.then((dataPackage) => {
			console.log('Данные для таблицы денежных валют получены:', dataPackage)
			return dataPackage.rates
		})
		.catch((error) => {
			console.log('Ошибка загрузки данных валют:', error)
			return {}
		})
}
