function solve(array,n){
    for(let i=0; i<n; i++) {
      let firstNum=array.shift();
      array.push(firstNum)
    }
    console.log(array.join(" "));
}
solve([51, 47, 32, 61, 21], 2)