function loadSwiper() {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.type = 'module';
    script.src = 'https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.js';
    script.onload = () => resolve();
    script.onerror = () => reject(new Error('Failed to load swiper script'));
    document.head.appendChild(script);
  });
}

function appSwiper() {
  // swiper show
  $('.swiper_component.is-show').each(function (index) {
    let loopMode = false;
    if ($(this).attr('loop-mode') === 'true') {
      loopMode = true;
    }
    let sliderDuration = 300;
    if ($(this).attr('slider-duration') !== undefined) {
      sliderDuration = +$(this).attr('slider-duration');
    }
    const swiper = new Swiper($(this).find('.swiper.is-show')[0], {
      speed: sliderDuration,
      loop: loopMode,
      autoHeight: false,
      centeredSlides: loopMode,
      followFinger: true,
      freeMode: true,
      slideToClickedSlide: true,
      slidesPerView: 1,
      spaceBetween: '4%',
      rewind: false,
      mousewheel: {
        forceToAxis: true,
      },
      keyboard: {
        enabled: true,
        onlyInViewport: true,
      },
      breakpoints: {
        // mobile landscape
        480: {
          slidesPerView: 1,
          spaceBetween: '4%',
        },
        // tablet
        768: {
          slidesPerView: 1,
          spaceBetween: '4%',
        },
        // desktop
        992: {
          slidesPerView: 3.5,
          spaceBetween: '2%',
        },
      },
      scrollbar: {
        el: $(this).find('.swiper-drag-wrapper')[0],
        draggable: true,
        dragClass: 'swiper-drag',
        snapOnRelease: true,
      },
      slideActiveClass: 'is-active',
      slideDuplicateActiveClass: 'is-active',
    });
  });

  // swiper article
  $('.swiper_component.is-article').each(function (index) {
    let loopMode = false;
    if ($(this).attr('loop-mode') === 'true') {
      loopMode = true;
    }
    let sliderDuration = 300;
    if ($(this).attr('slider-duration') !== undefined) {
      sliderDuration = +$(this).attr('slider-duration');
    }
    const swiper = new Swiper($(this).find('.swiper.is-article')[0], {
      speed: sliderDuration,
      loop: loopMode,
      autoHeight: false,
      centeredSlides: loopMode,
      followFinger: true,
      freeMode: true,
      slideToClickedSlide: true,
      slidesPerView: 1,
      spaceBetween: '4%',
      rewind: false,
      mousewheel: {
        forceToAxis: true,
      },
      keyboard: {
        enabled: true,
        onlyInViewport: true,
      },
      breakpoints: {
        // mobile landscape
        480: {
          slidesPerView: 1,
          spaceBetween: '4%',
        },
        // tablet
        768: {
          slidesPerView: 1,
          spaceBetween: '4%',
        },
        // desktop
        992: {
          slidesPerView: 1.5,
          spaceBetween: '2%',
        },
      },
      scrollbar: {
        el: $(this).find('.swiper-drag-wrapper.is-article')[0],
        draggable: true,
        dragClass: 'swiper-drag',
        snapOnRelease: true,
      },
      slideActiveClass: 'is-active',
      slideDuplicateActiveClass: 'is-active',
    });
  });

  // swiper event
  $('.swiper_component.is-event').each(function (index) {
    let loopMode = false;
    if ($(this).attr('loop-mode') === 'true') {
      loopMode = true;
    }
    let sliderDuration = 300;
    if ($(this).attr('slider-duration') !== undefined) {
      sliderDuration = +$(this).attr('slider-duration');
    }
    const swiper = new Swiper($(this).find('.swiper.is-event')[0], {
      speed: sliderDuration,
      loop: loopMode,
      autoHeight: false,
      centeredSlides: loopMode,
      followFinger: true,
      freeMode: true,
      slideToClickedSlide: true,
      slidesPerView: 1,
      spaceBetween: '4%',
      rewind: false,
      mousewheel: {
        forceToAxis: true,
      },
      keyboard: {
        enabled: true,
        onlyInViewport: true,
      },
      breakpoints: {
        // mobile landscape
        480: {
          slidesPerView: 1,
          spaceBetween: '4%',
        },
        // tablet
        768: {
          slidesPerView: 1,
          spaceBetween: '4%',
        },
        // desktop
        992: {
          slidesPerView: 1.2,
          spaceBetween: '2%',
        },
      },
      scrollbar: {
        el: $(this).find('.swiper-drag-wrapper.is-event')[0],
        draggable: true,
        dragClass: 'swiper-drag',
        snapOnRelease: true,
      },
      slideActiveClass: 'is-active',
      slideDuplicateActiveClass: 'is-active',
    });
  });

  // swiper toolbox
  $('.swiper_component.is-toolbox').each(function (index) {
    let loopMode = false;
    if ($(this).attr('loop-mode') === 'true') {
      loopMode = true;
    }
    let sliderDuration = 300;
    if ($(this).attr('slider-duration') !== undefined) {
      sliderDuration = +$(this).attr('slider-duration');
    }
    const swiper = new Swiper($(this).find('.swiper.is-toolbox')[0], {
      speed: sliderDuration,
      loop: loopMode,
      autoHeight: false,
      centeredSlides: loopMode,
      followFinger: true,
      freeMode: true,
      slideToClickedSlide: true,
      slidesPerView: 1,
      spaceBetween: '4%',
      rewind: false,
      mousewheel: {
        forceToAxis: true,
      },
      keyboard: {
        enabled: true,
        onlyInViewport: true,
      },
      breakpoints: {
        // mobile landscape
        480: {
          slidesPerView: 2,
          spaceBetween: '4%',
        },
        // tablet
        768: {
          slidesPerView: 2,
          spaceBetween: '4%',
        },
        // desktop
        992: {
          slidesPerView: 4.2,
          spaceBetween: '2%',
        },
      },
      scrollbar: {
        el: $(this).find('.swiper-drag-wrapper.is-toolbox')[0],
        draggable: true,
        dragClass: 'swiper-drag',
        snapOnRelease: true,
      },
      slideActiveClass: 'is-active',
      slideDuplicateActiveClass: 'is-active',
    });
  });
}

export { appSwiper, loadSwiper };
