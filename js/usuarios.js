$(document).ready(() => {

    // un submit del form
    $('form').submit((e) => {
        e.preventDefault();
        // reinicio mara recarga de datos
        location.reload();
        let nombre = $('#nombre').val();
        let apellido = $('#apellido').val();
        let peso = $('#peso').val();
        let altura = $('#altura').val();
        let sexo = $('#sexo').val();
        let actividades = $('#actividades').val();
        let fecha = $('#fecha').val();

        // mandan con un post los datos del formulario
        $.ajax({
            type: "POST",
            url: "http://localhost/BioErgon/php/C_Usuarios.php",
            data: {
                'nombre': nombre, 'apellido': apellido, 'peso': peso, 'altura': altura, 'sexo': sexo, 'actividades': actividades, 'fecha': fecha
            },
            dataType: "json",
            function(data) {
                console.log(data)
            }
        });

    });
    // obtine los datos con un get 
    $.ajax({
        type: "GET",
        url: "http://localhost/BioErgon/php/leerUsuarios.php",
        dataType: 'json',
        success: function (data) {
            console.log('data')
            // hacer un for each que recorre toso los datos obtenidos 
            $.each(data, function (index, element) {
                // con .html pintamos esos datos en el html..(se hace un .html y dentro se concatena la acción de pintado .html + lo que queremos pintar para que pinte
                //para que pinte todos los datos no solo el último de la iteración )
                $('#res').html($('#res').html() + `<tr><td>${element.id}</td><td>${element.nombre}</td><td>${element.apellido}</td><td>${element.sexo}</td>
                <td>${element.peso}</td><td>${element.altura}</td><td>${element.actividades}</td><td>${element.fecha}</td></tr>`);

            });
        }
    });


});









