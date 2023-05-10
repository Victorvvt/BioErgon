
$(document).ready(() => {

    $('form').submit((e) => {
        e.preventDefault();
        location.reload();
        let nombre = $('#nombreA').val();
       console.log("vamos bien" + nombre)


       $.ajax({
        type: "POST",
        url: "http://localhost/BioErgon/php/C_Actividades.php",
        data:{
            'nombre':nombre
        },
        dataType:"json",
        function (data1) {
            console.log(data1)
        }
       });

    });

    $.ajax({
        type: "GET",
        url: "http://localhost/BioErgon/php/R_Actividades.php",
        dataType: 'json',
        success: function (data) {
            console.log('data')
            $.each(data, function (index, element) {

                $('#res').html($('#res').html() + `<tr><td>${element.id}</td><td>${element.nombre}</td></tr>`);
                 
            });
        }
    });


});









