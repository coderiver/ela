head.ready(function() {

	$(document).on("click", function(){

		if ($(".js-menu").hasClass("is-actvie")) {
			$(".js-menu").removeClass("is-active");
		}
		if ($(".js-popup").hasClass("is-visible-in")) {
			$(".js-popup").addClass("is-visible-out");
			$("body").removeClass("no-scroll");
			setTimeout(function() {
				$(".js-popup").removeClass("is-visible-out is-visible-in");
			},400);
			$(".js-overlay").fadeOut(500);
			$(".js-cart-overlay").hide();

		}
		
	});

	var config = {
	    easing: 'hustle',
	    reset:  false,
	    delay:  'onload',
	    vFactor: 0.10,
	    //enter:    'bottom',
	    move:     '0',
	    over:     '0.3s',
	    mobile:   false,
	    viewport: window.document.getElementById('out'),
	    //wait:     '0s',
	    //easing:   'ease',
	    //scale:    { direction: 'up', power: '0' }
	    complete: function( el ){
	    	var elClass = el.getAttribute('class');
	    	el.setAttribute('class', elClass+" is-animated");
	    }
	  }
	window.sr = new scrollReveal(config);
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
		$(".js-overlay").fadeToggle(500);
		event.stopPropagation();
		return false;
	});
	$(".js-close-menu").on("click", function(event){
		$(".js-menu").removeClass("is-active");
		$(".js-overlay").fadeOut(500);
		$("body").removeClass("no-scroll");
		event.stopPropagation();
		return false;
	});
	$(".js-menu").on("click", function(event){
		event.stopPropagation();
	});
	$(".js-nav-root a[data-nav]").on("click", function(){
		var nav = $("."+$(this).attr("data-nav"));
		$(".js-nav-root").fadeOut(200);
		nav.fadeIn(200);
		$(this).toggleClass("is-active");
		return false;
	});
	$(".js-nav-back").on("click", function(){
		$(".js-nav").fadeOut(200);
		$(".js-nav-root").fadeIn(200);
		return false;
	});

	$(".js-nav a[data-nav]").on("click", function(){
		var nav = $("."+$(this).attr("data-nav"));
		$(this).parents(".js-nav-main").fadeOut(200);
		nav.fadeIn(200);
		$(this).toggleClass("is-active");
		return false;
	});

	$(".js-subnav-back").on("click", function(){
		$(".js-subnav").fadeOut(200);
		$(this).parents(".js-nav").find(".js-nav-main").fadeIn(200);
		return false;
	});

	var slider = {
		slideToShow: 1,
		slideToScroll: 1,
		arrows: false,
		dots: true,
		adaptiveHeight: true,
		mobileFirst: true
	};
	$('.js-slider').on('init', function(slick) {
		  setTimeout(function(){
		  	$('.js-slider').addClass("is-ready");
		  },200);
	});
	$(".js-slider").slick(slider);

	var sliderArrows = {
		slideToShow: 1,
		slideToScroll: 1,
		arrows: true,
		dots: true,
		adaptiveHeight: true
	};
	$(".js-slider-arrows").slick(sliderArrows);


	

