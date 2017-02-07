$(function() {

	$('.owl-main-slider').owlCarousel({
		loop:true,
		margin:0,
		items:1,
		nav:true,
		dots:true
	});

	$('.gallery-pop-up').on("show.bs.modal", function(e){

		$('.owl-gallery-slider').owlCarousel({
			loop:true,
			margin:0,
			items:1,
			nav:true,
			dots:true
		});
	});

	$('.owl-article-slider').owlCarousel({
		stagePadding: 500,
		loop:true,
		margin:30,
		nav:true,
		items: 2,
		dots:false
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