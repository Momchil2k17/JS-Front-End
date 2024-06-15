function solve(num){
    if (typeof num!='number') {
        console.log(`We can not calculate the circle area, because we receive a ${typeof num}.`)
    } else {
        let area=(num**2)*Math.PI;
        console.log(area.toFixed(2));
    }
}
solve(5)