// open popup
	$(".js-toggle-popup").on("click", function(event){
		var popup = $("." + $(this).attr("data-popup"));
		popup.toggleClass("is-visible-in");
		if (!$(this).hasClass("btn_cart")) {
			$(".js-overlay").fadeToggle(500);
		}
		if ($(this).hasClass("btn-search")) {
			popup.find("input").focus();
		}
		$(".js-cart-overlay").toggle();
		$("body").toggleClass("no-scroll");
		// $(".desktop body").css({
		// 	marginRight: scrollWidth
		// });
		event.stopPropagation();
		return false;
	});
    $(".js-popup .popup__in").on("click", function(event){
        event.stopPropagation();
    });
    $(".js-popup .popup__vertical").on("click", function(event){
        event.stopPropagation();
    });
    $(".js-cart").on("click", function(event){
        event.stopPropagation();
    });

    $(".js-close-popup").on("click", function(event){
		$("body").removeClass("no-scroll");
		// $(".desktop body").css({
		// 	marginRight: scrollWidth
		// });
		$(".js-overlay").fadeOut(500);
		$(".js-cart-overlay").hide();
		$(".js-popup").addClass("is-visible-out");
		setTimeout(function() {
			$(".js-popup").removeClass("is-visible-out is-visible-in");
		},400);
		event.stopPropagation();
		return false;
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

	// validation form
		function validate() {
			$('.js-validate').each(function(){
				if ($(this).length > 0) {
					$(this).validate({
						errorClass: 'has-error',
						rules: {
							username: {
								minlength: 2
							},
							any: {
								minlength: 2
							},
							password: {
								minlength: 5
							},
							confirm_password: {
								minlength: 5,
								equalTo: '#password'
							},
							email: {
								email: true
							},
							tel: {
								minlength: 2,
							},
							address: {
								minlength: 2
							},
							message: {
								minlength: 4
							},
							field: {
								required: true
							},
							// fruit: {
							//   required: true
							// }
						}
						// messages: {
						// 	firstname: 'Вас так зовут?',
						// 	lastname: 'У вас такая фамилия?',
						// 	fathername: 'У вас такое отчество?',
						// 	password: {
						// 		required: 'Введите пароль',
						// 		minlength: 'Минимум 5 символов'
						// 	},
						// 	confirm_password: {
						// 		 required: 'Пароли не совпадают',
						// 		 minlength: 'Минимум 5 символов',
						// 		 equalTo: 'Пароли не совпадают'
						// 	},
						// 	email: 'Неверный формат',
						// 	address: 'Это Ваш адрес?',
						// 	any: 'Заполните поле',
						// 	company: 'Заполните поле',
						// 	tel: {
						// 		required: 'Заполните поле',
						// 	},
						// 	message: {
						// 		required: 'Заполните поле',
						// 		minlength: 'Заполните поле'
						// 	}
						// }
					});
				}
			});
		}
			
		validate();

		$(".js-btn-submit").on("click", function(){
			var form = $(this).parents(".js-validate");
			var steps = $('.js-popup');
			var step = $('.js-popup[data-step="'+$(this).attr("data-step")+'"]');
			if (form.valid()) {
				steps.removeClass("is-visible-in");
				step.addClass("is-visible-in");
				// server answer
				return false;
			}
			else {
				return false;
			}
		});

		$(".js-next-step").on("click", function(){
			var steps = $('.js-popup');
			var step = $('.js-popup[data-step="'+$(this).attr("data-step")+'"]');
			steps.removeClass("is-visible-in");
			step.addClass("is-visible-in");
			return false;
		});

		$(".js-prev-step").on("click", function(){
			if ($(this).parent().hasClass("is-active") && !$(this).parent().hasClass("is-current")) {
				var steps = $('.js-popup');
				var step = $('.js-popup[data-step="'+$(this).attr("data-step")+'"]');
				steps.removeClass("is-visible-in");
				step.addClass("is-visible-in");
				return false;
			}
			return false;
		});
		$(".js-btn-remove").on("click", function(){
			$(this).parents(".js-parent").remove();
			return false;
		});

		$(".js-close-cart").on("click", function(){
			$(".js-popup").removeClass("is-visible-in");
			$("body").removeClass("no-scroll");
			$(".js-cart-overlay").hide();
			return false;
		});

		$(".js-payment").on("click", function(){
			$(".js-payment").removeClass("is-active");
			$(this).addClass("is-active");
			if ($(this).hasClass(".js-payment-cash")) {
				$(this).parents(".js-popup").find(".js-step-link").hide();
				$(this).parents(".js-popup").find(".js-next-step").show();
			}
			else {
				$(this).parents(".js-popup").find(".js-step-link").show();
				$(this).parents(".js-popup").find(".js-next-step").hide();
			}
			return false;
		});

		function number() { 
	        var number = $(".js-number");
	        number.each(function(){
	            var max_number = +($(this).attr("data-max-number"));
	            var input = $(this).find("input");
	            var plus = $(this).find(".js-plus-number");
	            var minus = $(this).find(".js-minus-number");
	            plus.on("click", function(){
	                var val = +(input.val());
	                if (val >= max_number) {
	                    return false
	                }
	                else {
	                    val += 1;
	                    input.val(val);
	                }
	            });
	            minus.on("click", function(){
	                var val = +(input.val());
	                if (val > 1) {
	                    val -= 1;
	                    input.val(val);
	                }
	                return false;
	            });
	            input.on("change", function(){
	                var val = +$(this).val();
	                if (val > max_number) {
	                    val = max_number;
	                    $(this).val(val);
	                }
	                if (val == '') {
	                    val = 1;
	                    $(this).val(val);
	                }
	            });
	        });
	    }
	    number();


	    function fixBox() {
	    	if ($(".js-fixed-box").length) {
	    		var top = + $(".js-section").offset().top;
	    		var left = + $(".js-fixed-box").offset().left;
	    		var bottom = + $(".js-section-trigger").position().top;
	    		var boxHeight = + $(".box-wrap").outerHeight()+80;
	    		var boxTop = 64;
	    	}
	    	
	    	var scroll = $(document).scrollTop();
	    	console.log(bottom-boxHeight);
	    	if (bottom-boxHeight <= 0) {
	    		$(".js-fixed-box .box-wrap").css({
	    			left: left,
	    			top: bottom-boxHeight+boxTop
	    		});
	    	}

	    	if (bottom-boxHeight > 0) {
	    		if (scroll >= top) {
	    			$(".js-fixed-box .box-wrap").addClass("is-fixed").css({
	    				left: left,
	    				top: boxTop
	    			});
	    		}
	    		else {
	    			$(".js-fixed-box .box-wrap").removeClass("is-fixed is-abs").css({
	    				left: 0,
	    				top: 0
	    			});
	    		}
	    	}
	    		    	
	    	
	    }
	    fixBox();
	    $(".out").scroll(function(){
	    	fixBox();
	    });
	    $(window).resize(function(){
	    	fixBox();
	    });

		


	   $(".js-select select").on("change", function(){
	        var val = $(this).val();
	        $(this).parents(".js-select").find(".js-select-text").text(val);
	    });

	$(".js-show-btn").on("click", function(){
		$(".js-btn-cart").addClass("is-visible");
		return false;
	});
});