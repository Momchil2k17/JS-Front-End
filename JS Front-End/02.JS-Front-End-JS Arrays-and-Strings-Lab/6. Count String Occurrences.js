function solve(sent,filter){
    let arrWords=sent.split(' ');
    let count=0;
    for(let i=0; i<arrWords.length; i++) {
      if (arrWords[i]===filter) {
        count++;
      }
    }
    console.log(count);
}
solve('This is a word and it also is a sentence',
'is'
)