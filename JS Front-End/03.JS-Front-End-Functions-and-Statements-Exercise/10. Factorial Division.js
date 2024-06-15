function solve(a,b){
    let factorial=function(a){
        let f=1;
        for(let i=2; i<=a; i++) {
            f*=i 
        }
            return f;
    }
    console.log((factorial(a)/factorial(b)).toFixed(2));
}
solve(6,2)