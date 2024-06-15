window.addEventListener("load", solve);

function solve() {
    const addButtonElement = document.getElementById('add-btn');
    const deleteButtonElement = document.querySelector('.delete');
    deleteButtonElement.addEventListener('click',()=>{
        location.reload()
    })
    const inputExpenseElement = document.getElementById('expense');
    const inputAmountElement = document.getElementById('amount');
    const inputDateElement = document.getElementById('date');
    const previewListElement = document.getElementById('preview-list');
    const expensesListElement = document.getElementById('expenses-list');
    addButtonElement.addEventListener('click', () => {
        if (inputExpenseElement.value != '' && inputAmountElement.value != '' && inputDateElement.value != '') {
            addButtonElement.setAttribute('disabled', 'disabled')
            let expenseValue=inputExpenseElement.value;
            let amountValue=inputAmountElement.value;
            let dateValue=inputDateElement.value;
            let liParent = document.createElement('li');
            liParent.classList.add('expense-item');
            let articleChild = document.createElement('article')
            let expenseLi = document.createElement('p');
            expenseLi.textContent = "Type: " + inputExpenseElement.value;
            inputExpenseElement.value = '';
            let inputLi = document.createElement('p');
            inputLi.textContent = "Amount: " + inputAmountElement.value + '$';
            inputAmountElement.value = '';
            let dateLi = document.createElement('p');
            dateLi.textContent = 'Date: ' + inputDateElement.value;
            inputDateElement.value = '';
            articleChild.appendChild(expenseLi);
            articleChild.appendChild(inputLi);
            articleChild.appendChild(dateLi);
            liParent.appendChild(articleChild);
            let buttonDiv = document.createElement('div');
            buttonDiv.classList.add("buttons");
            let editButton = document.createElement('button');
            let okButton = document.createElement('button');
            editButton.textContent = 'edit';
            editButton.classList.add("btn", "edit");
            okButton.classList.add("btn", "ok");
            okButton.textContent = 'ok';
            buttonDiv.appendChild(editButton);
            buttonDiv.appendChild(okButton);
            liParent.appendChild(buttonDiv);
            previewListElement.appendChild(liParent);
            editButton.addEventListener('click',()=>{
                inputExpenseElement.value = expenseValue;
                inputAmountElement.value = amountValue;
                inputDateElement.value = dateValue;
                addButtonElement.removeAttribute('disabled');
                previewListElement.removeChild(liParent);
            })
            okButton.addEventListener('click',()=>{
                previewListElement.removeChild(liParent);
                liParent.removeChild(buttonDiv);
                expensesListElement.appendChild(liParent);
                addButtonElement.removeAttribute('disabled');
            })
        }
    })
}
