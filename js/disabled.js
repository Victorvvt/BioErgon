$(document).ready(() => {
    $('#btn-usuarios').click(function (e) { 
        
        $('#btn-actividades').removeClass('disabled');
    });
    $('#btn-actividades').click(function (e) { 
       
        $('#btn-acciones').removeClass('disabled');
    });
    $('#btn-acciones').click(function (e) { 
       
        $('#btn-fases').removeClass('disabled');
    });
    $('#btn-fases').click(function (e) { 
       
        $('#btn-variablesAnatomincas').removeClass('disabled');
    });
    $('#btn-variablesAnatomincas').click(function (e) { 
       
        $('#btn-variablesET').removeClass('disabled');
    });
    
    $('.row a').hover(function () {
            $(this).addClass('btn-info');
            
        }, function () {
           $(this).removeClass('btn-info');
        }
    );


    
  });
  