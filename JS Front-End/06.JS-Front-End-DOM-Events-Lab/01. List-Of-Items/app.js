function addItem() {
    const inputElement=document.getElementById('newItemText');
    const itemList=document.getElementById('items');
    const newItemElement=document.createElement('li');
    newItemElement.textContent=inputElement.value;
    itemList.appendChild(newItemElement);
    inputElement.value='';
}