
const swiper = new Swiper('.crypto-slider', {
  loop: true, 
  slidesPerView: 2, // Показываем 2 карточки
  spaceBetween: 20,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

    pagination: {
    el: '.swiper-pagination',  // Селектор контейнера для точек
    clickable: true,
    type: 'bullets',
    dynamicBullets: true, 
  },


  scrollbar: {
    el: '.swiper-scrollbar',
  },
  breakpoints: {
    768: {
      slidesPerView: 2
    }
  }
});

document.addEventListener('DOMContentLoaded', function() {
  // Элементы
  const modal = document.getElementById('myModalReg');
  const openBtn = document.getElementById('openRegModal');
  const closeBtn = document.querySelector('.header__modal-windows__close');
  
  // Проверка
  if (!modal || !openBtn) {
    console.error('Не найдены элементы модального окна!');
    return;
  }

  // Открытие
  openBtn.addEventListener('click', function() {
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
  });

  // Закрытие
  if (closeBtn) {
    closeBtn.addEventListener('click', function() {
      modal.style.display = 'none';
      document.body.style.overflow = '';
    });
  }

  // Закрытие по клику вне окна
  window.addEventListener('click', function(e) {
    if (e.target === modal) {
      modal.style.display = 'none';
      document.body.style.overflow = '';
    }
  });
});




// // Простой костыль для цен
// function getPrices() {
//     fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,tether,ripple,binancecoin,solana,usd-coin,tron,dogecoin&vs_currencies=usd')
//         .then(res => res.json())
//         .then(data => {
//             // Криво обновляем все цены
//             if (data.bitcoin) {
//                 document.querySelector('.btc-price').textContent = '$' + data.bitcoin.usd;
//                 document.querySelector('.btc-slider').textContent = '$' + data.bitcoin.usd;
//             }
            
//             if (data.ethereum) {
//                 document.querySelector('.eth-price').textContent = '$' + data.ethereum.usd;
//                 document.querySelector('.eth-slider').textContent = '$' + data.ethereum.usd;
//             }
            
//             if (data.tether) {
//                 document.querySelector('.ttr-price').textContent = '$' + data.tether.usd;
//                 document.querySelector('.ttr-slider').textContent = '$' + data.tether.usd;
//             }
            
//             if (data.ripple) {
//                 document.querySelector('.xrp-price').textContent = '$' + data.ripple.usd;
//                 document.querySelector('.xrp-slider').textContent = '$' + data.ripple.usd;
//             }
            
//             if (data.binancecoin) {
//                 document.querySelector('.bnb-price').textContent = '$' + data.binancecoin.usd;
//                 document.querySelector('.bnb-slider').textContent = '$' + data.binancecoin.usd;
//             }
            
//             if (data.solana) {
//                 document.querySelector('.solana-price').textContent = '$' + data.solana.usd;
//                 document.querySelector('.solana-slide').textContent = '$' + data.solana.usd;
//             }
            
//             if (data['usd-coin']) {
//                 document.querySelector('.usdc-price').textContent = '$' + data['usd-coin'].usd;
//                 document.querySelector('.usdc-slide').textContent = '$' + data['usd-coin'].usd;
//             }
            
//             if (data.tron) {
//                 document.querySelector('.tron-price').textContent = '$' + data.tron.usd;
//             }
            
//             if (data.dogecoin) {
//                 document.querySelector('.doge-price').textContent = '$' + data.dogecoin.usd;
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




document.querySelector('.telegram-link').addEventListener('click', function() {
    this.style.color = ''; // Сбрасываем встроенные стили при клике
});