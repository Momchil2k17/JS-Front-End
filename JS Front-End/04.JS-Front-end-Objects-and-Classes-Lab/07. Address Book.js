function solve(adresses){
    let assocArr = {};

    for(let i=0; i<adresses.length; i++) {
        let [name,address]=adresses[i].split(':');
        assocArr[name]=[address];
    }
    Object.entries(assocArr).sort((a,b)=>a[0].localeCompare(b[0])).forEach(([name,address]) => console.log(`${name} -> ${address}`))
}
solve(['Bob:Huxley Rd',
'John:Milwaukee Crossing',
'Peter:Fordem Ave',
'Bob:Redwing Ave',
'George:Mesta Crossing',
'Ted:Gateway Way',
'Bill:Gateway Way',
'John:Grover Rd',
'Peter:Huxley Rd',
'Jeff:Gateway Way',
'Jeff:Huxley Rd']


)