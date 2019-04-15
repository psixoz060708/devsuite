$(function() {
	var mobMenu = $('.menu-left');
	new WOW().init();
	$('.animate').addClass('active');
	$('.mob-icon').click(function(){	
		mobMenu.slideToggle({
 			duration: 500,
 			start: function() {
  			mobMenu.css({'display':'flex', 'flex-direction': 'column'});
 			}
		});
	});
});