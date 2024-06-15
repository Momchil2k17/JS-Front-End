function extractText() {
    const listElements=document.getElementById('items')
    const textAreaElement=document.getElementById('result');

    textAreaElement.value=listElements.textContent;
}