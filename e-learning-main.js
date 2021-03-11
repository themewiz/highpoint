"use strict";
//Slick Slider (1) One
$(document).ready(function(){
	$('.course_slider').slick({
		dots: false,
		slidesToShow: 2,
		slidesToScroll: 1,
		prevArrow: '.prev_slide',
		nextArrow: '.next_slide',
		autoplay: true,
		speed: 1000,
		pauseOnHover: false,
		pauseOnFocus: false,
		centerMode: true,
		
		responsive: [
			{
				breakpoint: 1025,
				settings: {
					slidesToShow: 2,
				}		
			},
			
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					centerPadding: '0',
				}		
			},
			
		]
	});
	
});

$(document).ready(function(){
	$('.client__slider').slick({	
		dots: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		autoplay: true,
		speed: 1000,
		pauseOnHover: false,
		pauseOnFocus: false,
	});
});

//Animate on Scroll default settings
$(window).on('load', function () {
	AOS.refresh();
});

$(function () {
	AOS.init({
  
		// Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
		offset: 200, // offset (in px) from the original trigger point
		delay: 300, // values from 0 to 3000, with step 50ms
		duration: 1000, // values from 0 to 3000, with step 50ms
		easing: 'ease', // default easing for AOS animations
		once: true, // whether animation should happen only once - while scrolling down
		mirror: true, // whether elements should animate out while scrolling past them
		anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

	});
});	

//Preload all the images in the page
imagesLoaded({background: true}, () => document.body.classList.remove('loading'));