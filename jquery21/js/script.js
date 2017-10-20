$(document).ready(function () {   //загружается документ когда он готов выполняется функция
    $('#submit').on('click', function () {
        var a = {}, i=0, i1=0, i2=0, i3=0;
        if ($('#ch1').is(':checked')) {
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
                else i=1;
            }
            if (a.region == 0) alert('Выберите регион');
            else i1=1;
            if (a.sex === undefined) alert('Введите пол');
            else i2=1;
            if (a.withMe == -1) alert('Введите кол-во сопровождающих');
            else i3=1;
            if(i==1 && i1==1 && i2==1 && i3==1) alert('Все пиздец, теперь я тебя найду !!!');
        }
        else {
            alert('Приймите лицензионное соглашение!');
        }
    });
});
