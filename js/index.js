// let headerBottomList = document.querySelectorAll('.header-bottom__link');
// let dropdown = document.querySelectorAll('.header-bottom__drop-down');

// headerBottomList.forEach(el => {
//   el.addEventListener('click', event => {
//     let path = event.currentTarget.getAttribute('data-path');

//     dropdown.forEach(el => {
//       el.classList.remove('show');
//     });

//     document.querySelector(`[data-target="${path}"]`).classList.add('show');
//   })
// })



//Dropdown

//Задаём переменные

const params = {
  btnClassName: "header-bottom__link",
  activeClassName: "is-active",
  disabledClassName: "is-disabled"
}

//-----------------------------------

function onDisable(evt) {
  if (evt.target.classList.contains(params.disabledClassName)) {
    evt.target.classList.remove(params.disabledClassName, params.activeClassName);
    evt.target.removeEventListener("animationend", onDisable)
  }
}

function setMenuListener() {
  document.body.addEventListener('click', evt => {

    const activeElements = document.querySelectorAll(`.${params.activeClassName}`);

    if (activeElements.length && !evt.target.closest(`.${params.activeClassName}`)) {
      
      activeElements.forEach((current) => {
        
        if (current.classList.contains(params.btnClassName)) {
          current.classList.remove(params.activeClassName)
        } 
        else {
          current.classList.add(params.disabledClassName);
        }
      });
    }

    //-------------------------------------------------------

    if (evt.target.closest(`.${params.btnClassName}`)) {

      const btn = evt.target.closest(`.${params.btnClassName}`);
      const path = btn.dataset.path;
      const drop = document.querySelector(`[data-target="${path}"]`);

      btn.classList.toggle(params.activeClassName);

      if (!drop.classList.contains(params.activeClassName)) {
        drop.classList.add(params.activeClassName);
        drop.addEventListener("animationend", onDisable);
      } 
      else {
        drop.classList.add(params.disabledClassName);
      }
    }
  })
}

setMenuListener();


//--------------------------------------------------


//Скролл для пунктов меню на JQuery

$(document).ready(function () {
  $("#header__list-menu").on("click", "a", function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({
      scrollTop: top
    }, 1100);
  });
});

$(document).ready(function () {
  $("#header__list_menu-opened").on("click", "a", function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({
      scrollTop: top
    }, 1100);
  });
});




//Скролл для каталога 

$(document).ready(function () {
  $("#french-artist-list-content").on("click", "a", function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({
      scrollTop: top
    }, 1100);
  });
});

$(document).ready(function () {
  $("#german-artist-list-content").on("click", "a", function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({
      scrollTop: top
    }, 1100);
  });
});

$(document).ready(function () {
  $("#italian-artist-list-content").on("click", "a", function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({
      scrollTop: top
    }, 1100);
  });
});

$(document).ready(function () {
  $("#russian-artist-list-content").on("click", "a", function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({
      scrollTop: top
    }, 1100);
  });
});

$(document).ready(function () {
  $("#belgium-artist-list-content").on("click", "a", function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({
      scrollTop: top
    }, 1100);
  });
});


//--------------------------------------------------

//скролл для кнопки "Подписаться на рассылку" на JQuery

$(document).ready(function () {
  $(".section-hero__button-wrapper").on("click", "a", function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({
      scrollTop: top
    }, 1100);
  });
});


new Swiper('.hero-swiper-container', {
  // Optional parameters
  loop: true,
  spaceBetween: 0,
  speed: 10000,
  simulateTouch: false,
  effect: 'fade',
  autoplay: {
    delay: 5000
  },

  zoom: {
    maxRatio: 5,
    minRatio: 1
  },

  // If we need pagination

  // pagination: {
  //   el: '.swiper-pagination',
  //   type: 'bullets',
  // },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },

  breakpoints: {
    // when window width is >= 320px
    576: {

    },
    // when window width is >= 480px
    992: {

    },
    // when window width is >= 640px
    1366: {

    }
  }
});



