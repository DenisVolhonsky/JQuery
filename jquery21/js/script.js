$(document).ready(function() {   //загружается документ когда он готов выполняется функция
	$('#submit').on('click', function() {
	 //    if($('input').val().length===0 &&) $('option').attr("value") == 0) {
        //        alert('Заполните все поля!');
        //     }
        //     else alert('Ваша форма отправлена')
        var a={};
        if($('#ch1').is(':checked')){
            a.name=$('input[name=FirstName]').val();
            a.lastname=$('input[name=LastName]').val();
            a.age=$('#age').val();
            a.sex=$('input[name=sex]:checked').val();
            a.date=$('#date').val();
            a.vithMe=$('#sup option:selected').val();
            a.region=$('#region option:selected').val();
            a.tel=$('#tel').val();
            a.mail=$('#mail').val();
            console.log(a);
        }
        else{
            alert('Приймите соглашение');
        }
        for(var key in a) {
            if(a[key]==='')
                console.log('заполните все!');
        }
         });


});
