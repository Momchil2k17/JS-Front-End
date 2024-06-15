function solve(age){
    let person='out of bounds';
    if (0<=age && age<=2) {
        person='baby'
    } else if(3<=age && age<=13) {
        person='child'
    }else if(14<=age && age<=19) {
        person='teenager'
    }else if(20<=age && age<=65) {
        person='adult'
    }else if(66<=age) {
        person='elder'
    }
    console.log(person);
}
solve(100)