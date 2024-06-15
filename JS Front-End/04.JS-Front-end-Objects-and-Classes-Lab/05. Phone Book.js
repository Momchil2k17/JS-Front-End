function solve(phoneBook){
    let assocArr = {};

    for(let i=0; i<phoneBook.length; i++) {
        let arguments=phoneBook[i].split(' ');
        assocArr[arguments[0]]=arguments[1];
    }

    Object.keys(assocArr).forEach(propName => console.log(`${propName} -> ${assocArr[propName]}`))
}
solve(['Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344']
)