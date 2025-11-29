export function currencyApi() {
	return fetch('https://api.exchangerate-api.com/v4/latest/USD')
		.then((response) => response.json())
		.then((data) => {
			console.log('Данные для таблицы денежных валют получены:', data)

			document.querySelector('.rub-price').textContent = data.rates.RUB
			document.querySelector('.cad-price').textContent = data.rates.CAD
			document.querySelector('.eur-price').textContent = data.rates.EUR
			document.querySelector('.cny-price').textContent = data.rates.CNY
			document.querySelector('.gbp-price').textContent = data.rates.GBP
			document.querySelector('.jpy-price').textContent = data.rates.JPY
			document.querySelector('.chf-price').textContent = data.rates.CHF
			document.querySelector('.try-price').textContent = data.rates.TRY
			document.querySelector('.aed-price').textContent = data.rates.AED
		})
		.catch((error) => {
			console.log('Ошибка загрузки данных валют:', error)
		})
}
