head.ready(function() {

	$(document).on("click", function(){
		$(".js-menu").removeClass("is-active");
		$("body").removeClass("no-scroll");
		$(".desktop body").css({
			marginRight: 0
		});
		$(".js-popup").addClass("is-visible-out");
		setTimeout(function() {
			$(".js-popup").removeClass("is-visible-out is-visible-in");
		},400);
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
	$(".js-close-menu").on("click", function(event){
		$(".js-menu").removeClass("is-active");
		$("body").removeClass("no-scroll");
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

	var slider = {
		slideToShow: 1,
		slideToScroll: 1,
		arrows: false,
		dots: true,
		adaptiveHeight: true,
		mobileFirst: true
	};
	$(".js-slider").slick(slider);

	var sliderArrows = {
		slideToShow: 1,
		slideToScroll: 1,
		arrows: true,
		dots: true,
		adaptiveHeight: true
	};
	$(".js-slider-arrows").slick(sliderArrows);

	$(".js-popup").on("click", function(event){
		event.stopPropagation();
	});


//  scroll width
	var div = document.createElement('div');

	div.style.overflowY = 'scroll';
	div.style.width = '50px';
	div.style.height = '50px';
	div.style.visibility = 'hidden';

	document.body.appendChild(div);
	var scrollWidth = div.offsetWidth - div.clientWidth;
	document.body.removeChild(div);

	

// open popup
	$(".js-toggle-popup").on("click", function(event){
		var popup = $("." + $(this).attr("data-popup"));
		popup.toggleClass("is-visible-in");
		$("body").toggleClass("no-scroll");
		$(".desktop body").css({
			marginRight: scrollWidth
		});
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
	    	var top = $(".js-fixed-box").offset().top;
	    	var left = $(".js-fixed-box").offset().left;
	    	var scroll = $(document).scrollTop();
	    	if (scroll >= top) {
	    		$(".js-fixed-box .box-wrap").addClass("is-fixed").css({
	    			left: left
	    		});
	    	}
	    	else {
	    		$(".js-fixed-box .box-wrap").removeClass("is-fixed").css({
	    			left: 0
	    		});
	    	}
	    }
	    fixBox();
	    $(window).scroll(function(){
	    	fixBox();
	    });
	    $(window).resize(function(){
	    	fixBox();
	    });
});