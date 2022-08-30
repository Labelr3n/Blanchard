// dropdown
const params = {
  btnClassName: "header-bottom-dropdown-btn",
  dropClassName: "header-bottom-drop",
  activeClassName: "is-active",
  disabledClassName: "is-disabled"
};

function onDisable(evt) {
  if (evt.target.classList.contains(params.disabledClassName)) {
    evt.target.classList.remove(
      params.disabledClassName,
      params.activeClassName
    );
    evt.target.removeEventListener("animationend", onDisable);
  }
}

function setMenuListener() {
  document.body.addEventListener("click", (evt) => {
    const activeElements = document.querySelectorAll(
      `.${params.btnClassName}.${params.activeClassName}, .${params.dropClassName}.${params.activeClassName}`
    );

    if (
      activeElements.length &&
      !evt.target.closest(`.${params.activeClassName}`)
    ) {
      activeElements.forEach((current) => {
        if (current.classList.contains(params.btnClassName)) {
          current.classList.remove(params.activeClassName);
        } else {
          current.classList.add(params.disabledClassName);
        }
      });
    }

    if (evt.target.closest(`.${params.btnClassName}`)) {
      const btn = evt.target.closest(`.${params.btnClassName}`);
      const path = btn.dataset.path;
      const drop = document.querySelector(
        `.${params.dropClassName}[data-target="${path}"]`
      );

      btn.classList.toggle(params.activeClassName);

      if (!drop.classList.contains(params.activeClassName)) {
        drop.classList.add(params.activeClassName);
        drop.addEventListener("animationend", onDisable);
      } else {
        drop.classList.add(params.disabledClassName);
      }
    }
  });
}

setMenuListener();

// slider-hero
let heroswiper = new Swiper('.swiper-hero', {
  Observer: true,
  allowTouchMove: false,
  loop: true,
  effect: 'fade',
  speed: 10000,
  autoplay: {
    delay: 1000
  }
});

// select
const element = document.querySelector('select');
const choices = new Choices(element,{
  searchEnabled: false,
  searchChoices: false,
  shouldSort: false,
});

//slider-catalog
document.addEventListener("DOMContentLoaded", () => {
  let gallerySlider = new Swiper(".swiper-gallery", {
    Observer: true,
    slidesPerView: 3,
    grid: {
      rows: 1,
      fill: "row"
    },
    spaceBetween: 20,
    pagination: {
      el: ".gallery .gallery__pagination",
      type: "fraction"
    },
    navigation: {
      nextEl: ".gallery__next",
      prevEl: ".gallery__prev"
    },

    breakpoints: {

      320: {
        slidesPerView: 1,
        spaceBetween: 50
      },

      550: {
        slidesPerView: 2,
        spaceBetween: 50
      },

      1200: {
        slidesPerView: 3,
        spaceBetween: 50
      }
    },

    a11y: {
      prevSlideMessage: 'Нажмите, чтобы увидеть Предыдущиый слайд',
      nextSlideMessage: 'Нажмите, чтобы увидеть Следующий слайд',
      lastSlideMessage: 'Это последний слайд',
      firstSlideMessage: 'Это первый слайд',
      paginationBulletMessage: 'Перейти к слайду {{index}}',
      slideLabelMessage: 'слайд с изображением картины художника'
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true
    }, // можно управлять с клавиатуры стрелками влево/вправо

    // Дальнейшие надстройки делают слайды вне области видимости не фокусируемыми
    watchSlidesProgress: true,
    watchSlidesVisibility: true,
    slideVisibleClass: "slide-visible",

    on: {
      init: function () {
        this.slides.forEach((slide) => {
          if (!slide.classList.contains("slide-visible")) {
            slide.tabIndex = "-1";
          } else {
            slide.tabIndex = "";
          }
        });
      },
      slideChange: function () {
        this.slides.forEach((slide) => {
          if (!slide.classList.contains("slide-visible")) {
            slide.tabIndex = "-1";
          } else {
            slide.tabIndex = "";
          }
        });
      }
    }
  });
});

// accordion
(() => {
  new Accordion(".catalog__container", {
    openOnInit: [0]
  });
})();


// Табы
const tab = {
  tabsClass: "painter-tab-btn",
  wrap: "painter-tabs-wrap",
  content: "catalog-tab-content",
  active: "active"
};

function setTabs(tab) {
  const tabBtns = document.querySelectorAll(`.${tab.tabsClass}`);

  function onTabClick(e) {
    e.preventDefault();
    const path = this.dataset.path;
    const wrap = this.closest(`.${tab.wrap}`);
    const currentContent = wrap.querySelector(`.${tab.content}[data-target="${path}"]`);
    const contents = wrap.querySelectorAll(`.${tab.content}`);

    contents.forEach((el) => {
      el.classList.remove(tab.active);
    });

    currentContent.classList.add(tab.active);

    tabBtns.forEach((el) => {
      el.classList.remove(tab.active);
    });

    this.classList.add(tab.active);
  }

  tabBtns.forEach(function (el) {
    el.addEventListener("click", onTabClick);
  });
}

setTabs(tab);

