$(document).ready(function() {   //загружается документ когда он готов выполняется функция
	$('#submit').on('click', function() {
        var a={};
        if($('#ch1').is(':checked')) {
            a.name = $('input[name=FirstName]').val();
            a.lastname = $('input[name=LastName]').val();
            a.age = $('#age').val();
            a.sex = $('input[name=sex]:checked').val();
            a.date = $('#date').val();
            a.withMe = $('#sup option:selected').val();
            a.region = $('#region option:selected').val();
            a.tel = $('#tel').val();
            a.mail = $('#mail').val();
            console.log(a);

            for (var key in a) {
                if (a[key] == '') alert('Заполните поле:' + key);
            }
            if (a.region == 0) alert('Выберите регион');
            if (a.sex === undefined) alert('Введите пол');
            if (a.withMe== -1) alert('Введите кол-во сопровождающих');
        }
        else{
            alert('Приймите лицензионное соглашение!');
        }


    });
});
