export function timeApi() {
	return fetch('http://worldtimeapi.org/api/timezone/Etc/UTC')
		.then((response) => response.json())
		.then((objectTime) => {
			console.log('Точное время получено', objectTime)
		})
}
