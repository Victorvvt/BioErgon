$(document).ready(() => {

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
  $.ajax({
    type: "get",
    url: "http://localhost/Biergon1.0/php/select-usuarios.php",

    success: function (response) {
      let usuarios = JSON.parse(response);
      let template = ``;
      usuarios.forEach(usuario => {
        template += `
          <tr>
          <td>${usuario.id}</td>
          <td>${usuario.nombre}</td>
          <td>${usuario.apellido}</td>
          <td>${usuario.sexo}</td>
          <td>${usuario.peso}</td>
          <td>${usuario.altura}</td>
          <td>${usuario.actividad}</td>
          <td>${usuario.fecha}</td>
          </tr>
          `
      });
      $('#res').html(template);
    }
  });
 
});
