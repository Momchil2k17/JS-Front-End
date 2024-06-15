function solve(jsonText){
    let convertedObject=JSON.parse(jsonText);
    Object.keys(convertedObject).forEach(propName => console.log(`${propName}: ${convertedObject[propName]}`))
}
solve('{"name": "George", "age": 40, "town": "Sofia"}')