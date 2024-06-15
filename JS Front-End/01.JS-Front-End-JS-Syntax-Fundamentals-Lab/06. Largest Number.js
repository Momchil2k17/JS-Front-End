function solve(num1,num2,num3) {
    //wont work if there are equal nums
    let maxNum=Number.MIN_SAFE_INTEGER;
    if (num1>num2 && num1>num3) {
            maxNum=num1;
    }else if(num2>num1 && num2>num3){
        maxNum=num2;
    }
    else if(num3>num1 && num3>num2){
        maxNum=num3;
    }
    console.log('The largest number is '+maxNum+'.');
    //works all the time
    //maxNum=Math.max(num1,num2,num3)
    
    
}
