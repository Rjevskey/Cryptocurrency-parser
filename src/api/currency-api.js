export function currencyApi() {
	return fetch('https://api.exchangerate-api.com/v4/latest/USD')
		.then((response) => response.json())
		.then((data) => {
			console.log('Данные для таблицы денежных валют получены:', data)

			document.querySelector('.table__price--rub').textContent = data.rates.RUB
			document.querySelector('.table__price--cad').textContent = data.rates.CAD
			document.querySelector('.table__price--eur').textContent = data.rates.EUR
			document.querySelector('.table__price--cny').textContent = data.rates.CNY
			document.querySelector('.table__price--gbp').textContent = data.rates.GBP
			document.querySelector('.table__price--jpy').textContent = data.rates.JPY
			document.querySelector('.table__price--chf').textContent = data.rates.CHF
			document.querySelector('.table__price--try').textContent = data.rates.TRY
			document.querySelector('.table__price--aed').textContent = data.rates.AED
		})
		.catch((error) => {
			console.log('Ошибка загрузки данных валют:', error)
		})
}
