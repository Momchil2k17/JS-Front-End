function solve(inStock,requestedProducts){
    let products={};
    for(let i=0; i<inStock.length-1; i+=2) {
      if (!products[inStock[i]]) {
        products[inStock[i]]=0;
      }
      products[inStock[i]]+=Number(inStock[i+1])
    }
    for(let i=0; i<requestedProducts.length-1; i+=2) {
        if (!products[requestedProducts[i]]) {
          products[requestedProducts[i]]=0;
        }
        products[requestedProducts[i]]+=Number(requestedProducts[i+1])}
      
    for (const name in products) {
        console.log(`${name} -> ${products[name]}`);
    }
}
solve([
    'Salt', '2', 'Fanta', '4', 'Apple', '14', 'Water', '4', 'Juice', '5'
    ],
    [
    'Sugar', '44', 'Oil', '12', 'Apple', '7', 'Tomatoes', '7', 'Bananas', '30'
    ])