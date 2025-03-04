document.getElementById('sumForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let num1 = parseFloat(document.getElementById('num1').value) || 0;
    let num2 = parseFloat(document.getElementById('num2').value) || 0;
    document.getElementById('resultado').textContent = num1 + num2;
});

function calculateValues() {
            const distance = parseFloat(document.getElementById('distance').value);
            const time = parseFloat(document.getElementById('time').value);
            const speed = parseFloat(document.getElementById('speed').value);

            if (!isNaN(distance) && !isNaN(time) && isNaN(speed)) {
                document.getElementById('speed').value = (distance / time).toFixed(2);
            } else if (!isNaN(distance) && !isNaN(speed) && isNaN(time)) {
                document.getElementById('time').value = (distance / speed).toFixed(2);
            } else if (!isNaN(speed) && !isNaN(time) && isNaN(distance)) {
                document.getElementById('distance').value = (speed * time).toFixed(2);
            } else {
                alert('Ingresa dos valores para calcular el tercero');
            }
        }

        function calculateAge() {
            const birthdateInput = document.getElementById('birthdate').value;
            if (!birthdateInput) {
                alert('Please enter a valid date of birth.');
                return;
            }
        
            const birthDate = new Date(birthdateInput);
            const currentDate = new Date();
        
            let years = currentDate.getFullYear() - birthDate.getFullYear();
            let months = currentDate.getMonth() - birthDate.getMonth();
            let days = currentDate.getDate() - birthDate.getDate();
    
            if (months < 0 || (months === 0 && days < 0)) {
                years--;
                months += 12; 
            }
    
            if (days < 0) {
                const lastMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0);
                days += lastMonth.getDate(); 
                months--; 
            }
    
            document.getElementById('result').textContent = `You are ${years} years, ${months} months, and ${days} days old.`;
        }

        function calculateDate() {
            const startDateInput = document.getElementById('startDate').value;
            const daysInput = parseInt(document.getElementById('days').value);
            const operation = document.getElementById('operation').value;
        
            if (!startDateInput || isNaN(daysInput) || daysInput <= 0) {
                alert('Please enter a valid start date and a positive number of days.');
                return;
            }
        
            const startDate = new Date(startDateInput);
            let resultDate;
        
            if (operation === 'add') {
                resultDate = new Date(startDate);
                resultDate.setDate(startDate.getDate() + daysInput); 
            } else if (operation === 'subtract') {
                resultDate = new Date(startDate);
                resultDate.setDate(startDate.getDate() - daysInput);
            }
    
            document.getElementById('dateResult').textContent = `The resulting date is: ${resultDate.toISOString().split('T')[0]}`;
        }
        
        