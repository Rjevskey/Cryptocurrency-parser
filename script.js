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