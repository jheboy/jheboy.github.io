$(document).ready(function(){
	// Scroll Change
	var scrollTop = 0;
	$(window).scroll(function(){
		scrollTop = $(window).scrollTop();
		if (scrollTop > 104) {
			$('.header').addClass("scrolled-nav");
		}else{
			$('.header').removeClass("scrolled-nav");
		}
	})

	// Smooth Scroll
	// Add smooth scrolling to all links
	$("a").on('click', function(event) {
		// Make sure this.hash has a value before overriding default behavior
		if (this.hash !== "") {
			// Prevent default anchor click behavior
			event.preventDefault();

			// Store hash
			var hash = this.hash;

			// Using jQuery's animate() method to add smooth page scroll
			// The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
			$('html, body').animate({
			scrollTop: $(hash).offset().top
			}, 500, function(){
		
			// Add hash (#) to URL when done scrolling (default click behavior)
			window.location.hash = hash;
			});
		} // End if
	});

	// Show / Hide Form
	$('.btn-contact-hide').on('click', function(){
		$('#contactModal').fadeOut(400);
	})
	$('.btn-contact-show').on('click', function(){
		$('#contactModal').fadeIn(400);
	})

	//Fade Overlay
	$( "#img-hover-1" ).hover(function() {
		$("#overlay-1").fadeIn(300);
		},function(){
		$("#overlay-1").fadeOut(300);
	});
	$( "#img-hover-2" ).hover(function() {
		$("#overlay-2").fadeIn(300);
		},function(){
		$("#overlay-2").fadeOut(300);
	});
	$( "#img-hover-3" ).hover(function() {
		$("#overlay-3").fadeIn(300);
		},function(){
		$("#overlay-3").fadeOut(300);
	});
	$( "#img-hover-4" ).hover(function() {
		$("#overlay-4").fadeIn(300);
		},function(){
		$("#overlay-4").fadeOut(300);
	});
	$( "#img-hover-5" ).hover(function() {
		$("#overlay-5").fadeIn(300);
		},function(){
		$("#overlay-5").fadeOut(300);
	});
	$( "#img-hover-6" ).hover(function() {
		$("#overlay-6").fadeIn(300);
		},function(){
		$("#overlay-6").fadeOut(300);
	});
	$( "#img-hover-7" ).hover(function() {
		$("#overlay-7").fadeIn(300);
		},function(){
		$("#overlay-7").fadeOut(300);
	});
	$( "#img-hover-8" ).hover(function() {
		$("#overlay-8").fadeIn(300);
		},function(){
		$("#overlay-8").fadeOut(300);
	});
	$( "#img-hover-9" ).hover(function() {
		$("#overlay-9").fadeIn(300);
		},function(){
		$("#overlay-9").fadeOut(300);
	});
});