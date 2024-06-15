function solve(num){
    let sum=0;
    let text=num.toString();
    let isSame=true;
    for(let i=0;i<text.length-1;i++){
        if (text[i]!=text[i+1]) {
        isSame=false;
        }       
    }
    while (num>0) {
        sum+=Math.trunc(num%10);
        num/=10;
    }
    
    console.log(isSame);
    console.log(sum);
    
    
}
solve(222)