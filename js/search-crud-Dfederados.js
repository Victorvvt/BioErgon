$(document).ready(() => {
    const nombre = $('#nombre').val();
    console.log(nombre)
    // select
    function get() {
        $.ajax({
            type: "get",
            url: "http://localhost/Biergon1.0/php/php-Dfederados/select-Dfederados.php",

            success: function (response) {
                let federados = JSON.parse(response);
                let template = ``;
                federados.forEach(federado => {
                    template += `
                        <tr id="${federado.id}">
                        <td>${federado.id}</td>
                        <td>${federado.nombre}</td>
                        <td id="usuarios">${federado.usuarioFederado}</td>
                        <td><button class="btn btn-danger delete-federados" >Eliminar</button>
                        <button class="btn btn-primary update-federados" >Actualizar</button></td>
                        </tr>
                        `


                });
                $('#res').html(template);

            }
        });

    }

    get();

    // insert
    $('#form-federados').submit(function (e) {
        e.preventDefault()
        location.reload();

        let usuarioCheck = "";
        $('#checkbox:checked').each(function () {
            console.log($(this).val())
        })

        let nombre = $('#nombre').val()
        let usuario = usuarioCheck


        $.ajax({

            type: "post",
            url: "http://localhost/Biergon1.0/php/php-Dfederados/insert-Dfederados.php",

            data: { nombre, usuario },

            success: function (response) {
                console.log(response)
            }
        });


    });
    get()
    // search
    $("#search").keyup(function (e) {
        let dato = $('#search').val();
        $.ajax({
            type: "post",
            url: "http://localhost/Biergon1.0/php/php-Dfederados/search-Dfederados.php",
            data: { dato },

            success: function (response) {
                let federados = JSON.parse(response)
                let template = ``;
                federados.forEach(federado => {
                    template += `
                        <tr id"${federado.id}">
                            <td>${federado.id}</td>
                            <td>${federado.nombre}</td>
                            <td><button class="btn btn-danger delete-federados" >Eliminar</button></td>
                        <td><button class="btn btn-primary update-federados" >Actualizar</button></td>
                        </tr>
                    `
                })
                $('#res').html(template)
            }
        });

    });

    // delete
    $(document).on("click", ".delete-federados", () => {
        location.reload()
        const element = document.activeElement.parentElement.parentElement;
        const id = $(element).attr('id')
        if (confirm(`¿Estas seguro de eliminar el registro? ${id}`)) {
            $.post(
                "http://localhost/Biergon1.0/php/php-Dfederados/delete-Dfederados.php",
                { id }

            )
        } else {
            alert("Revisa bien los archivos que queries eliminar ")
        }

        get()
    })

    // update

    $(document).on("click", ".update-federados", () => {

        $('#form-federados').addClass('d-none');
        $('#form-actualizar').removeClass('d-none');
        const element = document.activeElement.parentElement.parentElement;
        const id = $(element).attr('id')
        $.ajax({
            type: "post",
            url: "http://localhost/Biergon1.0/php/php-Dfederados/select-id-Dfederados.php",
            data: { id },

            success: function (response) {
                const federados = JSON.parse(response)
                federados.forEach(federado => {
                    $('#id-U').val(federado.id)
                    $('#nombre-U').val(federado.nombre)

                    $('#checkbox-U').each(function () {
                        $('#checkbox-U').val(federado.usuarioFederado)

                    })

                })

            }

        });

    })

    $('#form-actualizar').submit(function (e) {
         e.preventDefault();
        // location.reload();

        let usuarioCheck = ``;
        $('#checkbox-U:checked').each(function () {
            usuarioCheck += `${$(this).val()} `
        })

      
           let id = $('#id-U').val()
           let nombre = $('#nombre-U').val()
           let usuario = usuarioCheck

        
        console.log(id+nombre+usuario)
        $.ajax({
            type: "POST",
            url: "http://localhost/Biergon1.0/php/php-Dfederados/update-Dfederados.php",
            data: {id, nombre, usuario},
            success: function (response) {
                console.log( response)
            }
        });

    })
})