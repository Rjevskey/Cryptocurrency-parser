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