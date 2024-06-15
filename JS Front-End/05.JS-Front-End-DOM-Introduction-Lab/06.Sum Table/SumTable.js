function sumTable() {
    const sumElement=document.getElementById('sum');
    const tableElements = document.querySelectorAll('tr td:last-of-type:not(#sum)');

    let sum=0;
    for (const row of tableElements) {
        sum+=Number(row.textContent)
    }

    sumElement.textContent=sum;
}