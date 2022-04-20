import * as flsFunctions from "./modules/functions.js";
import './components.js';

flsFunctions.isWebp();

// Import swiper
import Swiper, { Navigation, Pagination, Autoplay, Mousewheel } from 'swiper';
Swiper.use([Navigation, Pagination, Autoplay, Mousewheel ]);
// const swiper = new Swiper();

// Инициализация слайдера Photos
const memorySlider = document.querySelector('.memory_slider');
let mySwiperMemory = new Swiper(memorySlider, { 	
  slidesPerView: 4,	
  spaceBetween: 30, 	
  loop: true,  
  pagination: {
		el: '.swiper-pagination',
		clickable: true,
		type: 'fraction',
	},
	navigation: {
    nextEl: '.memory-button-next',
    prevEl: '.memory-button-prev',
  }, 
	breakpoints: {  
		0: {
			slidesPerView: 1,	
			centeredSlides: true,
		},  
		576: {
			slidesPerView: 2,	
			centeredSlides: true,
		},  
		768: {
			slidesPerView: 3,
			centeredSlides: true,	
		},     
		992: {	
			slidesPerView: 3,	
			centeredSlides: true,
		},
		1200: {		
			centeredSlides: true,
		},
		1500: {		
			
		}
	}
});

// Burger
const btnMenu = document.querySelector('#toggle');
const menu = document.querySelector('.header__nav-list');
const bodyEl = document.querySelector('body');
let navItemAll = document.querySelectorAll('.header__nav-item');


const toggleMenu = function() {
	menu.classList.toggle('open');	
}
const toggleBurger = function() {
	btnMenu.classList.toggle('active');
}
const bodyOverflow = function() {
	bodyEl.classList.toggle('hidden');
}
btnMenu.addEventListener('click', function(e) {
	e.stopPropagation();
	toggleMenu();		
	toggleBurger();
	bodyOverflow();
});	
 navItemAll.forEach((el) => {		
	el.addEventListener("click", function () {
		if (menu.classList.contains("open")) {			
			toggleMenu();
			toggleBurger();
			bodyOverflow();
		}				
	});	
})

// Menu show
document.addEventListener('click', function(e) {
    const target = e.target;
    const its_menu = target == menu || menu.contains(target);		
		
    const menu_is_active = menu.classList.contains('open');	
	
    if (!its_menu && menu_is_active) {
	toggleMenu();
	toggleBurger();
	bodyOverflow();
    }		
});