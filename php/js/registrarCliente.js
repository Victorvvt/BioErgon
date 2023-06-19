$(document).ready(function() {
    $('#form__signin').submit(function(event) {
        event.preventDefault();
        
        // Capturar los valores de los campos de entrada
        var firstName = $('#signIn__nombre').val();
        var lastName = $('#signIn__apellido').val();
        var email = $('#signIn__email').val();
        var passw = $('#signIn__contraseña').val();
        var confPassw = $('#signIn__confirmContraseña').val();
        
        // Crear objeto con los valores capturados
        var user = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        passw: passw,
        confPassw: confPassw
        };
        
        // Enviar solicitud POST al backend
        $.ajax({
        type: 'POST',
        url: 'http://localhost:8080/crearClientes',
        data: JSON.stringify(user),
        contentType: 'application/json',
        success: function(response) {
            // Lógica para manejar la respuesta exitosa del backend
            console.log('Registro exitoso:', response);
        },
        error: function(error) {
            // Lógica para manejar el error del backend
            console.error('Error en el registro:', error);
        }
        });
    });
    }); 
    