function solve(char1,char2){
    let char1Code=char1.charCodeAt(0);
    let char2Code=char2.charCodeAt(0);

    if (char2Code<char1Code) {
        let tempCode=char1Code;
        char1Code=char2Code;
        char2Code=tempCode;
    }
    
    let charArr=[];
    for(let i=char1Code+1; i<char2Code; i++) {
      charArr.push(String.fromCharCode(i));
    }
    console.log(charArr.join(' '));

}
solve('b','a')