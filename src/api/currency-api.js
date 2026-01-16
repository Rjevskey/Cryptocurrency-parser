export function currencyApi() {
	const controller = new AbortController()
	let timerOff = setTimeout(controller.abort, 5000)
	return fetch('https://api.exchangerate-api.com/v4/latest/USD', { signal: controller.signal })
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
			if (error.name === 'AbortError') {
				console.log('Таймаут: запрос отменен через 5 секунд')
			}
			console.log('Ошибка загрузки данных валют:', error)
			return {}
		})
		.finally(() => {
			clearTimeout(timerOff)
		})
}
