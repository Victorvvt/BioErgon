$(function () {
  
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
        }else{
            
            $.ajax({
                type: "get",
                url: "http://localhost/Biergon1.0/php/select-usuarios.php",
            
                success: function (response) {
                  let usuarios = JSON.parse(response);
                  let template = ``;
                  usuarios.forEach(usuario => {
                    template+=`
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
        } 

    });






})