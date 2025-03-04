document.getElementById('calcForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let num1 = parseFloat(document.getElementById('num1').value) || 0;
    let num2 = parseFloat(document.getElementById('num2').value) || 0;
    let operacion = document.getElementById('operacion').value;
    let resultado;

    switch (operacion) {
        case 'sumar':
            resultado = num1 + num2;
            break;
        case 'restar':
            resultado = num1 - num2;
            break;
        case 'multiplicar':
            resultado = num1 * num2;
            break;
        case 'dividir':
            resultado = num2 !== 0 ? num1 / num2 : 'Error (División por 0)';
            break;
        default:
            resultado = 'Operación no válida';
    }

    document.getElementById('resultado').textContent = resultado;
});