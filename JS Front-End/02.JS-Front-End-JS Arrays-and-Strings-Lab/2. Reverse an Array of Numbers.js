function solve(n,input){
    let newArr=input.slice(0,n);
    console.log(newArr.reverse().join(' '));
}
solve(3, [10, 20, 30, 40, 50])