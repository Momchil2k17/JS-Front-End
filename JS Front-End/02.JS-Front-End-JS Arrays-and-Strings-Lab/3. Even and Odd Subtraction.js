function solve(input){
    let evenSum=0;
    let oddSum=0;
    input.filter(x=>x%2===0).forEach(( num => {evenSum += num;}))
    input.filter(x=>x%2!==0).forEach(( num => {oddSum += num;}))
    console.log(evenSum-oddSum);
}
solve([3,5,7,9])