$(document).ready(() => {
    //select

    // let usu = [];
    // $('#checkbox').each(function () {
    //     usu.push($(this).val())
    // })
    // console.log(usu);
    function get() {

        $.ajax({
            type: "GET",
            url: "http://localhost:8080/Action/listaAccion",

            success: function (response) {

               
                let acciones = response;
                templateAcciones = ``;
                acciones.forEach(accion => {
                    templateAcciones += `
                   
                      <tr id="${accion.id}">
                      <td>${accion.id}</td>
                      <td>${accion.nombre}</td>
                     
                      
                      
                      <td><button class="btn btn-danger delete-accion" >Eliminar</button></td>
                      <td><button class="btn btn-primary update-accion" data-bs-toggle="modal"
                      data-bs-target="#crudAcciones">Actualizar</button></td>
                      </tr>
                      `


                });
                
                $('#resAcciones').html(templateAcciones);

            }
        });

    }
    get()

    // // // LLAMADA USUARIOS
    // let templateUsuario = ``;
    // $.ajax({
    //     type: "GET",
    //     url: "http://localhost:8080/Usuarios/listaUsuario",
    //     success: function (response) {


    //         response.forEach(elemento => {

    //             templateUsuario += `
    //        <li>${elemento.name}<input class="mx-2"  type="checkbox" name="usuarios[]" id="checkbox" value=${elemento.name}></li>

    //            `
    //         })
    //         $('#resUsuariosActividades').html(templateUsuario);
    //     }

    // });


    //insert

    $('#btn-guardar-accion').click(function (e) {
        e.preventDefault();

        // let usuariosList = [];
        // $('#checkbox').each(function () {
        //     usuariosList.push($(this).val())
        // })
        let postData = {
            nombre: $('#nombreAccion').val(),
            // usuariosList: usuariosList
        }
        console.log(postData)
        $.ajax({
            url: "http://localhost:8080/Action/crearAccion",
            data: postData,
            data: JSON.stringify(postData),
            type: "POST",
            contentType: 'application/json',
            success: function (response) {
                console.log(response)
                if (response) {
                    alert("guardado con exito")
                    location.reload()
                }
            }
        });

    });

    get()
    // search
    // $("#search").keyup(function (e) {
    //     let dato = $('#search').val();
    //     $.ajax({
    //         type: "post",
    //         url: "http://localhost/Biergon1.0/php/php-actividades/search-actividades.php",
    //         data: { dato },

    //         success: function (response) {
    //             let acciones = JSON.parse(response)
    //             let template = ``;
    //             acciones.forEach(accion => {
    //                 template += `
    //                      <tr id"${accion.id}">
    //                          <td>${accion.id}</td>
    //                          <td>${accion.nombre}</td>
    //                          <td><button class="btn btn-danger delete-accion" >Eliminar</button></td>
    //                      <td><button class="btn btn-primary update-accion" >Actualizar</button></td>
    //                      </tr>
    //                  `
    //             })
    //             $('#res').html(template)
    //         }
    //     });

    // });

    // delete
    $(document).on("click", ".delete-accion", () => {

        const element = document.activeElement.parentElement.parentElement;
        const id = $(element).attr('id')
        if (confirm(`¿Seguro queires borrar el registro? ${id}`)) {
            $.ajax({
                type: "DELETE",
                url: `http://localhost:8080/Action/borrarAccion/${id}`,
                success: function (response) {
                    if ($.ajax()) {
                        location.reload()
                    }
                }
            });
        }





    })

    //select id
    $(document).on("click", ".update-accion", () => {
        $('#form-actualizar-acciones').removeClass('d-none');

        $('#form-acciones').addClass('d-none');
        const element = document.activeElement.parentElement.parentElement;
        const id = $(element).attr('id')


        $.ajax({
            type: "get",
            url: `http://localhost:8080/Action/obtenerAccion/${id}`,
            data: { id },

            success: function (response) {
                const actividades = response

                console.log(actividades.nombre)


                $('#nombreAccion-U').val(actividades.nombre)
                $('#idAccion-U').val(actividades.id)

            }

        });

    })
    // update
    $('#btn-actualizar-acciones').click(function (e) {
        e.preventDefault();

        // let usuarios = [];
        // $('#checkbox:checked').each(function () {
        //     usuarios.push($(this).val())
        // })
        let id = $('#idAcciones-U').val();
        upDate = {
            nombre: $('#nombreAccion-U').val()
        }
        $.ajax({
            type: "PUT",
            url: `http://localhost:8080/Action/actualizarAccion/${id}`,
            data: JSON.stringify(upDate),
            contentType: 'application/json',
            success: function (response) {
                if (response) {
                    alert("Actualizado con exito")
                    location.reload();
                }
            }

        });





    })
    $('#btn-modal-actividades').click(function (e) {
        e.preventDefault();
        $('#form-actualizar-actividades').addClass("d-none")
        $('#form-actividades').removeClass('d-none')
    });

})
