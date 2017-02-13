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

}());