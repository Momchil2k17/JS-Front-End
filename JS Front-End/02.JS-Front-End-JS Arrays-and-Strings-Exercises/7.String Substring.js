function solve(word,text){
    let wordText=text.split(' ');
    for(let i=0; i<wordText.length; i++) {
      if (word.toLowerCase()===wordText[i].toLowerCase()) {
        return word;
      }
    }
    return `${word} not found!`
}
solve('javascript',
'aJavaScript is the best programming language'
)