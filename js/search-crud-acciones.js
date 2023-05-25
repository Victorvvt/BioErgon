$(document).ready(() => {
    const nombre = $('#nombre').val();
console.log(nombre)
    // select
    function get() {
        $.ajax({
            type: "get",
            url: "http://localhost/Biergon1.0/php/php-acciones/select-acciones.php",

            success: function (response) {
                let actividades = JSON.parse(response);
                let template = ``;
                actividades.forEach(actividad => {
                    template += `
                        <tr id="${actividad.id}">
                        <td>${actividad.id}</td>
                        <td>${actividad.nombre}</td>
                        <td><button class="btn btn-danger delete-actividad" >Eliminar</button></td>
                        <td><button class="btn btn-primary update-actividad" >Actualizar</button></td>
                        </tr>
                        `


                });
                $('#res').html(template);

            }
        });

    }

    get();

    // insert
    $('#form-actividades').submit(function (e) {
        e.preventDefault();
        location.reload();

        let nombre = $('#nombre').val();
        $.ajax({

            type: "post",
            url: "http://localhost/Biergon1.0/php/php-acciones/insert-acciones.php",
            data: {nombre},

            success: function (response) {
                console.log(response)
            }
        });

    });
    get()
    // search
    $("#search").keyup(function (e) {
        let dato = $('#search').val();
        $.ajax({
            type: "post",
            url: "http://localhost/Biergon1.0/php/php-acciones/search-acciones.php",
            data: { dato },

            success: function (response) {
                let actividades = JSON.parse(response)
                let template = ``;
                actividades.forEach(actividad => {
                    template += `
                        <tr id"${actividad.id}">
                            <td>${actividad.id}</td>
                            <td>${actividad.nombre}</td>
                            <td><button class="btn btn-danger delete-actividad" >Eliminar</button></td>
                        <td><button class="btn btn-primary update-actividad" >Actualizar</button></td>
                        </tr>
                    `
                })
                $('#res').html(template)
            }
        });

    });
   
    // delete
    $(document).on("click", ".delete-actividad", () => {
        location.reload()
        const element = document.activeElement.parentElement.parentElement;
        const id = $(element).attr('id')
        if (confirm(`¿Estas seguro de eliminar el registro? ${id}`)) {
            $.post(
                "http://localhost/Biergon1.0/php/php-acciones/delete-acciones.php",
                { id }

            )
        } else {
            alert("Revisa bien los archivos que queries eliminar ")
        }

        get()
    })

    // update

    $(document).on("click", ".update-actividad", () => {

        $('#form-actividades').addClass('d-none');
        $('#form-actualizar').removeClass('d-none');
        const element = document.activeElement.parentElement.parentElement;
        const id = $(element).attr('id')
        $.ajax({
            type: "post",
            url: "http://localhost/Biergon1.0/php/php-acciones/select-id-acciones.php",
            data: { id },

            success: function (response) {
                const actividades = JSON.parse(response)
                actividades.forEach(actividad => {
                    $('#id-U').val(actividad.id)
                    $('#nombre-U').val(actividad.nombre)

                })

            }

        });

    })

    $('#form-actualizar').submit(function (e) {

        e.preventDefault();
        location.reload();
        let dateUpdate = {
          id: $('#id-U').val(),
          nombre: $('#nombre-U').val(),
        }
        $.ajax({
          type: "POST",
          url: "http://localhost/Biergon1.0/php/php-acciones/update-acciones.php",
          data: dateUpdate,
          success: function (response) {
            console.log("ok" + response)
          }
        });
    
      })
})