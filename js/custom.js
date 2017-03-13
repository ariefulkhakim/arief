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

	    // Smooth Scroll
		$('a.smooth-scroll').on("click", function (e) {
			e.preventDefault();
			var anchor = $(this);
			$('html, body').stop().animate({
			  scrollTop: $(anchor.attr('href')).offset().top - 50
			}, 1000);
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

		// Contact-Form
		$('#contact-form').on('submit', function(e) {
			var form = $(this),
				formdata = $(this).serialize(),
				chack = $('#form-chack');

			function reset_form(){
				$("#name").val('');
				$("#email").val('');
				$("#message").val('');
			} 

			$.ajax({
				url:  $(form).attr('action'),
				type: 'POST',
				data: formdata,
				success : function(text){
					if (text == "success"){
						$('#form-chack').fadeIn(400);
						reset_form();
						chack.text("Your message has been sent :)");
						chack.removeClass('error');
						chack.addClass('send');
						$('#form-chack').fadeOut(8000);
					} 
					else {
						$('#form-chack').fadeIn(400);
						reset_form();
						chack.text("Oops! something wrong.");
						chack.removeClass('send');
						chack.addClass('error');
						$('#form-chack').fadeOut(8000);
					}
				}
			});
			e.preventDefault();
		});	
	});
})(jQuery);