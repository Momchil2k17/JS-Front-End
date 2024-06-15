function solve(meetings){
    let assocArr = {};

    for(let i=0; i<meetings.length; i++) {
        let arguments=meetings[i].split(' ');
        if (assocArr.hasOwnProperty(arguments[0])) {
            console.log(`Conflict on ${arguments[0]}!`);
        } else {
            assocArr[arguments[0]]=arguments[1]
            console.log(`Scheduled for ${arguments[0]}`);
        }
    }

    Object.keys(assocArr).forEach(propName => console.log(`${propName} -> ${assocArr[propName]}`))
}
solve(['Monday Peter',
'Wednesday Bill',
'Monday Tim',
'Friday Tim']

)