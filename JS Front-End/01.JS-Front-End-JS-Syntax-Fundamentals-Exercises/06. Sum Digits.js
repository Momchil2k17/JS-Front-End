function solve(num){
    let sum=0;
    while (num>0) {
        sum+=Math.trunc(num%10);
        num/=10;
    }
    console.log(sum);
}
solve(123)