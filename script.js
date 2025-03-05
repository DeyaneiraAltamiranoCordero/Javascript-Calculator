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

document.getElementById("sumBtn").addEventListener("click", () => handleOperation("sum"));
document.getElementById("subtractBtn").addEventListener("click", () => handleOperation("subtract"));
document.getElementById("multiplyBtn").addEventListener("click", () => handleOperation("multiply"));
document.getElementById("divideBtn").addEventListener("click", () => handleOperation("divide"));

function handleOperation(operation) {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);

    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById("basicResult").textContent = "Por favor ingresa valores válidos.";
        return;
    }
    const result = calculate(operation, num1, num2);

    document.getElementById("basicResult").textContent = result;
}


document.getElementById('hydrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let weight = parseFloat(document.getElementById('weight').value) || 0;
    let exercise = parseFloat(document.getElementById('exercise').value) || 0;

    let waterIntake = calculateWaterIntake(weight, exercise);
    
    document.getElementById('waterResult').textContent = waterIntake.toFixed(2);
});

document.getElementById('caloriesForm').addEventListener('submit', function(event) {
    event.preventDefault();


    let weight = parseFloat(document.getElementById('weight').value) || 0;
    let height = parseFloat(document.getElementById('height').value) || 0;
    let age = parseFloat(document.getElementById('age').value) || 0;
    let gender = document.getElementById('gender').value;
    let activityLevel = parseFloat(document.getElementById('activityLevel').value);

    let bmr = calculateBMR(weight, height, age, gender);
    
    let dailyCalories = calculateDailyCalories(bmr, activityLevel);

    document.getElementById('caloriesResult').textContent = dailyCalories.toFixed(2);
});


document.getElementById("imcForm").addEventListener("input", () => {
    const peso = parseFloat(document.getElementById("peso").value);
    const altura = parseFloat(document.getElementById("altura").value);
    const sistema = document.getElementById("sistema").value;

    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        document.getElementById("imcResult").textContent = "";
        return;
    }

    let imc;
    if (sistema === "metric") {
        imc = calculateIMCMetric(peso, altura);
    } else {
        imc = calculateIMCImperial(peso, altura);
    }

    document.getElementById("imcResult").textContent = `${imc.toFixed(2)}`;
});

document.getElementById('loanForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let loanAmount = parseFloat(document.getElementById('loanAmount').value);
    let interestRate = parseFloat(document.getElementById('interestRate').value);
    let loanTerm = parseInt(document.getElementById('loanTerm').value);

    if (isNaN(loanAmount) || isNaN(interestRate) || isNaN(loanTerm)) {
        document.getElementById('loanResult').textContent = 'Por favor, ingresa valores válidos.';
        return;
    }

    let monthlyPayment = calculateLoanPayment(loanAmount, interestRate, loanTerm);

    if (isNaN(monthlyPayment) || monthlyPayment <= 0) {
        document.getElementById('loanResult').textContent = 'Ocurrió un error en el cálculo. Verifica los datos.';
        return;
    }
    document.getElementById('loanResult').textContent = formatCurrency(monthlyPayment);
});


function calculateValues() {
    const distance = parseFloat(document.getElementById('distance').value);
    const time = parseFloat(document.getElementById('time').value);
    const speed = parseFloat(document.getElementById('speed').value);

    if (!isNaN(distance) && !isNaN(time) && isNaN(speed)) {
        document.getElementById('speed').value = calculateSpeed(distance, time);
    } else if (!isNaN(distance) && !isNaN(speed) && isNaN(time)) {
        document.getElementById('time').value = calculateTime(distance, speed);
    } else if (!isNaN(speed) && !isNaN(time) && isNaN(distance)) {
        document.getElementById('distance').value = calculateDistance(speed, time);
    } else {
        alert('Ingresa dos valores para calcular el tercero');
    }
}

function calculateAge() {
    const birthdateInput = document.getElementById('birthdate').value;

    if (!isValidDate(birthdateInput)) {
        alert('Please enter a valid date of birth.');
        return;
    }

    const birthDate = new Date(birthdateInput);
    const currentDate = new Date();

    const years = calculateYears(birthDate, currentDate);
    const months = calculateMonths(birthDate, currentDate);
    const days = calculateDays(birthDate, currentDate);

    document.getElementById('result').textContent = `You are ${years} years, ${months} months, and ${days} days old.`;
}

function calculateDate() {
    const startDateInput = document.getElementById('startDate').value;
    const daysInput = parseInt(document.getElementById('days').value);
    const operation = document.getElementById('operation').value;

    if (!isValidDateInput(startDateInput, daysInput)) {
        alert('Please enter a valid start date and a positive number of days.');
        return;
    }

    const startDate = new Date(startDateInput);
    const resultDate = calculateNewDate(startDate, daysInput, operation);

    updateDateResult(resultDate);
}

function updateDateResult(resultDate) {
    document.getElementById('dateResult').textContent = 
        `The resulting date is: ${resultDate.toISOString().split('T')[0]}`;
}

        
document.getElementById('combinationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let n = parseInt(document.getElementById('n').value);
    let r = parseInt(document.getElementById('r').value);

    if (isNaN(n) || isNaN(r) || n < r || n < 0 || r < 0) {
        document.getElementById('combinationResult').textContent = 'Por favor, ingresa valores válidos para n y r.';
        document.getElementById('combinationResultWithRepetition').textContent = 'Por favor, ingresa valores válidos para n y r.';
        return;
    }

    let resultWithoutRepetition = combinationWithoutRepetition(n, r);
    let resultWithRepetition = combinationWithRepetition(n, r);

    document.getElementById('combinationResult').textContent = resultWithoutRepetition.toLocaleString('es-CR');
    document.getElementById('combinationResultWithRepetition').textContent = resultWithRepetition.toLocaleString('es-CR');
});


