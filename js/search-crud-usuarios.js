
$(function () {
  function get() {
    $.ajax({
      type: "get",
      url: "http://localhost/Biergon1.0/php/php-usuarios/select-usuarios.php",

      success: function (response) {
        let usuarios = JSON.parse(response);
        let template = ``;
        usuarios.forEach(usuario => {
          template += `
                  <tr id="${usuario.id}">
                  <td>${usuario.id}</td>
                  <td>${usuario.nombre}</td>
                  <td>${usuario.apellido}</td>
                  <td>${usuario.sexo}</td>
                  <td>${usuario.peso}</td>
                  <td>${usuario.altura}</td>
                  <td>${usuario.actividad}</td>
                  <td>${usuario.fecha}</td>
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

  // insert
  $('#form-usuarios').submit(function (e) {
    e.preventDefault();
    location.reload();

    let postData = {
      nombre: $('#nombre').val(),
      apellido: $('#apellido').val(),
      peso: $('#peso').val(),
      altura: $('#altura').val(),
      sexo: $('#sexo').val(),
      actividad: $('#actividad').val(),
      fecha: $('#fecha').val()

    }
    $.ajax({
      url: "http://localhost/Biergon1.0/php/php-usuarios/insert-usuarios.php",
      data: postData,
      type: "POST",
      success: function (response) {
        
      }
    });

  });
  get();

  // search 
  $('#search').keyup(() => {
    if ($("#search").val()) {
      let search = $("#search").val();

      $.ajax({
        url: "http://localhost/Biergon1.0/php/php-usuarios/search-usuario.php",
        data: { search },
        type: "POST",
        success: function (response) {
          if (!response.error) {
            let usuarios = JSON.parse(response);
            let template = ``;
            usuarios.forEach(usuario => {
              template += `<tr id="${usuario.id}">
                    <td>${usuario.id}</td>
                    <td>${usuario.nombre}</td>
                    <td>${usuario.apellido}</td>
                    <td>${usuario.altura}</td>
                    <td>${usuario.actividad}</td>
                    <td>${usuario.sexo}</td>
                    <td>${usuario.peso}</td>
                    <td>${usuario.fecha}</td>
                    <td><button class="btn btn-danger delete-usuario" >Eliminar</button></td>
                  <td><button class="btn btn-primary update-usuario" >Actualizar</button></td>
                    </tr>`
            });
            $('#res').html(template);
          }
        }

      });
    } else {
      get()

    }

  });

  //delete
  $(document).on("click", ".delete-usuario", () => {

    const element = $(this)[0].activeElement.parentElement.parentElement;
    const id = $(element).attr('id')
    if (confirm(`¿Seguro quieres eliminiar el registro ${id} ?`)) {
      $.post("http://localhost/Biergon1.0/php/php-usuarios/delete-usuarios.php",
        { id },
        () => {

        }

      );
    }
    get()
  })
  // select-id
  $(document).on("click", ".update-usuario", () => {

    const element = $(this)[0].activeElement.parentElement.parentElement;
    $('#form-usuarios').addClass("d-none")
    $('#form-actualizar').removeClass('d-none')
    const id = $(element).attr('id')
    $.post("http://localhost/Biergon1.0/php/php-usuarios/select-id-usuarios.php",
      { id },
      function (response) {
        const usuarios = JSON.parse(response)

        usuarios.forEach(usuario => {
          $('#id-U').val(usuario.id)
          $('#nombre-U').val(usuario.nombre)
          $('#apellido-U').val(usuario.apellido)
          $('#peso-U').val(usuario.peso)
          $('#altura-U').val(usuario.altura)
          $('#sexo-U').val(usuario.sexo)
          $('#actividad-U').val(usuario.actividad)
          $('#fecha-U').val(usuario.fecha)

          const idU = usuario.id;
          console.log(idU)
        });

      }
    );
  })
  // update
  $('#form-actualizar').submit(function (e) {

    e.preventDefault();
    location.reload();
    let dateUpdate = {
      id: $('#id-U').val(),
      nombre: $('#nombre-U').val(),
      apellido: $('#apellido-U').val(),
      peso: $('#peso-U').val(),
      altura: $('#altura-U').val(),
      sexo: $('#sexo-U').val(),
      actividad: $('#actividad-U').val(),
      fecha: $('#fecha-U').val()
    }
    $.ajax({
      type: "POST",
      url: "http://localhost/Biergon1.0/php/php-usuarios/update-usuarios.php",
      data: dateUpdate,
      success: function (response) {
        console.log("ok" + response)
      }
    });

  })
})

