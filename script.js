// Принудительно сбрасываем состояние :visited при загрузке
document.querySelectorAll('a').forEach(link => {
  link.style.setProperty('color', 'white', 'important');
});





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






function bitcoinPrice() {
  fetch('https://api.allorigins.win/raw?url=https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd')
    .then(response => response.json())
    .then(data => {
      document.querySelector('.btc-price').textContent = `$${data.bitcoin.usd}`;
      document.querySelector('.btc-slider').textContent= `$${data.bitcoin.usd}`;
    })
    .catch(error => console.log('Ошибка:', error));
}

bitcoinPrice();
setInterval(bitcoinPrice, 1000);


function ethereumPrice(){
fetch('https://api.allorigins.win/raw?url=https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd')
.then(response => response.json())
.then(data=> {
  document.querySelector('.eth-price').textContent =`$${data.ethereum.usd}`
  document.querySelector('.eth-slider').textContent =`$${data.ethereum.usd}`
})
}
ethereumPrice()
setInterval(ethereumPrice, 15000);

function tetherPrice(){
  fetch('https://api.allorigins.win/raw?url=https://api.coingecko.com/api/v3/simple/price?ids=tether&vs_currencies=usd')
.then(response=>response.json())
.then(data=> {
  document.querySelector('.ttr-slider').textContent= `$${data.tether.usd}`
  document.querySelector('.ttr-price').textContent= `$${data.tether.usd}`
})
}
tetherPrice()
setInterval(tetherPrice, 30000);


function xrpPrice (){
  fetch('https://api.allorigins.win/raw?url=https://api.coingecko.com/api/v3/simple/price?ids=ripple&vs_currencies=usd')
    .then(response=>response.json())
    .then(data=>{
      document.querySelector('.xrp-slider').textContent= `$${data.ripple.usd}`
      document.querySelector('.xrp-price').textContent= `$${data.ripple.usd}`
    })
}

xrpPrice()
setInterval(xrpPrice, 45000);

// function (){

// }

// ()
// setInterval(, 60000);

// function (){

// }

// ()
// setInterval(, 60000);