new Swiper('.galery-slides-container', {
  // Optional parameters
  loop: false,
  slidesPerView: 3,
  slidesPerGroup: 1,
  spaceBetween: 50,
  speed: 500,
  simulateTouch: true,
  autoplay: false,
  setWrapperSize: true,
  grid: {
    rows: 2,
    fill: "row"
  },

  // If we need pagination
  // pagination: {
  //   el: '.swiper-pagination',
  //   type: 'bullets',
  // },

  // Navigation arrows
  navigation: {
    nextEl: '.galery .swiper-button-next',
    prevEl: '.galery .swiper-button-prev',
  },

  // And if we need scrollbar
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },

  breakpoints: {
    0: {
      grid: {
        rows: 1,
        fill: "row"
      },
      slidesPerView: 1
    },
    577: {
      grid: {
        rows: 2
      },
      slidesPerView: 2,
      spaceBetween: 34
    },
    993: {
      grid: {
        rows: 2,
      },
      slidesPerView: 2,
      spaceBetween: 34
    },
    1367: {
      grid: {
        rows: 2
      },
      slidesPerView: 3,
      spaceBetween: 50
    },
  }
});


//--------------------------------------------------

(function eventsSliderHandler() {
  const MOBILE_WIDTH = 576;
  const DESKTOP_WIDTH = 960;
  // const btn = document.querySelector('.js-show');

  const sliderMobileParams = {
    paginationClassName: 'events-pagination',
    cardsContainerName: 'events-swiper-container',
    cardsWrapName: 'events-swiper-wrapper',
    card: 'events-swiper-slide',
    hiddenClass: 'is-hidden'
  };

  function getWindowWidth() {
    return Math.max(
      document.body.scrollWidth,
      document.documentElement.scrollWidth,
      document.body.offsetWidth,
      document.documentElement.offsetWidth,
      document.body.clientWidth,
      document.documentElement.clientWidth
    );
  }

  function activateMobileSlider(params) {
    const pagination = document.createElement("div");
    pagination.classList.add(params.paginationClassName);
    params.cardsContainer.append(pagination);

    params.cardsContainer.classList.add("swiper-container");
    params.cardsWrap.classList.add("swiper-wrapper");


    params.cardsSlider = new Swiper(`.${params.cardsContainerName}`, {
      slidesPerView: 1,
      spaceBetween: 20,
      pagination: {
        el: `.${params.cardsContainerName} .${params.paginationClassName}`
      },

      on: {
        beforeInit() {
          document
            .querySelectorAll(`.${params.card}`)
            .forEach((el) => {
              el.classList.add("swiper-slide");
            });
        },

        beforeDestroy() {
          this.slides.forEach((el) => {
            el.classList.remove("swiper-slide");
            el.removeAttribute("role");
            el.removeAttribute("aria-label");
          });

          this.pagination.el.remove();
        }
      }
    });
  }

  function destroyMobileSlider(params) {
    params.cardsSlider.destroy();
    params.cardsContainer.classList.remove("swiper-container");
    params.cardsWrap.classList.remove("swiper-wrapper");
    params.cardsWrap.removeAttribute("aria-live");
    params.cardsWrap.removeAttribute("id");
  }

  function setHiddenCards(params, windowWidth) {
    const cards = document.querySelectorAll(`.${params.card}`);
    let quantity = cards.length;


    if (windowWidth > MOBILE_WIDTH && windowWidth < DESKTOP_WIDTH) {
      quantity = 2;
    }

    if (windowWidth >= DESKTOP_WIDTH) {
      quantity = 3;
    }

    cards.forEach((card, i) => {
      card.classList.remove(params.hiddenClass);
      if (i >= quantity) {
        card.classList.add(params.hiddenClass);
      }
    });
  }

  function showCards(e) {
    const cards = document.querySelectorAll(`.${sliderMobileParams.card}`);

    e.target.style = 'display: none';

    cards.forEach(card => {
      card.classList.remove(sliderMobileParams.hiddenClass);
    });
  }

  function checkWindowWidthMobile(params) {
    const currentWidth = getWindowWidth();
    // btn.style = '';
    params.cardsContainer = document.querySelector(`.${params.cardsContainerName}`);
    params.cardsWrap = document.querySelector(`.${params.cardsWrapName}`);

    if (currentWidth <= MOBILE_WIDTH && (!params.cardsSlider || params.cardsSlider.destroyed)) {
      activateMobileSlider(params);
    } else if (
      currentWidth > MOBILE_WIDTH &&
      params.cardsSlider
    ) {
      destroyMobileSlider(params);
    }

    setHiddenCards(params, currentWidth);
  }

  checkWindowWidthMobile(sliderMobileParams);
  // btn.addEventListener('click', showCards);

  window.addEventListener('resize', function () {
    checkWindowWidthMobile(sliderMobileParams);
  })

})();


