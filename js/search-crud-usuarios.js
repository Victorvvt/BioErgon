// se llama a los daos de usuario
$(document).ready(function () {
  function get() {
    $.ajax({
      type: "get",
      url: "http://localhost:8080/readUsuario",

      success: function (response) {

        let usuarios = response;
        let template = ``;
        usuarios.forEach(usuario => {
          template += `
                 <tr id="${usuario.idUsu}" >
                 <td>${usuario.idUsu}</td>
                 <td>${usuario.name}</td>
                 <td>${usuario.lName}</td>
                 <td>${usuario.gender}</td>
                 <td>${usuario.weight}</td>
                 <td>${usuario.height}</td>
                 <td>${usuario.actividades}</td>
                 <td>${usuario.years}</td>
                 <td>${usuario.horasDeEntrenoAFDiarias}</td>
                 <td>${usuario.lesionesPrevias}</td>
                 <td>${usuario.zonasAfectadasLesionesPrevias}</td>
                 <td><button class="btn btn-danger delete-usuario" >Eliminar</button></td>
                 <td><button class="btn btn-primary update-usuario" >Actualizar</button></td>
                 </tr>
               `
        });
        $('#res').html(template);

      }
    });
  }
  get();
  // se llama a datos de actividades

  $.ajax({

    type: "get",
    url: "http://localhost:8080/listaActividades",
    success: function (response) {

      let actividades = response;
      let template = ``;

      actividades.forEach(actividad => {

        template += `
         <label class="d-flex mx-2">${actividad.activityName}<input class="mx-2"  type="checkbox" name="actividades[]" id="checkbox" value=${actividad.activityName}></label>
          
             `
      });
      $('#resActivadades').html(template);

    }
  });

  // insert
  $('#form-usuarios').submit(function (e) {
    e.preventDefault();
    location.reload();
    let actividades = [];
    $('#checkbox:checked').each(function () {
      actividades.push($(this).val())
    })


    let postData = {
      name: $('#nombre').val(),
      lName: $('#apellido').val(),
      weight: $('#peso').val(),
      height: $('#altura').val(),
      gender: $('#sexo').val(),
      years: $('#años').val(),
      actividades: actividades,
      horasDeEntrenoAFDiarias: $('#horasEntreno').val(),
      lesionesPrevias: $('#lesionesPrevias').val(),
      zonasAfectadasLesionesPrevias: $('#zonasAfectadas').val(),

    }
    console.log(postData)
    $.ajax({
      url: "http://localhost:8080/crearUsuario",
      data: JSON.stringify(postData),
      type: "POST",
      contentType: 'application/json',

      success: function (response) {

      }
    });

  });
  // get();

  //   // search 
  //   $('#search').keyup(() => {
  //     if ($("#search").val()) {
  //       let search = $("#search").val();

  //       $.ajax({
  //         url: "http://localhost/Biergon1.0/php/php-usuarios/search-usuario.php",
  //         data: { search },
  //         type: "POST",
  //         success: function (response) {
  //           if (!response.error) {
  //             let usuarios = JSON.parse(response);
  //             let template = ``;
  //             usuarios.forEach(usuario => {
  //               template += `<tr id="${usuario.id}">
  //                     <td>${usuario.id}</td>
  //                     <td>${usuario.nombre}</td>
  //                     <td>${usuario.apellido}</td>
  //                     <td>${usuario.altura}</td>
  //                     <td>${usuario.actividad}</td>
  //                     <td>${usuario.sexo}</td>
  //                     <td>${usuario.peso}</td>
  //                     <td>${usuario.fecha}</td>
  //                     <td><button class="btn btn-danger delete-usuario" >Eliminar</button></td>
  //                   <td><button class="btn btn-primary update-usuario" >Actualizar</button></td>
  //                     </tr>`
  //             });
  //             $('#res').html(template);
  //           }
  //         }

  //       });
  //     } else {
  //       get()

  //     }

  //   });

  //delete
  $(document).on("click", ".delete-usuario", () => {

    const element = $(this)[0].activeElement.parentElement.parentElement;
    const id = $(element).attr('id')
    let postData = {
      idUsu: id
    }
    if (confirm(`¿Seguro quieres eliminiar el registro ${id} ?`)) {

      $.ajax({
        type: "delete",
        url: "http://localhost:8080/borrarUsuario/" + $id,
        data: JSON.stringify(postData),
        dataType: "application/json",
        success: function (response) {
          console.log(response)
        }
      });
    }
    get()
  })
  // select-id
  //   $(document).on("click", ".update-usuario", () => {

  //     const element = $(this)[0].activeElement.parentElement.parentElement;
  //     $('#form-usuarios').addClass("d-none")
  //     $('#form-actualizar').removeClass('d-none')
  //     const id = $(element).attr('id')
  //     $.post("http://localhost/Biergon1.0/php/php-usuarios/select-id-usuarios.php",
  //       { id },
  //       function (response) {
  //         const usuarios = JSON.parse(response)

  //         usuarios.forEach(usuario => {
  //           $('#id-U').val(usuario.id)
  //           $('#nombre-U').val(usuario.nombre)
  //           $('#apellido-U').val(usuario.apellido)
  //           $('#peso-U').val(usuario.peso)
  //           $('#altura-U').val(usuario.altura)
  //           $('#sexo-U').val(usuario.sexo)
  //           $('#actividad-U').val(usuario.actividad)
  //           $('#fecha-U').val(usuario.fecha)

  //           const idU = usuario.id;
  //           console.log(idU)
  //         });

  //       }
  //     );
  //   })
  //   // update
  //   $('#form-actualizar').submit(function (e) {

  //     e.preventDefault();
  //     location.reload();
  //     let dateUpdate = {
  //       id: $('#id-U').val(),
  //       nombre: $('#nombre-U').val(),
  //       apellido: $('#apellido-U').val(),
  //       peso: $('#peso-U').val(),
  //       altura: $('#altura-U').val(),
  //       sexo: $('#sexo-U').val(),
  //       actividad: $('#actividad-U').val(),
  //       fecha: $('#fecha-U').val()
  //     }
  //     $.ajax({
  //       type: "POST",
  //       url: "http://localhost/Biergon1.0/php/php-usuarios/update-usuarios.php",
  //       data: dateUpdate,
  //       success: function (response) {
  //         console.log("ok" + response)
  //       }
  //     });

  //   })
})

