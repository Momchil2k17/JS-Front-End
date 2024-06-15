function addItem() {
    const menu = document.getElementById('menu');
    const newItemText = document.getElementById('newItemText');
    const newItemValue = document.getElementById('newItemValue');
    const optionElement = document.createElement('option');
    optionElement.textContent = newItemText.value;
    optionElement.value = newItemValue.value;
    menu.appendChild(optionElement);
    newItemText.value = '';
    newItemValue.value = '';
}