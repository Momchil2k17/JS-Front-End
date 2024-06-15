function solve(input){
    let keyWords=input.shift().split(' ');
    const words={};
    for (const word of keyWords) {
        words[word]=0;
    }
    for (const otherWord of input) {
        if (words.hasOwnProperty(otherWord)) {
            words[otherWord]++;
        }
    }
    Object.entries(words).sort((a,b)=>b[1]-a[1]).forEach(([word,count])=>console.log(`${word} - ${count}`))
    
}
solve([
    'is the', 
    'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence']
    
    )