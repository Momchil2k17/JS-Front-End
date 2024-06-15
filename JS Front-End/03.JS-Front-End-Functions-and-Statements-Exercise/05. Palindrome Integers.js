//string
function solve(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        let currNum = numbers[i].toString();
        var newString = "";
        for (let j = currNum.length - 1; j >= 0; j--) {
            newString += currNum[j];
        }
        console.log(currNum === newString);
    }

}
//array
function aSolve(numbers){
    function isPalindrome(number){
        const num=number.toString();
        const backwardsNum=num.split('').reverse().join('');

        return num===backwardsNum;
    }

    numbers.forEach(x=> console.log(isPalindrome(x)));
}
aSolve([123, 222]);