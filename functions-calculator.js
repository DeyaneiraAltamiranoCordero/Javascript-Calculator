
function calculate(operation, num1, num2) {
    let result;

    switch (operation) {
        case "sum":
            result = num1 + num2;
            break;
        case "subtract":
            result = num1 - num2;
            break;
        case "multiply":
            result = num1 * num2;
            break;
        case "divide":
            result = num2 !== 0 ? num1 / num2 : "Error (División por 0)";
            break;
        default:
            result = "Operación no válida";
    }

    return result;
}

function calculateWaterIntake(weight, exercise) {
    let waterIntake = (weight * 0.035) + (exercise / 30 * 0.5);
    return waterIntake;
}

function calculateBMR(weight, height, age, gender) {
    let bmr;
    if (gender === 'male') {
        bmr = (10 * weight) + (6.25 * height) - (5 * age) + 5;
    } else {
        bmr = (10 * weight) + (6.25 * height) - (5 * age) - 161;
    }
    return bmr;
}

function calculateDailyCalories(bmr, activityLevel) {
    return bmr * activityLevel;
}


function calculateIMCMetric(peso, altura) {
    return peso / Math.pow(altura / 100, 2);
}


function calculateIMCImperial(peso, altura) {
    return (peso / Math.pow(altura, 2)) * 703;
}

function calculateLoanPayment(loanAmount, interestRate, loanTerm) {
    let monthlyRate = (interestRate / 100) / 12;
    let totalPayments = loanTerm;
    let monthlyPayment = loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, totalPayments)) / (Math.pow(1 + monthlyRate, totalPayments) - 1);
    
    return monthlyPayment;
}

function formatCurrency(amount) {
    return `₡ ${amount.toLocaleString('es-CR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}

function calculateSpeed(distance, time) {
    return (distance / time).toFixed(2);
}

function calculateTime(distance, speed) {
    return (distance / speed).toFixed(2);
}

function calculateDistance(speed, time) {
    return (speed * time).toFixed(2);
}

function isValidDate(dateString) {
    return dateString && !isNaN(new Date(dateString).getTime());
}

function calculateYears(birthDate, currentDate) {
    let years = currentDate.getFullYear() - birthDate.getFullYear();
    if (
        currentDate.getMonth() < birthDate.getMonth() || 
        (currentDate.getMonth() === birthDate.getMonth() && currentDate.getDate() < birthDate.getDate())
    ) {
        years--;
    }
    return years;
}

function calculateMonths(birthDate, currentDate) {
    let months = currentDate.getMonth() - birthDate.getMonth();
    if (months < 0) months += 12;
    if (currentDate.getDate() < birthDate.getDate()) months--;
    return months;
}

function calculateDays(birthDate, currentDate) {
    let days = currentDate.getDate() - birthDate.getDate();
    if (days < 0) {
        const lastMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0);
        days += lastMonth.getDate();
    }
    return days;
}

function isValidDateInput(startDateInput, daysInput) {
    return startDateInput && !isNaN(daysInput) && daysInput > 0;
}

function calculateNewDate(startDate, days, operation) {
    const resultDate = new Date(startDate);
    
    if (operation === 'add') {
        resultDate.setDate(startDate.getDate() + days);
    } else if (operation === 'subtract') {
        resultDate.setDate(startDate.getDate() - days);
    }

    return resultDate;
}

function factorial(num) {
    if (num === 0 || num === 1) return 1;
    let result = 1;
    for (let i = 2; i <= num; i++) {
        result *= i;
    }
    return result;
}

function combinationWithoutRepetition(n, r) {
    return factorial(n) / (factorial(r) * factorial(n - r));
}

function combinationWithRepetition(n, r) {
    return factorial(n + r - 1) / (factorial(r) * factorial(n - 1));
}

