function colorize() {
    const evenElements = document.querySelectorAll('tr:nth-child(2n)');
    for (const row of evenElements) {
        row.style.backgroundColor='Teal'
    }
}