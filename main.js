const generateBtn = document.getElementById('generate-btn');
const numbersContainer = document.getElementById('numbers-container');

generateBtn.addEventListener('click', () => {
    generateLottoNumbers();
});

function generateLottoNumbers() {
    const numbers = new Set();
    while (numbers.size < 6) {
        const randomNumber = Math.floor(Math.random() * 45) + 1;
        numbers.add(randomNumber);
    }

    displayNumbers(Array.from(numbers));
}

function displayNumbers(numbers) {
    numbersContainer.innerHTML = '';
    for (const number of numbers) {
        const numberBall = document.createElement('div');
        numberBall.classList.add('number-ball');
        numberBall.textContent = number;
        numbersContainer.appendChild(numberBall);
    }
}

// Theme toggle logic
const themeToggleBtn = document.getElementById('theme-toggle');
const body = document.body;

const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    body.classList.add(currentTheme);
} else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    body.classList.add('dark-mode');
} else {
    body.classList.add('light-mode');
}

themeToggleBtn.addEventListener('click', () => {
    if (body.classList.contains('dark-mode')) {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        localStorage.setItem('theme', 'light-mode');
    } else {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark-mode');
    }
});