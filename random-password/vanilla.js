const passwordInput = document.getElementById('password');
const generateButton = document.getElementById('generate');
const copyImage = document.getElementById('copy-img');

const passwordLength = 14;

const upperCase = `ABCDEFGHIJKLMNOPQRSTUVWXYZ`;
const lowerCase = `abcdefghijklmnopqrstuvwxyz`;
const numbers = `0123456789`;
const specialSymbols = `@#$_-*()+{}[]<>=%^`;

const allCharactersLetters = upperCase + lowerCase + specialSymbols + numbers

function generateRandomPassword() {
    let password = '';

    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += specialSymbols[Math.floor(Math.random() * specialSymbols.length)];

    while (passwordLength > password.length) {
        password += allCharactersLetters[Math.floor(Math.random() * allCharactersLetters.length)];

    }
    passwordInput.value = password;
}

generateButton.addEventListener('click', generateRandomPassword);


async function copyGeneratedPassword() {
    try {
        await navigator.clipboard.writeText(passwordInput.value);
        alert('Password copied to clipboard');
    } catch (err) {
        console.error('Failed to copy text: ', err);
    }
}

copyImage.addEventListener('click', copyGeneratedPassword);