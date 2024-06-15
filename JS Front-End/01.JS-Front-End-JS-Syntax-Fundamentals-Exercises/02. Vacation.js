function solve(count,group,day) {
    let ticketPrice=0;
    let totalPrice=0;
    if (group==='Students') {
        if (day==='Friday') {
            ticketPrice=8.45;
        } else if(day==='Saturday') {
            ticketPrice=9.80;
        }else {
            ticketPrice=10.46;
        }
        totalPrice=ticketPrice*count;
        if (count>=30) {
            totalPrice*=0.85;
        }
    } else if(group==='Business') {
        if (day==='Friday') {
            ticketPrice=10.9;
        } else if(day==='Saturday') {
            ticketPrice=15.6;
        }else {
            ticketPrice=16;
        }
        totalPrice=ticketPrice*count;
        if (count>=100) {
            totalPrice-=ticketPrice*10;
        }
    }   else{
        if (day==='Friday') {
            ticketPrice=15;
        } else if(day==='Saturday') {
            ticketPrice=20;
        }else {
            ticketPrice=22.5;
        }
        totalPrice=ticketPrice*count;
        if (count>=10 && count<=20) {
            totalPrice*=0.95;
        }
    }
    console.log(`Total price: ${totalPrice.toFixed(2)}`)
   
}
solve(40,
    "Regular",
    "Saturday"
    
    )