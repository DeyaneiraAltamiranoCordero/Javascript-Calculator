document.getElementById('calcForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let num1 = parseFloat(document.getElementById('num1').value) || 0;
    let num2 = parseFloat(document.getElementById('num2').value) || 0;
    document.getElementById('resultado').textContent = num1 + num2;
});

document.getElementById("imcForm").addEventListener("input", () => {
    const peso = parseFloat(document.getElementById("peso").value);
    const altura = parseFloat(document.getElementById("altura").value);
     const sistema = document.getElementById("sistema").value;

    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        document.getElementById("resultado").textContent = "";
        return;
    }

    const imc = sistema === "metric" 
        ? peso / Math.pow(altura / 100, 2) 
        : (peso / Math.pow(altura, 2)) * 703;

    document.getElementById("resultado").textContent = `Tu IMC es: ${imc.toFixed(2)}`;
});

