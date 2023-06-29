$(document).ready(() => {
    //select
    
    function get() {

        $.ajax({
            type: "get",
            url: "http://localhost:8080/Actividades/listaActividad",

            success: function (response) {
           console.log(response)
                let actividades = response;
                templateActividades = ``;
               
                actividades.forEach(actividad => {
                     
                    templateActividades += `
                   
                      <tr id="${actividad.idAct}">
                      <td>${actividad.idAct}</td>
                      <td>${actividad.nombreAct}</td>
                      <td>${actividad.usuariosList}</td>
                      <td>${actividad.accionesList}</td>
                     
                      
                      
                      
                      <td><button class="btn btn-danger delete-actividad" >Eliminar</button></td>
                      <td><button class="btn btn-primary update-actividad" data-bs-toggle="modal"
                      data-bs-target="#crudActividades">Actualizar</button></td>
                      </tr>
                      `


                });
                $('#resActividades').html(templateActividades);

            }
        });

    }
    get()

       //LLAMADA USUARIOS
     let templateUsuario = ``;
     $.ajax({
         type: "GET",
         url: "http://localhost:8080/Usuarios/listaUsuario",
         success: function (response) {


             response.forEach(elemento => {

                 templateUsuario += `
            <li>${elemento.name}<input class="mx-2"  type="checkbox" name="usuarios[]" id="checkbox" value=${elemento.name}></li>

                `
             })
             $('#resUsuariosActividades').html(templateUsuario);
         }

     });


    //insert

    $('#btn-guardar-actividades').click(function (e) {
        e.preventDefault();

            let resUsuario = [];
           $('#checkbox:checked').each(function () {
               resUsuario.push({lastName:$(this).val()})
           
           })
       
        let postData = {
            nombreAct: $('#nombreActividades').val(),
             usuariosList: resUsuario


        }

        $.ajax({
            url: "http://localhost:8080/Actividades/crearActividad",
            data: postData,
            data: JSON.stringify(postData),
            type: "POST",
            contentType: 'application/json',
            success: function (response) {

                if (response) {
                    alert("guardado con exito")
                    location.reload()
                } else {
                    alert("Algo ha ido mal")
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
    //             let actividades = JSON.parse(response)
    //             let template = ``;
    //             actividades.forEach(actividad => {
    //                 template += `
    //                      <tr id"${actividad.id}">
    //                          <td>${actividad.id}</td>
    //                          <td>${actividad.nombre}</td>
    //                          <td><button class="btn btn-danger delete-actividad" >Eliminar</button></td>
    //                      <td><button class="btn btn-primary update-actividad" >Actualizar</button></td>
    //                      </tr>
    //                  `
    //             })
    //             $('#res').html(template)
    //         }
    //     });

    // });

    // delete
    $(document).on("click", ".delete-actividad", () => {

        const element = document.activeElement.parentElement.parentElement;
        const id = $(element).attr('id')
        if (confirm(`¿Seguro queires borrar el registro? ${id}`)) {
            $.ajax({
                type: "DELETE",
                url: `http://localhost:8080/Actividades/borrarActividad/${id}`,
                success: function (response) {
                    if ($.ajax()) {
                        location.reload()
                    }
                }
            });
        }


    })

    //select id
    $(document).on("click", ".update-actividad", () => {
        $('#form-actualizar-actividades').removeClass('d-none');

        $('#form-actividades').addClass('d-none');
        const element = document.activeElement.parentElement.parentElement;
        const id = $(element).attr('id')


        $.ajax({
            type: "get",
            url: `http://localhost:8080/Actividades/obtenerActividad/${id}`,
            data: { id },

            success: function (response) {
                const actividades = response



                $('#resUsuariosActividades-U').html(templateUsuario)
                $('#nombreActividad-U').val(actividades.nombreAct)
                $('#idActividades-U').val(actividades.idAct)

            }

        });

    })
    // update
    $('#btn-actualizar-actividades').click(function (e) {
        e.preventDefault();

        // let usuarios = [];
        // $('#checkbox:checked').each(function () {
        //     usuarios.push($(this).val())
        // })
        let id = $('#idActividades-U').val();
        upDate = {
            nombreAct: $('#nombreActividad-U').val()
        }
        $.ajax({
            type: "PUT",
            url: `http://localhost:8080/Actividades/actualizarActividad/${id}`,
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
