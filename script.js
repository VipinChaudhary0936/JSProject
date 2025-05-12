// Alert Button
function showAlert() {
    Swal.fire({
        title: 'Modern Alert!',
        text: 'This is a beautiful alert using SweetAlert2',
        icon: 'success',
        confirmButtonText: 'Cool',
        background: 'rgba(26, 26, 46, 0.9)',
        color: '#fff',
        backdrop: 'rgba(0,0,0,0.5)'
    });
}

// Addition
function add() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById('addResult').innerHTML = '<span class="error">Please enter valid numbers</span>';
        return;
    }
    document.getElementById('addResult').innerHTML = `
        <span class="calculation">${num1} + ${num2} =</span>
        <span class="answer">${num1 + num2}</span>
    `;
}

// Multiplication
function multiply() {
    const num1 = parseFloat(document.getElementById('mult1').value);
    const num2 = parseFloat(document.getElementById('mult2').value);
    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById('multResult').innerHTML = '<span class="error">Please enter valid numbers</span>';
        return;
    }
    document.getElementById('multResult').innerHTML = `
        <span class="calculation">${num1} × ${num2} =</span>
        <span class="answer">${num1 * num2}</span>
    `;
}

// Even/Odd Checker
function checkEvenOdd() {
    const num = parseInt(document.getElementById('checkNum').value);
    if (isNaN(num)) {
        document.getElementById('evenOddResult').innerHTML = '<span class="error">Please enter a valid number</span>';
        return;
    }
    const isEven = num % 2 === 0;
    document.getElementById('evenOddResult').innerHTML = `
        <span class="number">${num}</span> is 
        <span class="${isEven ? 'even' : 'odd'}">${isEven ? 'Even' : 'Odd'}</span>
    `;
}

// Voting Age Check
function checkVotingAge() {
    const age = parseInt(document.getElementById('age').value);
    if (isNaN(age) || age < 1 || age > 120) {
        document.getElementById('voteResult').innerHTML = '<span class="error">Please enter a valid age</span>';
        return;
    }
    const canVote = age >= 18;
    document.getElementById('voteResult').innerHTML = `
        <span class="age">${age} years old:</span>
        <span class="${canVote ? 'eligible' : 'ineligible'}">
            ${canVote ? 'Eligible to vote!' : 'Not eligible to vote'}
        </span>
    `;
}

// Prime Numbers
function generatePrimes() {
    const limit = parseInt(document.getElementById('primeLimit').value);
    if (isNaN(limit) || limit < 2) {
        document.getElementById('primeResult').innerHTML = '<span class="error">Please enter a number ≥ 2</span>';
        return;
    }
    
    const primes = [];
    for(let i = 2; i <= limit; i++) {
        if(isPrime(i)) primes.push(i);
    }
    
    document.getElementById('primeResult').innerHTML = `
        <div class="primes-header">Primes up to ${limit}:</div>
        <div class="primes-list">${primes.join(', ')}</div>
        <div class="primes-count">Total: ${primes.length} primes</div>
    `;
}

function isPrime(num) {
    if (num <= 1) return false;
    if (num === 2) return true;
    if (num % 2 === 0) return false;
    
    for(let i = 3; i <= Math.sqrt(num); i += 2) {
        if(num % i === 0) return false;
    }
    return true;
}

// Form
function submitForm() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const contact = document.getElementById("contact").value.trim();
    const rollNo = document.getElementById("rollNo").value.trim();

    // Basic validations
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^[0-9]{10}$/;

    if (!name || !email || !contact || !rollNo) {
        Swal.fire({
            title: 'Error!',
            text: 'Please fill in all required fields.',
            icon: 'error',
            confirmButtonText: 'OK'
        });
        return;
    }

    if (!emailPattern.test(email)) {
        Swal.fire({
            title: 'Invalid Email',
            text: 'Please enter a valid email address.',
            icon: 'warning',
            confirmButtonText: 'OK'
        });
        return;
    }

    if (!phonePattern.test(contact)) {
        Swal.fire({
            title: 'Invalid Contact',
            text: 'Please enter a valid 10-digit contact number.',
            icon: 'warning',
            confirmButtonText: 'OK'
        });
        return;
    }

    Swal.fire({
        title: 'Success!',
        html: `
            <div class="form-result">
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Contact:</strong> ${contact}</p>
                <p><strong>Roll No:</strong> ${rollNo}</p>
            </div>
        `,
        icon: 'success',
        confirmButtonText: 'Great!'
    });
}

