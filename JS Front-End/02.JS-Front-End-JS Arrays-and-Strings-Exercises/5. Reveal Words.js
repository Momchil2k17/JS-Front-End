function solve(filters,sentence){
    let words=filters.split(', ');
    const matches=sentence.matchAll(/\*+/g);
    for (const match of matches) {
        const word=words.find(w=>w.length===match[0].length);
        sentence=sentence.replace(match[0],word);
    }
    console.log(sentence);
}
solve('great, learning',
'softuni is ***** place for ******** new  ***** programming languages'
)