//--------------------------------------------------


//edition slider


(() => {
  const MOBILE_WIDTH = 576;

  const sliderParamsNotMobile = {
    sliderWrap: "edition-slider-container",
    cardsContainerName: "edition-swiper-container",
    cardsWrapName: "edition-swiper-wrapper",
    card: "edition-swiper-slide",
    navPrev: "edition-button-prev",
    navNext: "edition-button-next",
  };

  function getWindowWidth() {
    return Math.max(
      document.body.scrollWidth,
      document.documentElement.scrollWidth,
      document.body.offsetWidth,
      document.documentElement.offsetWidth,
      document.body.clientWidth,
      document.documentElement.clientWidth
    );
  }

  function activateSlider(params) {
    params.cardsContainer.classList.add("swiper-container");
    params.cardsWrap.classList.add("swiper-wrapper");

    params.cardsSlider = new Swiper(`.${params.cardsContainerName}`, {
      loop: false,
      slidesPerView: 3,
      spaceBetween: 50,
      simulateTouch: true,
      speed: 500,
      autoplay: false,

      breakpoints: {
        0: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        577: {
          slidesPerView: 2,
          spaceBetween: 34,
        },
        1024: {
          slidesPerView: 2,
          spaceBetween: 49,
        },
        1367: {
          slidesPerView: 3,
        }
      },

      navigation: {
        nextEl: `.${params.navNext}`,
        prevEl: `.${params.navPrev}`
      },

      on: {
        beforeInit() {
          document.querySelectorAll(`.${params.card}`).forEach((el) => {
            el.classList.add("swiper-slide");
          });
        },

        beforeDestroy() {
          this.slides.forEach((el) => {
            el.classList.remove("swiper-slide");
            el.removeAttribute("role");
            el.removeAttribute("aria-label");
          });
        }
      }
    });
  }

  function destroySlider(params) {
    params.cardsSlider.destroy();
    params.cardsContainer.classList.remove("swiper-container");
    params.cardsWrap.classList.remove("swiper-wrapper");
    params.cardsWrap.removeAttribute("aria-live");
    params.cardsWrap.removeAttribute("id");
  }

  function checkWindowWidth(params) {
    const currentWidth = getWindowWidth();
    params.sliderWrapElem = document.querySelector(`.${params.sliderWrap}`);
    params.cardsContainer = document.querySelector(
      `.${params.cardsContainerName}`
    );
    params.cardsWrap = document.querySelector(`.${params.cardsWrapName}`);

    if (
      currentWidth > MOBILE_WIDTH &&
      (!params.cardsSlider || params.cardsSlider.destroyed)
    ) {
      activateSlider(params);
    } else if (currentWidth <= MOBILE_WIDTH && params.cardsSlider) {
      destroySlider(params);
    }
  }

  checkWindowWidth(sliderParamsNotMobile);

  window.addEventListener("resize", function () {
    checkWindowWidth(sliderParamsNotMobile);
  });
})();










