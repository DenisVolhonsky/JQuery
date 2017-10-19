//пользоваться офиц документацией

$(document).ready(function() {   //загружается документ когда он готов выполняется функция
	$('.acc-head').on('click', function() {
		// $('.acc-body').not( $(this)).slideUp(500); //исключить
		$('.acc-body').slideUp(500); //исключить
		$(this).next().slideToggle(1000);
	});
	
});

//https://www.w3schools.com/jquery/default.asp
// просмотреть все туториал