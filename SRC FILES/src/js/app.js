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









