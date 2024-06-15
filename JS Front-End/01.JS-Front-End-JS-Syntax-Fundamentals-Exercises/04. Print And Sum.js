function solve(m,n) {
    let sum=0;
    let print='';
    for (let index = m; index <=n; index++){
        print+=index+' ';
      sum+=index;
    }
    console.log(print)
    console.log('Sum: '+sum)
}
solve(0,26)