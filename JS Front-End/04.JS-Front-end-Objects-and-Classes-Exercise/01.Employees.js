function solve(people){
    let employees={};
    for(let i=0; i<people.length; i++) {
      let name=people[i];
      employees[name]=name.length;
    }
    for (const name in employees) {
        console.log(`Name: ${name} -- Personal Number: ${employees[name]}`);
    }
}
solve([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ]
    )