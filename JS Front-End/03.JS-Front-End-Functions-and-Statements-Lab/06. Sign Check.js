function solve(...numbers){
    const count=numbers.filter((num) => num<0).length;
    return count%2===0 ? "Positive" : "Negative";
}