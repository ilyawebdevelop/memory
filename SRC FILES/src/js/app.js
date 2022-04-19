import * as flsFunctions from "./modules/functions.js";
// import './components.js';

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
		},  
		576: {
			slidesPerView: 1,	
		},  
		768: {
			slidesPerView: 1,	
		},     
		992: {		
		},
		1200: {		
		
		}
	}
});