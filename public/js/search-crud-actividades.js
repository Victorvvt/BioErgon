$(document).ready(() => {
   
$.ajax({
    type: "method",
    url: "url",
    data: "data",
    dataType: "dataType",
    success: function (response) {
        
    }
});
    //select

    // let usu = [];
    // $('#checkbox').each(function () {
    //     usu.push($(this).val())
    // })
    // console.log(usu);
    function get() {

        $.ajax({
            type: "get",
            url: "http://localhost:8080/listaActividades",

            success: function (response) {


                let actividades = response;
                template = ``;
                actividades.forEach(actividad => {
                    template += `
                      <tr id="${actividad.id}">
                      <td>${actividad.id}</td>
                      <td>${actividad.activityName}</td>
                      <td></td>
                      <td></td>
                      
                      <td><button class="btn btn-danger delete-actividad" >Eliminar</button></td>
                      <td><button class="btn btn-primary update-actividad" >Actualizar</button></td>
                      </tr>
                      `


                });
                $('#res').html(template);

            }
        });

    }
    get()

    // LLAMADA USUARIOS
 $.ajax({
        type: "get",
        url: "http://localhost:8080/readUsuario",
        success: function (response) {
          console.log(response)
            let templateUsuario = ``;
            response.forEach(elemento => {
                console.log(elemento.name)
                template += `<td>${elemento.idUsu}</td>`
                templateUsuario += `
          <label>${elemento.name}<input class="mx-2"  type="checkbox" name="usuarios[]" id="checkbox" value=${elemento.name}></label>

              `
            })
            $('#resUsuarios').html(templateUsuario);
        }
    });

    //insert
    $('#form-actividades').submit(function (e) {
        e.preventDefault();
        location.reload();

        let postData = {
            activityName: $('#nombre').val()

        }
        $.ajax({

            url: "http://localhost:8080/crearActividades",
            data: postData,
            data: JSON.stringify(postData),
            type: "POST",
            contentType: 'application/json',


            success: function (response) {

            }
        });

    });
    // get()
    // // search
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
    //                     <tr id"${actividad.id}">
    //                         <td>${actividad.id}</td>
    //                         <td>${actividad.nombre}</td>
    //                         <td><button class="btn btn-danger delete-actividad" >Eliminar</button></td>
    //                     <td><button class="btn btn-primary update-actividad" >Actualizar</button></td>
    //                     </tr>
    //                 `
    //             })
    //             $('#res').html(template)
    //         }
    //     });

    // });

    // // delete
    // $(document).on("click", ".delete-actividad", () => {
    //     location.reload()
    //     const element = document.activeElement.parentElement.parentElement;
    //     const id = $(element).attr('id')
    //     if (confirm(`¿Estas seguro de eliminar el registro? ${id}`)) {
    //         $.post(
    //             "http://localhost/Biergon1.0/php/php-actividades/delete-actividades.php",
    //             { id }

    //         )
    //     } else {
    //         alert("Revisa bien los archivos que queries eliminar ")
    //     }

    //     get()
    // })

    // // update

    // $(document).on("click", ".update-actividad", () => {

    //     $('#form-actividades').addClass('d-none');
    //     $('#form-actualizar').removeClass('d-none');
    //     const element = document.activeElement.parentElement.parentElement;
    //     const id = $(element).attr('id')
    //     $.ajax({
    //         type: "post",
    //         url: "http://localhost/Biergon1.0/php/php-actividades/select-id-actividades.php",
    //         data: { id },

    //         success: function (response) {
    //             const actividades = JSON.parse(response)
    //             actividades.forEach(actividad => {
    //                 $('#id-U').val(actividad.id)
    //                 $('#nombre-U').val(actividad.nombre)

    //             })

    //         }

    //     });

    // })

    // $('#form-actualizar').submit(function (e) {

    //     e.preventDefault();
    //     location.reload();
    //     let dateUpdate = {
    //         id: $('#id-U').val(),
    //         nombre: $('#nombre-U').val(),
    //     }
    //     $.ajax({
    //         type: "POST",
    //         url: "http://localhost/Biergon1.0/php/php-actividades/update-actividades.php",
    //         data: dateUpdate,
    //         success: function (response) {
    //             console.log("ok" + response)
    //         }
    //     });

})