new Swiper('.partners-swiper', {
  // Optional parameters
  loop: false,
  slidesPerView: 3,
  slidesPerGroup: 1,
  spaceBetween: 50,
  simulateTouch: false,
  speed: 500,
  autoplay: false,
  setWrapperSize: true,

  // If we need pagination
  // pagination: {
  //   el: '.swiper-pagination',
  //   type: 'bullets',
  // },

  // Navigation arrows
  navigation: {
    nextEl: '.projects .swiper-button-next',
    prevEl: '.projects .swiper-button-prev',
  },

  // And if we need scrollbar
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 21,
    },
    577: {
      slidesPerView: 2,
      spaceBetween: 34,
    },
    993: {
      slidesPerView: 2,
      spaceBetween: 50,
    },
    1367: {
      slidesPerView: 3,
    }
  }
});


//--------------------------------------------------


$('.js-accordion').accordion({
  collapsible: true,
  active: 0,
  icons: false,
  heightStyle: 'content'
});



//--------------------------------------------------

const tabs = document.querySelector('.catalogue__countries-tabs');
const tabsBtn = document.querySelectorAll('.catalogue__countries-btn');
const tabsContent = document.querySelectorAll('.catalogue__lower-box');

if (tabs) {
  tabs.addEventListener('click', (e) => {
    if (e.target.classList.contains('catalogue__countries-btn')) {
      const tabsPath = e.target.dataset.tabsPath;
      tabsHandler(tabsPath);
    }
  })
}

const tabsHandler = (path) => {
  tabsBtn.forEach(el => {
    el.classList.remove('countries-btn-active');
    document.querySelector(`[data-tabs-path="${path}"]`).classList.add('countries-btn-active'); //находим кнопку, по которой кликнули

    tabsContent.forEach(el => {
      el.classList.remove('lower-box-is-active');
      document.querySelector(`[data-tabs-target="${path}"]`).classList.add('lower-box-is-active');
    })
  })
}

//-------------------------------------------------------------------------------

//Табы художников

//France

const catalogueFrenchArtistTabs = document.querySelector('.french-content-list');
const catalogueFrenchArtistsBtn = document.querySelectorAll('.french-content-link');
const catalogFrenchArtistsContent = document.querySelectorAll('.french-artist-card');

if (catalogueFrenchArtistTabs) {
  catalogueFrenchArtistTabs.addEventListener('click', (e) => {
    if (e.target.classList.contains('french-content-link')) {
      const way = e.target.dataset.way;
      catalogueFrenchTabsHandler(way);
    }
  })
}

const catalogueFrenchTabsHandler = (w) => {
  catalogueFrenchArtistsBtn.forEach(el => {
    el.classList.remove('catalogue__link-active');
    document.querySelector(`[data-way="${w}"]`).classList.add('catalogue__link-active'); //находим кнопку, по которой кликнули

    catalogFrenchArtistsContent.forEach(el => {
      el.classList.remove('catalogue__artist-card--active');
      document.querySelector(`[data-purpose="${w}"]`).classList.add('catalogue__artist-card--active');
    })
  })
}

//German

const catalogueGermanArtistTabs = document.querySelector('.german-content-list');
const catalogueGermanArtistsBtn = document.querySelectorAll('.german-content-link');
const catalogGermanArtistsContent = document.querySelectorAll('.german-artist-card');

if (catalogueGermanArtistTabs) {
  catalogueGermanArtistTabs.addEventListener('click', (e) => {
    if (e.target.classList.contains('german-content-link')) {
      const way = e.target.dataset.way;
      catalogueGermanTabsHandler(way);
    }
  })
}

const catalogueGermanTabsHandler = (w) => {
  catalogueGermanArtistsBtn.forEach(el => {
    el.classList.remove('catalogue__link-active');
    document.querySelector(`[data-way="${w}"]`).classList.add('catalogue__link-active'); //находим кнопку, по которой кликнули

    catalogGermanArtistsContent.forEach(el => {
      el.classList.remove('catalogue__artist-card--active');
      document.querySelector(`[data-purpose="${w}"]`).classList.add('catalogue__artist-card--active');
    })
  })
}

//Italian

const catalogueItalianArtistTabs = document.querySelector('.italian-content-list');
const catalogueItalianArtistsBtn = document.querySelectorAll('.italian-content-link');
const catalogItalianArtistsContent = document.querySelectorAll('.italian-artist-card');

