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
  // LLAMADA ACTIVIDADES
  // let template se usara en el apartado update para tener en disposición todas las actividades
  let template = ``;
  $.ajax({

    type: "get",
    url: "http://localhost:8080/listaActividades",
    success: function (response) {
      let actividades = response;

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


  // search 
  
  $(document).on("click","#btn-buscar",() => {
    
      let nombre = $("#search").val();

      $.ajax({
        url: `http://localhost:8080/readNameSearch/${nombre}`,
        data: { nombre },
        type: "get",
        success: function (response) {
           console.log(response)
          if (!response.error) {
            
            let template = ``;
            
              template += ` <tr id="${response.idUsu}" >
              <td>${response.idUsu}</td>
              <td>${response.name}</td>
              <td>${response.lName}</td>
              <td>${response.gender}</td>
              <td>${response.weight}</td>
              <td>${response.height}</td>
              <td>${response.actividades}</td>
              <td>${response.years}</td>
              <td>${response.horasDeEntrenoAFDiarias}</td>
              <td>${response.lesionesPrevias}</td>
              <td>${response.zonasAfectadasLesionesPrevias}</td>
              <td><button class="btn btn-danger delete-usuario" >Eliminar</button></td>
              <td><button class="btn btn-primary update-usuario" >Actualizar</button></td>
              </tr>`
            
            $('#res').html(template);
          }
        }

      });
   

  });

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
        url: `http://localhost:8080/borrarUsuario/${id}`,
        data: JSON.stringify(postData),
        dataType: "application/json",
        success: function (response) {
          console.log(response)
        }
      });
    }
    location.reload();
    get()
  })
  // select-id
  $(document).on("click", ".update-usuario", () => {

    const element = $(this)[0].activeElement.parentElement.parentElement;
    $('#form-usuarios').addClass("d-none")
    $('#form-actualizar').removeClass('d-none')
    const id = $(element).attr('id')
    $.ajax({
      type: "get",
      url: `http://localhost:8080/readIdUsuario/${id}`,
      data: { id },

      success: function (response) {

        $('#resActivadades-U').html(template);
        $('#id-U').val(response.idUsu)
        $('#nombre-U').val(response.name)
        $('#apellido-U').val(response.lName)
        $('#peso-U').val(response.weight)
        $('#altura-U').val(response.height)
        $('#sexo-U').val(response.gender)
        $('#fecha-U').val(response.years)
        $('#horasEntreno-U').val(response.horasDeEntrenoAFDiarias)
        $('#lesionesPrevias-U').val(response.lesionesPrevias)
        $('#zonasAfectadas-U').val(response.zonasAfectadasLesionesPrevias)

      }
    });


  })
  // update
  $('#form-actualizar').submit(function (e) {
    e.preventDefault();
    location.reload();
    let actividades = [];
    $('#checkbox:checked').each(function () {
      actividades.push($(this).val())
    })

    let id = $('#id-U').val()
    let dateUpdate = {
      name: $('#nombre-U').val(),
      lName: $('#apellido-U').val(),
      weight: $('#peso-U').val(),
      height: $('#altura-U').val(),
      gender: $('#sexo-U').val(),
      years: $('#años-U').val(),
      actividades: actividades,
      horasDeEntrenoAFDiarias: $('#horasEntreno-U').val(),
      lesionesPrevias: $('#lesionesPrevias-U').val(),
      zonasAfectadasLesionesPrevias: $('#zonasAfectadas-U').val(),

    }
    console.log(dateUpdate)
    $.ajax({
      type: "PUT",
      url: `http://localhost:8080/actualizarUsuario/${id}`,
      data: JSON.stringify(dateUpdate),
      contentType: 'application/json',
      success: function (response) {
        console.log("ok" + response)
      }
    });

  })
})

