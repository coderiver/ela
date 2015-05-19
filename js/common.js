head.ready(function() {

	$(document).on("click", function(){
		$(".js-menu").removeClass("is-active");
		$("body").removeClass("no-scroll");
		$(".js-popup").removeClass("is-visible");
	});

	// function scrollFixedElements() {
	//     var scroll_left = $(this).scrollLeft();
	//     $(".fixed-element").css({
	//         left: -scroll_left
	//     });
	// }
	// scrollFixedElements();
	// $(window).scroll(function(){
	//     scrollFixedElements()
	// });

	$(".js-toggle-menu").on("click", function(event){
		$(".js-menu").toggleClass("is-active");
		$("body").toggleClass("no-scroll");
		event.stopPropagation();
		return false;
	});
	$(".js-menu").on("click", function(event){
		event.stopPropagation();
	});
	$(".js-nav-main a[data-nav]").on("click", function(){
		var nav = $("."+$(this).attr("data-nav"));
		$(".js-nav-main").fadeOut(200);
		nav.fadeIn(200);
		$(this).toggleClass("is-active");
		return false;
	});
	$(".js-nav-back").on("click", function(){
		$(".js-nav").fadeOut(200);
		$(".js-nav-main").fadeIn(200);
		return false;
	});

	var slickSet = {
		slideToShow: 1,
		slideToScroll: 1,
		arrows: false,
		dots: true,
		adaptiveHeight: true,
		mobileFirst: true
	};
	$(".js-slider").slick(slickSet);

	$(".js-popup").on("click", function(event){
		event.stopPropagation();
	});

// open popup
	$(".js-toggle-popup").on("click", function(event){
		var popup = $("." + $(this).attr("data-popup"));
		popup.toggleClass("is-visible");
		event.stopPropagation();
		return false;
	});
    $(".js-popup").on("click", function(event){
        event.stopPropagation();
    });


	$(".js-clear-input").on("click", function(){
		$(this).parents(".js-form").find(".js-input").val("");
		$(this).fadeOut();
		return false;
	});

	$(".js-input").on("keyup", function(){
		if ($(this).val().length) {
			$(this).parents(".js-form").find(".js-clear-input").fadeIn();
		}
		else {
			$(this).parents(".js-form").find(".js-clear-input").fadeOut();
		}
		
	});
});