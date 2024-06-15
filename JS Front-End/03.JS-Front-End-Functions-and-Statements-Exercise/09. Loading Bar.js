function solve(n){
    let count=Math.trunc(n/10)
    let bar=`[`+`%`.repeat(count)+`.`.repeat(10-count)+`]`;
    if (n===100) {
        console.log(`100% Complete!`);
        console.log(bar);
    }else{
        console.log(`${n}% ${bar}`);
        console.log(`Still loading...`);
    }
}
solve(50)