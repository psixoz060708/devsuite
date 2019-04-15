$(function() {
	var mobMenu = $('.menu__href-block');
	new WOW().init();
	$('.animate').addClass('active');
	$('.menu__mob-meny-button').click(function(){
		mobMenu.slideToggle({
 			duration: 500,
 			start: function() {
  			mobMenu.css({'display':'flex', 'flex-direction': 'column'});
 			}
		});
	});
});