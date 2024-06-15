function subtract() {
    const firstNumElement=document.getElementById('firstNumber');
    const secondNumElement=document.getElementById('secondNumber');
    const resultRef=document.getElementById('result');

    resultRef.textContent=Number(firstNumElement.value)-Number(secondNumElement.value)

}