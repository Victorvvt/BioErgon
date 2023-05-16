
$(function () {
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
      url: "http://localhost/Biergon1.0/php/insert-usuarios.php",
      data: postData,
      type: "POST",
      success: function (response) {
        if (!response.error) {
          $('#form-usuarios').trigger("reset");
        }
      }
    });

  });
  function get() {
    $.ajax({
      type: "get",
      url: "http://localhost/Biergon1.0/php/select-usuarios.php",

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
                  </tr>
                `
        });
        $('#res').html(template);
      }
    });
  }
  get();
  // search 
  $('#search').keyup(() => {
    if ($("#search").val()) {
      let search = $("#search").val();

      $.ajax({
        url: "http://localhost/Biergon1.0/php/search-usuario.php",
        data: { search },
        type: "POST",
        success: function (response) {
          if (!response.error) {
            let usuarios = JSON.parse(response);
            let template = ``;
            usuarios.forEach(usuario => {
              template += `<tr>
                    <td>${usuario.id}</td>
                    <td>${usuario.nombre}</td>
                    <td>${usuario.apellido}</td>
                    <td>${usuario.altura}</td>
                    <td>${usuario.actividad}</td>
                    <td>${usuario.sexo}</td>
                    <td>${usuario.peso}</td>
                    <td>${usuario.fecha}</td>
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

    if (confirm("¿Seguro quieres eliminiar registro?")) {
      const element = $(this)[0].activeElement.parentElement.parentElement;
      const id = $(element).attr('id')
      $.post("http://localhost/Biergon1.0/php/delete-usuarios.php",
      {id},
       ()=>{
          get();
        }
        
      );
    }

  })




})