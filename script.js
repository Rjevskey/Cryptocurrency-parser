
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




const baseTimeInterval = 30000;

function bitcoinPrice() {
  fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd')
    .then(response => response.json())
    .then(data => {
      document.querySelector('.btc-price').textContent = `$${data.bitcoin.usd}`;
      document.querySelector('.btc-slider').textContent= `$${data.bitcoin.usd}`;
    })
    .catch(error => console.log('Ошибка в разделе Биткоина:', error));
}

bitcoinPrice();
setInterval(bitcoinPrice, baseTimeInterval);


function ethereumPrice(){
fetch('https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd')
.then(response => response.json())
.then(data=> {
  document.querySelector('.eth-price').textContent =`$${data.ethereum.usd}`
  document.querySelector('.eth-slider').textContent =`$${data.ethereum.usd}`
})
.catch(error => console.log('Ошибка в разделе Эфириума:', error));
}
ethereumPrice()
setInterval(ethereumPrice, baseTimeInterval);

function tetherPrice(){
  fetch('https://api.coingecko.com/api/v3/simple/price?ids=tether&vs_currencies=usd')
.then(response=>response.json())
.then(data=> {
  document.querySelector('.ttr-slider').textContent= `$${data.tether.usd}`
  document.querySelector('.ttr-price').textContent= `$${data.tether.usd}`
})
.catch(error => console.log('Ошибка в разделе Тезера:', error));
}
tetherPrice()
setInterval(tetherPrice, baseTimeInterval*2);


function xrpPrice (){
  fetch('https://api.coingecko.com/api/v3/simple/price?ids=ripple&vs_currencies=usd')
    .then(response=>response.json())
    .then(data=>{
      document.querySelector('.xrp-slider').textContent= `$${data.ripple.usd}`
      document.querySelector('.xrp-price').textContent= `$${data.ripple.usd}`
    })
    .catch(error => console.log('Ошибка в разделе XRP:', error));
}

xrpPrice()
setInterval(xrpPrice, baseTimeInterval*2);

function bnbPrice (){
fetch('https://api.coingecko.com/api/v3/simple/price?ids=binancecoin&vs_currencies=usd')
  .then(response => response.json())
  .then(data => {
    document.querySelector('.bnb-slider').textContent = `$${data.binancecoin.usd}`;
    document.querySelector('.bnb-price').textContent = `$${data.binancecoin.usd}`;
  })
  .catch(error=>console.log('Ошибка в разделе BNB:', error));
}

bnbPrice()
setInterval(bnbPrice, baseTimeInterval*2);

function solanaPrice (){
fetch('https://api.coingecko.com/api/v3/simple/price?ids=solana&vs_currencies=usd')
  .then(response => response.json())
  .then(data => {
    document.querySelector('.solana-slide').textContent = `$${data.solana.usd}`;
    document.querySelector('.solana-price').textContent = `$${data.solana.usd}`;
  })
.catch(error => console.log('Ошибка в разделе Solana:', error));
}

solanaPrice ()
setInterval(solanaPrice, baseTimeInterval)

function usdcPrice(){
fetch('https://api.coingecko.com/api/v3/simple/price?ids=usd-coin&vs_currencies=usd')
  .then(response => response.json())
  .then(data => {
    document.querySelector('.usdc-slide').textContent = `$${data['usd-coin'].usd}`;
    document.querySelector('.usdc-price').textContent = `$${data['usd-coin'].usd}`;
  })
  .catch(error => console.log('Ошибка в разделе USDC:', baseTimeInterval));
}

usdcPrice()
setInterval(usdcPrice, baseTimeInterval);



function tronPrice (){
fetch('https://api.coingecko.com/api/v3/simple/price?ids=tron&vs_currencies=usd')
  .then(response => response.json())
  .then(data => {
    document.querySelector('.tron-price').textContent = `$${data.tron.usd}`;
  })
  .catch(error => console.log('Ошибка в разделе TRON:', error));
}

tronPrice()
setInterval(tronPrice, baseTimeInterval*2);

function priceDogecoin (){
  fetch('https://api.coingecko.com/api/v3/simple/price?ids=dogecoin&vs_currencies=usd')
  .then(response => response.json())
  .then(data => {
    document.querySelector('.doge-price').textContent = `$${data.dogecoin.usd}`;
  })
  .catch(error => console.log('Ошибка в разделе Dogecoin:', error));
}

priceDogecoin()
setInterval(priceDogecoin, baseTimeInterval*2);






document.querySelector('.telegram-link').addEventListener('click', function() {
    this.style.color = ''; // Сбрасываем встроенные стили при клике
});