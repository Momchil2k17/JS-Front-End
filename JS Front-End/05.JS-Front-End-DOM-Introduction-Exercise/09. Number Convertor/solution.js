function solve() {
    const inputNumberElement = document.getElementById('input');
    const resultElement = document.getElementById('result');
    // const selectMenuFromElement = document.getElementById('selectMenuFrom');
    const selectMenuToElement = document.getElementById('selectMenuTo');
    const convertButtonElement = document.querySelector('button');

    // Populate select menu to with options
    const binaryOptionElement = selectMenuToElement.querySelector('option');
    binaryOptionElement.value = 'binary';
    binaryOptionElement.textContent = 'Binary';

    const hexadecimlOptionElement = document.createElement('option');
    hexadecimlOptionElement.value = 'hexadecimal';
    hexadecimlOptionElement.textContent = 'Hexadecimal';
    selectMenuToElement.appendChild(hexadecimlOptionElement);

    const convertors = {
        binary: convertDecimalToBinary,
        hexadecimal: convertDecimalToHex,
    };

    convertButtonElement.addEventListener('click', () => {
        const numberValue = Number(inputNumberElement.value);

        resultElement.value = convertors[selectMenuToElement.value](numberValue)
    });

    function convertDecimalToBinary(number) {
        return number.toString(2);
    }
    function convertDecimalToHex(number = 10) {
        return number.toString(16).toUpperCase();
    }
}