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

	// $('textarea').on("keyup", function(e){
	// 	this.style.height = "1px";
	// 	this.style.height = (5+this.scrollHeight)+"px";
	// 	this.scrollHeight > 60 ? this.style.overflow = "auto" : this.style.overflow = "hidden";
	// });

}());