if (catalogueItalianArtistTabs) {
  catalogueItalianArtistTabs.addEventListener('click', (e) => {
    if (e.target.classList.contains('italian-content-link')) {
      const way = e.target.dataset.way;
      catalogueItalianTabsHandler(way);
    }
  })
}

const catalogueItalianTabsHandler = (w) => {
  catalogueItalianArtistsBtn.forEach(el => {
    el.classList.remove('catalogue__link-active');
    document.querySelector(`[data-way="${w}"]`).classList.add('catalogue__link-active'); //находим кнопку, по которой кликнули

    catalogItalianArtistsContent.forEach(el => {
      el.classList.remove('catalogue__artist-card--active');
      document.querySelector(`[data-purpose="${w}"]`).classList.add('catalogue__artist-card--active');
    })
  })
}

//Russian

const catalogueRussianArtistTabs = document.querySelector('.russian-content-list');
const catalogueRussianArtistsBtn = document.querySelectorAll('.russian-content-link');
const catalogRussianArtistsContent = document.querySelectorAll('.russian-artist-card');

if (catalogueRussianArtistTabs) {
  catalogueRussianArtistTabs.addEventListener('click', (e) => {
    if (e.target.classList.contains('russian-content-link')) {
      const way = e.target.dataset.way;
      catalogueRussianTabsHandler(way);
    }
  })
}

const catalogueRussianTabsHandler = (w) => {
  catalogueRussianArtistsBtn.forEach(el => {
    el.classList.remove('catalogue__link-active');
    document.querySelector(`[data-way="${w}"]`).classList.add('catalogue__link-active'); //находим кнопку, по которой кликнули

    catalogRussianArtistsContent.forEach(el => {
      el.classList.remove('catalogue__artist-card--active');
      document.querySelector(`[data-purpose="${w}"]`).classList.add('catalogue__artist-card--active');
    })
  })
}

//Belgium

const catalogueBelgiumArtistTabs = document.querySelector('.belgium-content-list');
const catalogueBelgiumArtistsBtn = document.querySelectorAll('.belgium-content-link');
const catalogBelgiumArtistsContent = document.querySelectorAll('.belgium-artist-card');

if (catalogueBelgiumArtistTabs) {
  catalogueBelgiumArtistTabs.addEventListener('click', (e) => {
    if (e.target.classList.contains('belgium-content-link')) {
      const way = e.target.dataset.way;
      catalogueBelgiumTabsHandler(way);
    }
  })
}

const catalogueBelgiumTabsHandler = (w) => {
  catalogueBelgiumArtistsBtn.forEach(el => {
    el.classList.remove('catalogue__link-active');
    document.querySelector(`[data-way="${w}"]`).classList.add('catalogue__link-active'); //находим кнопку, по которой кликнули

    catalogBelgiumArtistsContent.forEach(el => {
      el.classList.remove('catalogue__artist-card--active');
      document.querySelector(`[data-purpose="${w}"]`).classList.add('catalogue__artist-card--active');
    })
  })
}







const element = document.querySelector('.galery__select');
const choices = new Choices(element, {
  searchEnabled: false,
  itemSelectText: '',
  shouldSort: false,
});


tippy('#myButton', {
  content: 'Пример современных тенденций - современная методология разработки ',
  maxWidth: 163,
});


tippy('#myButton-second', {
  content: 'Приятно, граждане, наблюдать, как сделанные на базе аналитики выводы вызывают у вас эмоции  ',
  maxWidth: 163,
});


tippy('#myButton-third', {
  content: 'В стремлении повысить качество ',
  maxWidth: 163,
});


//--------------------------------------------------


document.querySelector('.header-login').addEventListener('mousedown', e => e.preventDefault());

let headerBottomLinks = document.querySelectorAll('.header-bottom__link');

headerBottomLinks.forEach(function (link) {
  link.addEventListener('click', e => e.preventDefault());
})

let headerLinks = document.querySelectorAll('.header__link');

