head.ready(function() {

	// $(document).on("click", function(){
	// 	$(".js-popup").hide();
	// });

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

	$(".js-toggle-menu").on("click", function(){
		$(this).toggleClass("is-active");
		$(".js-menu").toggleClass("is-active");
		return false;
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
});