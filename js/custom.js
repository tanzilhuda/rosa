$(document).ready(function(){
	/* ========== Background image height equal to the browser height.==========*/
	$('#intro').css({ 'height': $(window).height() });
  	$(window).on('resize', function() {
        $('#intro').css({ 'height': $(window).height() });
  	 });
});


/*================================
 back to top scroll
===================================*/
$(document).ready(function(){
     $(window).scroll(function () {
            if ($(this).scrollTop() > 50) {
                $('#back-to-top').fadeIn(300);
            } else {
                $('#back-to-top').fadeOut(300);
            }
        });
        // scroll body to 0px on click
        $('#back-to-top').click(function () {
            $('#back-to-top').tooltip('hide');
            $('body, html').animate({
                scrollTop: 0
            }, 200);
            return false;
        });
        
        $('#back-to-top').tooltip('show');

});


/*================================
 parallax
===================================*/
$(document).ready(function(){
	$('#para-bg-lax').parallax("50%", 0.3);
	   $('#recipies').parallax("50%", 0.3);
	      $('#blend').parallax("50%", 0.3);
	  $('#drink-img').parallax("50%", 0.3);
	  $('#menu-intro').parallax("0%", 0.3);
	 $('#section-img').parallax("-80%");
});





/*================================
 #datepicker
===================================*/





/*================================
 another
===================================*/
(function ($) {

	new WOW().init();

	jQuery(window).load(function() { 
		jQuery("#preloader").delay(100).fadeOut("slow");
	});


	//jQuery to collapse the navbar on scroll
	$(window).scroll(function() {
		if ($(".navbar").offset().top > 150) {
			$(".navbar-fixed-top").addClass("top-nav-collapse");
		} else {
			$(".navbar-fixed-top").removeClass("top-nav-collapse");
		}
	});

	//jQuery for page scrolling feature - requires jQuery Easing plugin
	$(function() {
		$('.navbar-nav li a').bind('click', function(event) {
			var $anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $($anchor.attr('href')).offset().top
			}, 1000, 'easeInOutExpo');
			event.preventDefault();
		});
		$('.page-scroll a , a').bind('click', function(event) {
			var $anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $($anchor.attr('href')).offset().top
			}, 1000, 'easeInOutExpo');
			event.preventDefault();
		});

		$('#back-to-top').bind('click', function(event) {
			var $anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $($anchor.attr('href')).offset().top
			}, 1000, 'easeInOutExpo');
			event.preventDefault();
		});
	});

})(jQuery);