headerLinks.forEach(function (link) {
  link.addEventListener('click', e => e.preventDefault());
})



document.querySelectorAll('.artist-list__heading').forEach(function (el) {
  el.addEventListener('click', e => e.preventDefault());
})

document.querySelector('.second-box-amount').addEventListener('click', e => e.preventDefault());

document.querySelector('.fourth-box-amount').addEventListener('click', e => e.preventDefault());

document.querySelector('.projects__descr-tippy').addEventListener('click', e => e.preventDefault());

document.querySelector('.galery__text-link').addEventListener('click', e => e.preventDefault());

let catalogueContentLinks = document.querySelectorAll('.catalogue__content-link');

catalogueContentLinks.forEach((link) => {
  link.addEventListener('click', e => e.preventDefault());
})

document.querySelector('.projects__descr-link').addEventListener('click', e => e.preventDefault());

document.querySelector('.partners-button-prev').addEventListener('click', e => e.preventDefault());

document.querySelector('.partners-button-next').addEventListener('click', e => e.preventDefault());

document.querySelector('.header-bottom-search-icon').addEventListener('click', e => e.preventDefault());

document.querySelector('.input-box-1024-button').addEventListener('click', e => e.preventDefault());

let eventsLinks = document.querySelectorAll('.events__link');

eventsLinks.forEach(function (link) {
  link.addEventListener('click', e => e.preventDefault())
})

let partnersSlides = document.querySelectorAll('.partners-swiper-slide');

partnersSlides.forEach(function (slide) {
  slide.addEventListener('click', e => e.preventDefault())
})


let communicationLinks = document.querySelectorAll('.contacts__communication-icons-link');

communicationLinks.forEach(function(link) {
  link.addEventListener('click', e => e.preventDefault())
})


let footerLinks = document.querySelectorAll('.footer__socialnets-link');

footerLinks.forEach(function(link) {
  link.addEventListener('click', e => e.preventDefault())
});






document.querySelector('.input-box-1024-button').addEventListener('click', () => document.querySelector('.input-box-1024-input').classList.toggle('input-show'));
document.querySelector('.input-box-1024-button').addEventListener('click', () => document.querySelector('.input-box-1024').classList.toggle('.input-box-1024-background'));

document.querySelector('.header-top__search-icon').addEventListener('click', () => document.querySelector('.header-top-search-block').classList.toggle('opened'));


document.querySelector('.events__button').addEventListener('click', () => document.querySelector('.third-events-slide').classList.add('show'))
document.querySelector('.events__button').addEventListener('click', () => document.querySelector('.fourth-events-slide').classList.add('show-all-events'))
document.querySelector('.events__button').addEventListener('click', () => document.querySelector('.fifth-events-slide').classList.add('show-all-events'))
document.querySelector('.events__button').addEventListener('click', () => document.querySelector('.events__button-container').classList.add('hide'));


document.querySelector('.header-burger-wrapper').addEventListener('click', () => {
  document.querySelector('.header-burger-menu').classList.add('show');
})


document.querySelector('.header-top__search-icon').addEventListener('click', () => {
  document.querySelector('.header-top-search-block').classList.add('opened');
})

document.querySelector('.search-block-close-icon').addEventListener('click', () => {
  document.querySelector('.header-top-search-block').classList.remove('opened');
})

document.querySelector('.burger-menu-close-icon-box').addEventListener('click', () => {
  document.querySelector('.header-burger-menu').classList.remove('show');
})




let selector = document.querySelector("input[type='tel']");

let im = new Inputmask("+7 (999)-999-99-99");
im.mask(selector);

const fileInput = document.querySelector('input[type="file"]');

new JustValidate('.js-form', {
  rules: {
    name: {
      required: true,
      minLength: 2,
      maxLength: 30,
    },
    tel: {
      required: true,
      function: (name, value) => {
        const phone = selector.inputmask.unmaskedvalue()
        return Number(phone) && phone.length === 10
      }
    },
  },
  messages: {
    name: 'Как вас зовут?',
    tel: 'Введите ваш телефон'
  },
  colorWrong: '#D11616',

  submitHandler: function (form) {
    let formData = new FormData(form);

    fetch('mail.php', {
        method: 'POST',
        body: formData
      }).then(() => {
        console.log('Отправлено');
        form.reset();
      })
      .catch(() => console.log('Ошибка'));
  }
});


