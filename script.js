// // Простой костыль для цен
// function getPrices() {
//     fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,tether,ripple,binancecoin,solana,usd-coin,tron,dogecoin&vs_currencies=usd')
//         .then(res => res.json())
//         .then(data => {
//             // Криво обновляем все цены
//             if (data.bitcoin) {
//                 document.querySelector('..table__price--btc').textContent = '$' + data.bitcoin.usd;
//                 document.querySelector('.btc-slider').textContent = '$' + data.bitcoin.usd;
//             }

//             if (data.ethereum) {
//                 document.querySelector('..table__price--eth').textContent = '$' + data.ethereum.usd;
//                 document.querySelector('.eth-slider').textContent = '$' + data.ethereum.usd;
//             }

//             if (data.tether) {
//                 document.querySelector('..table__price--ttr').textContent = '$' + data.tether.usd;
//                 document.querySelector('.ttr-slider').textContent = '$' + data.tether.usd;
//             }

//             if (data.ripple) {
//                 document.querySelector('..table__price--xrp').textContent = '$' + data.ripple.usd;
//                 document.querySelector('.xrp-slider').textContent = '$' + data.ripple.usd;
//             }

//             if (data.binancecoin) {
//                 document.querySelector('..table__price--bnb').textContent = '$' + data.binancecoin.usd;
//                 document.querySelector('.bnb-slider').textContent = '$' + data.binancecoin.usd;
//             }

//             if (data.solana) {
//                 document.querySelector('..table__price--solana').textContent = '$' + data.solana.usd;
//                 document.querySelector('.solana-slide').textContent = '$' + data.solana.usd;
//             }

//             if (data['usd-coin']) {
//                 document.querySelector('..table__price--usdc').textContent = '$' + data['usd-coin'].usd;
//                 document.querySelector('.usdc-slide').textContent = '$' + data['usd-coin'].usd;
//             }

//             if (data.tron) {
//                 document.querySelector('..table__price--tron').textContent = '$' + data.tron.usd;
//             }

//             if (data.dogecoin) {
//                 document.querySelector('..table__price--doge').textContent = '$' + data.dogecoin.usd;
//             }
//         })
//         .catch(err => {
//             console.log('Ошибка какая-то:', err);
//         });
// }

// // Запускаем цены когда страница загрузится
// document.addEventListener('DOMContentLoaded', function() {
//     getPrices();
//     setInterval(getPrices, 60000);
// });

document.querySelector('.telegram-link').addEventListener('click', function () {
	this.style.color = '' // Сбрасываем встроенные стили при клике
})
