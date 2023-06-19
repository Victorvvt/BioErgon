// se llama a los datos de usuario
$(document).ready(function () {
  function get() {
    $.ajax({
      type: "get",
      url: "http://localhost:8080/Usuarios/listaUsuario",

      success: function (response) {
        console.log(response)
        let usuarios = response;
        let template = ``;
        usuarios.forEach(usuario => {
          template += `
               <tr id="${usuario.id}" >
               <td>${usuario.id}</td>
               <td>${usuario.name}</td>
               <td>${usuario.lastName}</td>
               <td>${usuario.gender}</td>
               <td>${usuario.weight}</td>
               <td>${usuario.height}</td>
               <td>${usuario.actividadesList}</td>
               <td>${usuario.years}</td>
               <td>${usuario.horasDeEntrenoAFDiarias}</td>
               <td>${usuario.lesionesPrevias}</td>
               <td>${usuario.zonasAfectadasLesionesPrevias}</td>
               <td><button class="btn btn-danger delete-usuario" >Eliminar</button></td>
               <td><button class="btn btn-primary update-usuario" data-bs-toggle="modal" data-bs-target="#crudUsuarios" >Actualizar</button></td>
               </tr>
             `
        });
        $('#resCRUD').html(template);

      }
    });
  }
   get();
  // // LLAMADA ACTIVIDADES
  // // let template se usara en el apartado update para tener en disposición todas las actividades
  // let template = ``;
  // $.ajax({

  //   type: "get",
  //   url: "http://localhost:8080/Actividades/listaActividad",
  //   success: function (response) {
  //     let actividades = response;

  //     actividades.forEach(actividad => {

  //       template += `
         
  //        <li><label class="d-flex mx-2">${actividad.nombre}<input class="mx-2"  type="checkbox" name="actividades[]" id="checkbox" value=${actividad.nombre}></label></li>
  //            `
  //     });
  //     $('#resActivadades').html(template);

  //   }
  // });

  // insert
  // $('#btn-guardar-usuarios').click(function (e) {
  //   e.preventDefault();

  //   let actividadesList = [];
  //   $('#checkbox:checked').each(function () {
  //     actividadesList.push($(this).val())
  //   })


  //   let postData = {
  //     name: $('#nombre').val(),
  //     lastName: $('#apellido').val(),
  //     weight: $('#peso').val(),
  //     height: $('#altura').val(),
  //     gender: $('#sexo').val(),
  //     years: $('#años').val(),
  //     actividadesList: actividadesList,
  //     horasDeEntrenoAFDiarias: $('#horasEntreno').val(),
  //     lesionesPrevias: $('#lesionesPrevias').val(),
  //     zonasAfectadasLesionesPrevias: $('#zonasAfectadas').val(),

  //   }
  //   console.log(postData)
  //   $.ajax({
  //     url: "http://localhost:8080/Usuarios/crearUsuario",
  //     data: JSON.stringify(postData),
  //     type: "POST",
  //     contentType: 'application/json',

  //     success: function (response) {
  //       console.log(response)
  //       if (response) {
  //         alert('Guardado con exito');
  //         location.reload()
  //       }

  //     }
  //   });

  // });


  // // search 

  // $(document).on("click", "#btn-buscar", () => {

  //   let nombre = $("#search").val();

  //   $.ajax({
  //     url: `http://localhost:8080/readNameSearch/${nombre}`,
  //     data: { nombre },
  //     type: "get",
  //     success: function (response) {

  //       if (!response.error) {

  //         let template = ``;

  //         template += ` <tr id="${response.id}" >
  //             <td>${response.id}</td>
  //             <td>${response.name}</td>
  //             <td>${response.lastName}</td>
  //             <td>${response.gender}</td>
  //             <td>${response.weight}</td>
  //             <td>${response.height}</td>
  //             <td>${response.actividadesList}</td>
  //             <td>${response.years}</td>
  //             <td>${response.horasDeEntrenoAFDiarias}</td>
  //             <td>${response.lesionesPrevias}</td>
  //             <td>${response.zonasAfectadasLesionesPrevias}</td>
  //             <td><button class="btn btn-danger delete-usuario" >Eliminar</button></td>
  //             <td><button class="btn btn-primary update-usuario" >Actualizar</button></td>
  //             </tr>`

  //         $('#res').html(template);
  //       }
  //     }

  //   });


  // });

  // //delete
  // $(document).on("click", ".delete-usuario", (e) => {
  //   e.preventDefault()

  //   const element = $(this)[0].activeElement.parentElement.parentElement;
  //   const id = $(element).attr('id')

  //   if (confirm(`¿Seguro quieres eliminiar el registro ${id} ?`)) {

  //     $.ajax({
  //       type: "delete",
  //       url: `http://localhost:8080/Usuarios/borrarUsuario/${id}`,

  //       success: function (response) {
  //         if ($.ajax()) {
  //           location.reload()
  //         }
  //       }
  //     });
  //   }

  //   get()
  // })
  // // select-id
  // $(document).on("click", ".update-usuario", () => {

  //   const element = $(this)[0].activeElement.parentElement.parentElement;
  //   $('#form-usuarios').addClass("d-none")
  //   $('#form-actualizar').removeClass('d-none')
  //   const id = $(element).attr('id')

  //   $.ajax({
  //     type: "get",
  //     url: `http://localhost:8080/Usuarios/obtenerUsuario/${id}`,
  //     data: { id },

  //     success: function (response) {
  //       console.log(response.name)
  //       $('#resActivadades-U').html(template);
  //       $('#id-U').val(response.id)
  //       $('#nombre-U').val(response.name)
  //       $('#apellido-U').val(response.lastName)
  //       $('#peso-U').val(response.weight)
  //       $('#altura-U').val(response.height)
  //       $('#sexo-U').val(response.gender)
  //       $('#fecha-U').val(response.years)
  //       $('#horasEntreno-U').val(response.horasDeEntrenoAFDiarias)
  //       $('#lesionesPrevias-U').val(response.lesionesPrevias)
  //       $('#zonasAfectadas-U').val(response.zonasAfectadasLesionesPrevias)

  //     }
  //   });


  // })
  // // update
  // $('#form-actualizar').submit(function (e) {
  //   e.preventDefault();
  //   let actividades = [];
  //   $('#checkbox:checked').each(function () {
  //     actividades.push($(this).val())
  //   })

  //   let id = $('#id-U').val()
  //   let dateUpdate = {
  //     name: $('#nombre-U').val(),
  //     lastName: $('#apellido-U').val(),
  //     weight: $('#peso-U').val(),
  //     height: $('#altura-U').val(),
  //     gender: $('#sexo-U').val(),
  //     years: $('#años-U').val(),
  //     actividades: actividades,
  //     horasDeEntrenoAFDiarias: $('#horasEntreno-U').val(),
  //     lesionesPrevias: $('#lesionesPrevias-U').val(),
  //     zonasAfectadasLesionesPrevias: $('#zonasAfectadas-U').val(),

  //   }

  //   $.ajax({
  //     type: "PUT",
  //     url: `http://localhost:8080/Usuarios/actualizarUsuario/${id}`,
  //     data: JSON.stringify(dateUpdate),
  //     contentType: 'application/json',
  //     success: function (response) {
  //       if (response) {
  //         alert("Actualizado con exito")
  //         location.reload()
  //       }
  //     }
  //   });

  // })
  // // MUESTRA EL FORMULARIO GUARDAR AL PRESIONAR BOTON USUARIOS
  // $('#btn-modal-usuarios').click(function (e) {
  //   e.preventDefault();
  //   $('#form-actualizar').addClass("d-none")
  //   $('#form-usuarios').removeClass('d-none')
  // });

})