//Карты

ymaps.ready(init);

function init() {
  const mapElem = document.querySelector('#map');
  const myMap = new ymaps.Map(
    "map", {
      center: [55.75846806898367, 37.60108849999989],
      zoom: 14,
      controls: ['geolocationControl', 'zoomControl'],
    }, {
      suppressMapOpenBlock: true,
      geolocationControlSize: "large",
      geolocationControlPosition: {
        top: "200px",
        right: "20px"
      },
      geolocationControlFloat: 'none',
      zoomControlSize: "small",
      zoomControlFloat: "none",
      zoomControlPosition: {
        top: "120px",
        right: "20px"
      }
    }
  );

  var myPlacemark = new ymaps.Placemark([55.75846806898367, 37.60108849999989], {}, {
    iconLayout: 'default#image',
    iconImageHref: '../Placemark.svg',
    iconImageSize: [20, 20],
    iconImageOffset: [-10, -20]
  });

  myMap.geoObjects.add(myPlacemark);

  setTimeout(() => {
    myMap.container.fitToViewport();
  }, 5000);
}


ymaps.ready(init2);

function init2() {
  const mapElem = document.querySelector('#map2');
  const myMap = new ymaps.Map(
    "map2", {
      center: [55.75846806898367, 37.60108849999989],
      zoom: 14,
      controls: ['geolocationControl', 'zoomControl'],
    }, {
      suppressMapOpenBlock: true,
      geolocationControlSize: "large",
      geolocationControlPosition: {
        top: "200px",
        right: "20px"
      },
      geolocationControlFloat: 'none',
      zoomControlSize: "small",
      zoomControlFloat: "none",
      zoomControlPosition: {
        top: "120px",
        right: "20px"
      }
    }
  );

  var myPlacemark = new ymaps.Placemark([55.75846806898367, 37.60108849999989], {}, {
    iconLayout: 'default#image',
    iconImageHref: '../Placemark.svg',
    iconImageSize: [20, 20],
    iconImageOffset: [-10, -20]
  });

  myMap.geoObjects.add(myPlacemark);

  setTimeout(() => {
    myMap.container.fitToViewport();
  }, 5000);
}




// editions chekbox

(() => {
  const checkBtn = document.querySelector('.js-check-heading');

  checkBtn.addEventListener('click', function () {
    this.classList.toggle('is-active');
  });
})();






//Модальное окно

const slides = document.querySelectorAll('.galery-swiper-slide')
const slide = document.querySelector('.galery-swiper-slide');
const modalOverlay = document.querySelector('.modal-overlay');
const modal = document.querySelector('.modal');
const modalCloseIcon = document.querySelector('.modal__close-icon');


slides.forEach(function (el) {
  el.addEventListener('click', event => {
    event.preventDefault()
  })
})

slide.addEventListener('click', (e) => {
  e.preventDefault();

  let path = e.currentTarget.getAttribute('data-path');

  modal.classList.remove('modal--visible');

  document.querySelector(`[data-target="${path}"]`).classList.add('modal--visible');
  modalOverlay.classList.add('modal-overlay--visible');

  document.querySelector('body').style.overflow = 'hidden'
});


//выключение по клику на overlay

modalOverlay.addEventListener('click', (e) => {
  if (e.target == modalOverlay) {
    modalOverlay.classList.remove('modal-overlay--visible');
    modal.classList.remove('modal--visible');
    document.querySelector('body').style.overflow = 'visible'
  }
})

modalCloseIcon.addEventListener('click', (e) => {
  if (e.target == modalCloseIcon) {
    modalOverlay.classList.remove('modal-overlay--visible');
    modal.classList.remove('modal--visible');
    document.querySelector('body').style.overflow = 'visible'
  }
});



//Отправка данных 