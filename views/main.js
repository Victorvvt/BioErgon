$(() => {


    $("#btn__logIn").click(() => {
        $("#form__logIn").css({ visibility: 'visible' });
        $("#form__signIn").css({ visibility: 'hidden' });

    })
    $("#btn__signIn").click(() => {
        $("#form__signIn").css({ visibility: 'visible' })
        $("#form__logIn").css({ visibility: 'hidden' });

    })



    // validacion de formulario boostrap
    const forms = document.querySelectorAll('.form-validation')
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            }
            form.classList.add('was-validated')

        }, false)
    })
})

