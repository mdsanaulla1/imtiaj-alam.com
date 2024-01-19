/*======================================================================

Template Name: WebSite Template
Author: Ariful Islam
======================================================================*/

(function ($) {
	'use strict'

	/*Mobile Menu */
	$('.nav_menu').slicknav({
		'appendTo': '.navigation',
		'label': ''
	});


	$('.slide_image').slick({
	  dots: false,
	  infinite: true,
	  speed: 300,
	  slidesToShow: 6,
	  slidesToScroll: 6,
	  prevArrow: '<button class="slick-prev" aria-label="Previous" type="button"><i class="fas fa-chevron-left"></i></button>',
	  nextArrow: '<button class="slick-next" aria-label="Next" type="button"><i class="fas fa-chevron-right"></i></button>',

	  responsive: [
	    {
	      breakpoint: 1024,
	      settings: {
	        slidesToShow: 4,
	        slidesToScroll: 4,
	        infinite: true,
	        dots: true
	      }
	    },
	    {
	      breakpoint: 600,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 2
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1
	      }
	    }
	    // You can unslick at a given breakpoint now by adding:
	    // settings: "unslick"
	    // instead of a settings object
	  ]
	});
})(jQuery);










