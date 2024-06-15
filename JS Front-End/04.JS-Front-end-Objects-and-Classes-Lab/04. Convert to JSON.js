function solve(name,lastName,hairColor){
    let person={
        name,
        lastName,
        hairColor
    }
    let jsonText=JSON.stringify(person);
    console.log(jsonText);
}
solve('George', 'Jones', 'Brown')