// events-slider
document.addEventListener("DOMContentLoaded", () => {
  let eventsSlider = new Swiper(".swiper-events", {
    Observer: true,
    slidesPerView: 2,
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
        clickable: true,
    },
    navigation: {
      nextEl: ".events__next",
      prevEl: ".events__prev"
    },

    breakpoints: {

      250: {
        slidesPerView: 1,
        spaceBetween: 50
      },

      550: {
        slidesPerView: 2,
        spaceBetween: 34
      },

      950: {
        slidesPerView: 3,
        spaceBetween: 27
      },

      1200: {
        slidesPerView: 3,
        spaceBetween: 50,
      },
    },

    a11y: false,
    keyboard: {
      enabled: true,
      onlyInViewport: true
    },
  });
});

// tooltip
tippy('.js-tooltip-btn', {
  theme: 'proects__tooltip',
  maxWidth: 264,
});

// proects-slider
document.addEventListener("DOMContentLoaded", () => {
  let proectsSlider = new Swiper(".swiper-proects", {
    Observer: true,
    slidesPerView: 3,
    spaceBetween: 50,
    pagination: {
      el: "proects__pagination",
      type: "bullets",
      clickable: true,
    },
    navigation: {
      nextEl: ".proects__next",
      prevEl: ".proects__prev"
    },

    breakpoints: {

      250: {
        slidesPerView: 1,
        spaceBetween: 37
      },

      530: {
        slidesPerView: 2,
        spaceBetween: 37
      },

      850: {
        slidesPerView: 2,
        spaceBetween: 45
      },

      1200: {
        slidesPerView: 3,
        spaceBetween: 50,
      }
    },

    a11y: false,
    keyboard: {
      enabled: true,
      onlyInViewport: true
    },
  });
});

// Валидация формы
var selector = document.querySelector("input[type='tel']");
var im = new Inputmask("+7 (999)-999-99-99");

im.mask(selector);

new JustValidate('.contacts__form', {
  rules: {
    name: {
      required: true,

    },
    tel: {
      required: true,
      function: (name, value) => {
        const phone =selector.inputmask.unmaskedvalue()
        return Number(phone) && phone.length ===10
      },
    },
    },

    messages: {
      name: {
        required: "Вы не ввели имя",
        function: "Недопустимый формат"
      },
      tel: {
        required: "Вы не ввели телефон",
        function: "Недопустимый формат"
      },
    },
  });

// map
ymaps.ready(init);
function init() {
  const mapElem = document.querySelector('#map');
  const myMap = new ymaps.Map(
    "map",
    {
      center: [55.758468, 37.601088],
      zoom: 14,
      controls: ['geolocationControl', 'zoomControl']
    },
    {
      suppressMapOpenBlock: true,
      geolocationControlSize: "large",
      geolocationControlPosition:  { top: "350px", right: "15px" },
      geolocationControlFloat: 'none',
      zoomControlSize: "small",
      zoomControlFloat: "none",
      zoomControlPosition: { top: "260px", right: "15px" }
    }
  );

  myMap.behaviors.disable('scrollZoom');

  const myPlacemark = new ymaps.Placemark(
    [55.75846806898367, 37.60108849999989],
    {},
    {
      iconLayout: "default#image",
      iconImageHref: "./img/main/contacts/map.svg",
      iconImageSize: [20, 20],
      iconImageOffset: [-20, -40],
    }
  );

  myMap.geoObjects.add(myPlacemark);
  myMap.container.fitToViewport();
}

// burger
let burger = document.querySelector('.header__burger-btn');
let menu = document.querySelector('.header-nav');
let menuLinks = document.querySelectorAll('.header-top__link');

burger.addEventListener('click',function() {

    burger.classList.toggle('header__burger-btn--active');

    menu.classList.toggle('header-nav--active');

    document.body.classList.toggle('stop-scroll');

})

menuLinks.forEach(function(el) {

    el.addEventListener('click', function() {

    burger.classList.remove('burger--active');

    menu.classList.remove('header-nav--active');

    document.body.classList.remove('stop-scroll');

    })
})

// open-search
let searchOpen = document.querySelector('.header__btn-open');
let searchMenu = document.querySelector('.header__form-close ');
let searchClose = document.querySelector('.header__form-btn-close');



searchOpen.addEventListener('click', function(){
    searchMenu.classList.add('header__form-close--active');
})

searchClose.addEventListener('click', function(){
    searchMenu.classList.remove('header__form-close--active');
})

// modalwindow
let modalOpen = document.querySelectorAll('.gallery__slide');
let modalMenu = document.querySelector('.modal');
let modalClose = document.querySelector('.modal__btn');


modalOpen.forEach(function (el) {
  el.addEventListener('click', function () {
    modalMenu.classList.add('modal--active')
    document.body.classList.toggle('stop-scroll')
    });
  });

modalClose.addEventListener('click', function(){
    modalMenu.classList.remove('modal--active');
    document.body.classList.remove('stop-scroll');
})

// Плавный скролл

var $page = $('html, body');
$('a[href*="#"]').click(function () {
  $page.animate({
    scrollTop: $($.attr(this, 'href')).offset().top
  }, 1000);
  return false;
});
