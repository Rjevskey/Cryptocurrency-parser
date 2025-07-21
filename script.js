const cryptoSlider = new Swiper('.crypto-slider', {
  loop: true,
  slidesPerView: 'auto', // Фиксированное количество
  centeredSlides: false, // Отключаем центрирование
  spaceBetween: 20,
  speed:800,
  slideToClickedSlide: true,
  slidesOffsetBefore: 0, 
  slidesOffsetAfter: 0,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },



  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  
  effect: 'slide',
  
  on: {
    // При переключении вправо - выравниваем по левому краю
    slideNextTransitionStart: function() {
      this.params.centeredSlides = false;
      this.update();
    },
    // При переключении влево - центрируем слайды
    slidePrevTransitionStart: function() {
      this.params.centeredSlides = true;
      this.update();
    }
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
      centeredSlides: true
    },
    768: {
      slidesPerView: Auto,
    },
    1024: {
      slidesPerView: 3.5,
      spaceBetween: 10
    }
  }
});