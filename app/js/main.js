$(function() {

	$('.owl-main-slider').owlCarousel({
		loop:true,
		margin:50,
		items:1,
		nav:true,
		dots:true,
		singleItem : true
	});

	/*** gallery ***/

	$('.gallery-pop-up').on("show.bs.modal", function(e){
		setTimeout(function(){

			$('.owl-gallery-slider').owlCarousel({
				loop:true,
				margin:0,
				items:1,
				nav:true,
				dots:true,
				singleItem:true
			});

			var items = $('.gallery-pop-up .owl-dot');
			var counts = items.length;
			var active = $('.gallery-pop-up .owl-dots').find('.active').index();

			$('.owl-gallery-sliders-count__all').text(counts);
			$('.owl-gallery-sliders-count__current').text(active+1);

			$('.owl-gallery-slider').on('changed.owl.carousel', function(e){
				active = $('.gallery-pop-up .owl-dots').find('.active').index();
				$('.owl-gallery-sliders-count__current').text(active+1);
			});

		}, 300);
	});


	/**** article-slider ***/

	$('.owl-article-slider').owlCarousel({
		loop:true,
		margin:30,
		nav:true,
		items: 2,
		dots:false,
		responsive:{
			0:{
				stagePadding: 0,
				items:1
			},
			768:{
				stagePadding: 0,
				items:2
			},
			992:{
				stagePadding: 500
			}
		}
	})

	/***** forms ****/

	var materialForm = function() {
		$('.material-field').focus(function() {
			$(this).closest('.form-group-material').addClass('focused has-value');
		}).focusout(function() {
			$(this).closest('.form-group-material').removeClass('focused');
		}).blur(function() {
			if (!this.value) {
				$(this).closest('.form-group-material').removeClass('has-value');
			}
			$(this).closest('.form-group-material').removeClass('focused');
		});
	};

	materialForm();

	/******************
	**  validation   **
	******************/


	var validation = (function(){

		var inputs = $("form").find('input, textarea'); //инпуты в формах

		var init = function(){
			setUpListeners();
		};

		var setUpListeners = function(){
			inputs.on('keydown', function(e){ 	        //удаляем ошибки при нажатии клавишь на поле ввода
				var $this = $(this);
				$this.parent().removeClass('error');
			});

			$("form").on("submit", function(e){
				e.preventDefault();

				( isValid($(this)) ) ? console.log("well done!") : console.log("valid fail!");
			});
		};

		function isValid(thisForm){

			var isValid = true;

			thisForm.find('input, textarea').each(function(i){

				var $this = $(this),
				thisVal = $this.val();

				if ($this.prop('required')) {

					if ($this.is('input[type="email"]')) {

						if (validateEmail(thisVal)) {

							$this.parent().removeClass('error');
							return isValid = true;

						} else {

							$this.parent().addClass('error');
							return isValid = false;
						}

					}

					if (!thisVal.trim()) {

						$this.parent().addClass('error');
						return isValid = false;

					} else {

						$this.parent().removeClass('error');
						return isValid = true;

					}	

				}

			});

			return isValid;
		};

		function validateEmail(email){
			var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
			return re.test(email);
		};

		return {
			init:init
		}
	}());

	$(document).ready(function(){
		validation.init();
	});

}());