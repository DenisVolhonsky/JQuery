//пользоваться офиц документацией

$(document).ready(function() {   //загружается документ когда он готов выполняется функция
	// $('#hide').on('click', function(){
	// 	$('.test').hide(2000);
	// });
	// $('#show').on('click', function(){
	// 	$('.test').show(2000);
	// });
	// $('#toggle').on('click', function(){
	// 	$('.test').toggle(2000);
	// });
	// $('#hide').on('click', function(){
	// 	$('.test').slideUp(2000);
	// });
	// $('#show').on('click', function(){
	// 	$('.test').slideDown(2000);
	// });
	// $('#toggle').on('click', function(){
	// 	$('.test').slideToggle(2000);
	// });
	$('#hide').on('click', function(){
		$('.test').fadeOut(2000);
	});
	$('#show').on('click', function(){
		$('.test').fadeIn(2000);
	});
	$('#toggle').on('click', function(){
		$('.test').fadeToggle(2000);
	});
});
