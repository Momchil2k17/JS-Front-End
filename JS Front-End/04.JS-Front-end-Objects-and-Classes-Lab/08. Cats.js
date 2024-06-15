function solve(catArray){
    class Cat{
        constructor(name,age){
            this.name=name;
            this.age=age;
        }

        meow(){
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }

    let pairs=catArray.map(line => line.split(' ')).map(kvp=>new Cat(...kvp)).forEach(cat=>cat.meow())
}
solve(['Mellow 2', 'Tom 5'])