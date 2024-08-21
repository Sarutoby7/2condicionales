var botonClasificar = document.getElementById('clasificar');
var campoCalificacion = document.getElementById('calificacion');
var contenedorResultado = document.getElementById('resultado');

botonClasificar.addEventListener('click', function() {
    var calificacion = parseInt(campoCalificacion.value);
    var mensaje = '';

    if (calificacion >= 9) {
        mensaje = 'Excelente';
    } else if (calificacion >= 7) {
        mensaje = 'Bueno';
    } else if (calificacion >= 5) {
        mensaje = 'Regular';
    } else if (calificacion >= 0) {
        mensaje = 'Insuficiente';
    } else {
        mensaje = 'Por favor, ingresa una calificación válida.';
    }

    contenedorResultado.textContent = 'Tu rendimiento es: ' + mensaje;
});
