function solve(input){
    const pattern=/([A-Z][a-z]*)/g;
    let mArr=[]
    const matches=input.matchAll(pattern);
    for (const match of matches) {
        mArr.push(match[0]);
    }
    console.log(mArr.join(', '));
}
solve('KSplitMeIfYouCanHaHaYouCantOrYouCan'
)