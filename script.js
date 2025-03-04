document.getElementById('basicForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let num1 = parseFloat(document.getElementById('num1').value) || 0;
    let num2 = parseFloat(document.getElementById('num2').value) || 0;
    let operation = document.getElementById('operation').value;
    let result;

    switch (operation) {
        case 'sum':
            result = num1 + num2;
            break;
        case 'subtract':
            result = num1 - num2;
            break;
        case 'multiply':
            result = num1 * num2;
            break;
        case 'divide':
            result = num2 !== 0 ? num1 / num2 : 'Error (División por 0)';
            break;
        default:
            result = 'Operación no válida';
    }

    document.getElementById('result').textContent = result;
});

document.getElementById('hydrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let weight = parseFloat(document.getElementById('weight').value) || 0;
    let exercise = parseFloat(document.getElementById('exercise').value) || 0;
    
    let waterIntake = (weight * 0.035) + (exercise / 30 * 0.5);
    
    document.getElementById('waterResult').textContent = waterIntake.toFixed(2);
});

document.getElementById('caloriesForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let weight = parseFloat(document.getElementById('weight').value) || 0;
    let height = parseFloat(document.getElementById('height').value) || 0;
    let age = parseFloat(document.getElementById('age').value) || 0;
    let gender = document.getElementById('gender').value;
    let activityLevel = parseFloat(document.getElementById('activityLevel').value);

    let bmr;
    if (gender === 'male') {
        bmr = (10 * weight) + (6.25 * height) - (5 * age) + 5;
    } else {
        bmr = (10 * weight) + (6.25 * height) - (5 * age) - 161;
    }

    let dailyCalories = bmr * activityLevel;
    document.getElementById('caloriesResult').textContent = dailyCalories.toFixed(2);
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

