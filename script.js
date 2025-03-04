document.getElementById('sumForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let num1 = parseFloat(document.getElementById('num1').value) || 0;
    let num2 = parseFloat(document.getElementById('num2').value) || 0;
    document.getElementById('resultado').textContent = num1 + num2;
});
