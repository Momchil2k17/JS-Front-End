function solve(input){
    const n=Number(input[0]);
    let baristas=[];
    for(let i=1; i<=n; i++) {
      let [name,shift,drinks]=input[i].split(' ');
      let newBarista={
        name,
        shift,
        drinks: drinks.split(','),
      }
      baristas.push(newBarista);

    }
    for(let i=n+1; i<input.length; i++) {
      if (input[i]==='Closed') {
        break;
      }else{
        let [command]=input[i].split(' / ');
        if (command==='Prepare') {
            [command,baristaName,shift,drink]=input[i].split(' / ');
            let currentBarista=baristas.find(barista=> barista.name===baristaName);
            if (currentBarista.drinks.includes(drink) && currentBarista.shift===shift) {
                console.log(`${baristaName} has prepared a ${drink} for you!`);
            }else{
                console.log(`${baristaName} is not available to prepare a ${drink}.`);
            }
        }else if(command==='Change Shift'){
            [command,baristaName,shift]=input[i].split(' / ');
            let currentBarista=baristas.find(barista=> barista.name===baristaName);
            currentBarista.shift=shift;
            console.log( `${baristaName} has updated his shift to: ${shift}`);
        }else if(command==='Learn'){
            [command,baristaName,drink]=input[i].split(' / ');
            let currentBarista=baristas.find(barista=> barista.name===baristaName);
            if (currentBarista.drinks.includes(drink)) {
                console.log(`${baristaName} knows how to make ${drink}.`);
            }else{
              currentBarista.drinks.push(drink);
              console.log(`${baristaName} has learned a new coffee type: ${drink}.`);
            }
        }
      }
    }
    for (const barista of baristas) {
     console.log(`Barista: ${barista.name}, Shift: ${barista.shift}, Drinks: ${barista.drinks.join(', ')}`); 
    }
}
solve([
    '3',
      'Alice day Espresso,Cappuccino',
      'Bob night Latte,Mocha',
      'Carol day Americano,Mocha',
      'Prepare / Alice / day / Espresso',
      'Change Shift / Bob / night',
      'Learn / Carol / Latte',
      'Learn / Bob / Latte',
      'Prepare / Bob / night / Latte',
      'Closed'])
      solve(['4',
      'Alice day Espresso,Cappuccino',
      'Bob night Latte,Mocha',
      'Carol day Americano,Mocha',
      'David night Espresso',
      'Prepare / Alice / day / Espresso',
      'Change Shift / Bob / day',
      'Learn / Carol / Latte',
      'Prepare / Bob / night / Latte',
      'Learn / David / Cappuccino',
      'Prepare / Carol / day / Cappuccino',
      'Change Shift / Alice / night',
       'Learn / Bob / Mocha',
      'Prepare / David / night / Espresso',
      'Closed']
      )