// Circle Color Changer
const colors = ['#ef233c', '#4361ee', '#4cc9f0', '#38b000', '#7209b7', '#f8961e'];
let colorIndex = 0;
function changeCircleColor() {
    colorIndex = (colorIndex + 1) % colors.length;
    const circle = document.getElementById('colorCircle');
    circle.style.background = colors[colorIndex];
    circle.style.boxShadow = `0 5px 15px ${colors[colorIndex]}80`;
}

// Grade Calculator
function calculateGrade() {
    const marks = parseInt(document.getElementById('marks').value);
    if (isNaN(marks) || marks < 0 || marks > 100) {
        document.getElementById('gradeResult').innerHTML = '<span class="error">Please enter marks between 0-100</span>';
        return;
    }
    
    let grade = '';
    let gradeClass = '';
    if(marks >= 90) {
        grade = 'A+';
        gradeClass = 'excellent';
    }
    else if(marks >= 80) {
        grade = 'A';
        gradeClass = 'very-good';
    }
    else if(marks >= 70) {
        grade = 'B';
        gradeClass = 'good';
    }
    else if(marks >= 60) {
        grade = 'C';
        gradeClass = 'average';
    }
    else if(marks >= 50) {
        grade = 'D';
        gradeClass = 'below-average';
    }
    else {
        grade = 'F';
        gradeClass = 'fail';
    }
    
    document.getElementById('gradeResult').innerHTML = `
        <span class="marks">Marks: ${marks}</span>
        <span class="grade ${gradeClass}">Grade: ${grade}</span>
    `;
}

// Click Counter
const clickArea = document.getElementById('clickArea');
let clicks = 0, dblClicks = 0, hovers = 0;

clickArea.addEventListener('click', () => {
    clicks++;
    document.getElementById('clickCount').textContent = clicks;
    clickArea.style.transform = 'scale(0.98)';
    setTimeout(() => {
        clickArea.style.transform = 'scale(1)';
    }, 100);
});

clickArea.addEventListener('dblclick', () => {
    dblClicks++;
    document.getElementById('dblClickCount').textContent = dblClicks;
    clickArea.style.backgroundColor = 'rgba(67, 97, 238, 0.2)';
    setTimeout(() => {
        clickArea.style.backgroundColor = 'rgba(0, 0, 0, 0.2)';
    }, 300);
});

clickArea.addEventListener('mouseover', () => {
    hovers++;
    document.getElementById('hoverCount').textContent = hovers;
});

// Color Mixer
const redSlider = document.getElementById('red');
const greenSlider = document.getElementById('green');
const blueSlider = document.getElementById('blue');
const colorPreview = document.getElementById('colorPreview');

function updateColor() {
    const r = redSlider.value;
    const g = greenSlider.value;
    const b = blueSlider.value;
    const color = `rgb(${r}, ${g}, ${b})`;
    
    colorPreview.style.backgroundColor = color;
    colorPreview.style.boxShadow = `0 0 15px ${color}`;
    
    document.getElementById('redValue').textContent = r;
    document.getElementById('greenValue').textContent = g;
    document.getElementById('blueValue').textContent = b;
    document.getElementById('rgbValue').textContent = `RGB: ${r}, ${g}, ${b}`;
    document.getElementById('rgbValue').style.color = color;
}

redSlider.addEventListener('input', updateColor);
greenSlider.addEventListener('input', updateColor);
blueSlider.addEventListener('input', updateColor);

// Initialize color mixer
updateColor();

// Calculator
function appendToDisplay(value) {
    const display = document.getElementById('calcDisplay');
    display.value += value;
    display.scrollLeft = display.scrollWidth;
}

function clearDisplay() {
    document.getElementById('calcDisplay').value = '';
}

function calculateResult() {
    try {
        const display = document.getElementById('calcDisplay');
        const result = eval(display.value.replace('×', '*').replace('^', '**'));
        display.value = result;
        
        // Flash the display on calculation
        display.style.color = '#4cc9f0';
        setTimeout(() => {
            display.style.color = 'white';
        }, 300);
    } catch(e) {
        document.getElementById('calcDisplay').value = 'Error';
        setTimeout(() => {
            clearDisplay();
        }, 1000);
    }
}

// Add keyboard support for calculator
document.addEventListener('keydown', (e) => {
    const key = e.key;
    const display = document.getElementById('calcDisplay');
    
    if (/[0-9\.\+\-\*\/%]/.test(key)) {
        appendToDisplay(key);
    } else if (key === 'Enter') {
        calculateResult();
    } else if (key === 'Escape') {
        clearDisplay();
    } else if (key === 'Backspace') {
        display.value = display.value.slice(0, -1);
    } else if (key === '^') {
        appendToDisplay('**');
    } else if (key === 'x') {
        appendToDisplay('*');
    }
});

// Initialize SweetAlert2
const Swal = require('sweetalert2');