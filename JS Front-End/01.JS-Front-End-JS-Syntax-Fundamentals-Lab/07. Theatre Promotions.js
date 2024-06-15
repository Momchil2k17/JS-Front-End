function solve(day,age) {
    let price=0;
    if (0<=age && age<=18) {
        if (day==='Weekday') {
            price=12;
        }else if(day==='Weekend'){
            price=15;
        } else if(day=='Holiday'){
            price=5;
        }
    }else if(18<age && age<=64){
        if (day==='Weekday') {
            price=18;
        }else if(day==='Weekend'){
            price=20;
        } else if(day=='Holiday'){
            price=12;
        }

    }else if(64<age && age<=122){
        if (day==='Weekday') {
            price=12;
        }else if(day==='Weekend'){
            price=15;
        } else if(day=='Holiday'){
            price=10;
        }
    }else{
        console.log('Error!')
        return;
    }
    console.log(price+'$')
}
solve('Weekday', 
42
)