/*============================================
Theme Name : Arief | Personal Blog Theme
Url        : ariefulkhakim.github.io/arieful
Description: Arief is a personal landing page is beautiful design and elegant
Versi      : 0.01
Author     : Arieful Khakim
============================================*/

(function($) {
	'use strict';
	jQuery(document).ready(function(){

		// Navigation
	    $(window).scroll(function() {
	        if ($(".navbar-default").offset().top > 100) {
	            $(".navbar-fixed-top").addClass("top-nav-collapse");
	        } else {
	            $(".navbar-fixed-top").removeClass("top-nav-collapse");
	        }
	        
	    });

	    // Owl-Carousel
	    $('.owl-carousel').owlCarousel({
		    loop:true,
		    margin:5,
		    nav:false,
		    responsive:{
		        0:{
		            items:1
		        },
		        600:{
		            items:2
		        },
		        1000:{
		            items:1
		        }
		    }
		});

		// Portfolio
		$('.portfolio-wrapper').mixItUp();

		// Magnific Popup
		$('.portfolio-popup').magnificPopup({
		  	type: 'image',
		  		gallery: {
		      		enabled: true
		  		},
		  	zoom: {
		      	enabled: true,
		      	duration: 300, // don't foget to change the duration also in CSS
		      	opener: function(element) {
		          return element.find('img');
		      	}
		  	}
		});

	});
})(jQuery);