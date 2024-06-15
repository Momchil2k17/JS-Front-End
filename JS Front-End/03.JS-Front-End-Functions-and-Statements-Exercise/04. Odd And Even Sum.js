function solve(num){
    let oddSum=0;
    let evenSum=0;
    while (num>0) {
        let currNum=Math.trunc(num%10);
        if (currNum%2===0) {
            evenSum+=currNum;
        } else {
            oddSum+=currNum;
        }
        num/=10;
    }
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}
solve(3495892137259234)