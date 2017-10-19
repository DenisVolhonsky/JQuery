//пользоваться офиц документацией

$(document).ready(function() {   //загружается документ когда он готов выполняется функция
	$('p').css('color', 'red'); //все параграфы
	$('div p').css({    //массив свойств css
		'color': 'red',
		'background': 'black'
	});
	$('p').on('click', go); //событие на все параграфы
	$('div').on('click', function() { //ананимная функц
		alert('work');
		$(this).off('click'); // отключить клик
	
	});
	$('.two').addClass('five'); //добавить класс
	console.log( $('#three').attr('id') ); //по атрибуту
	console.log( $('.two').attr('data') ); //возьмет только 1й эл коллекции
	console.log( $('p,div') ); //возьмет p и div все
	console.log( $('p,div').eq(1).css('color','yellow') ); //возьмет из всех p и div первый и закрасит

});

function go() {
	$(this).css('color', 'white');
}

