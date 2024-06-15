function calc() {
    const firstNum=document.getElementById('num1');
    const secondNum=document.getElementById('num2');
    const sumElement=document.getElementById('sum');

    sumElement.value=Number(firstNum.value)+Number(secondNum.value);

}
