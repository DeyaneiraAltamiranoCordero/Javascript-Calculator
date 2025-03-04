window.onload = function() {
    showCalculator('basic');
};

function showCalculator(calculatorId) {
    const calculators = document.querySelectorAll('section');
    calculators.forEach(calculator => {
        calculator.style.display = 'none';
    });

    const selectedCalculator = document.getElementById(calculatorId);
    if (selectedCalculator) {
        selectedCalculator.style.display = 'block';
    }
}


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

document.getElementById('loanForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let loanAmount = parseFloat(document.getElementById('loanAmount').value);
    let interestRate = parseFloat(document.getElementById('interestRate').value);
    let loanTerm = parseInt(document.getElementById('loanTerm').value);

    if (isNaN(loanAmount) || isNaN(interestRate) || isNaN(loanTerm)) {
        document.getElementById('result').textContent = 'Por favor, ingresa valores válidos.';
        return;
    }

    let monthlyRate = (interestRate / 100) / 12;
    let totalPayments = loanTerm;
    let monthlyPayment = loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, totalPayments)) / (Math.pow(1 + monthlyRate, totalPayments) - 1);

    if (isNaN(monthlyPayment) || monthlyPayment <= 0) {
        document.getElementById('result').textContent = 'Ocurrió un error en el cálculo. Verifica los datos.';
        return;
    }

    document.getElementById('result').textContent = `Tu cuota mensual será: ₡ ${monthlyPayment.toLocaleString('es-CR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

});
