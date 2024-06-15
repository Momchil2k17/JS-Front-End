function calc(fruit,grams,price) {
    console.log(`I need $${(price*grams/1000).toFixed(2)} to buy ${(grams/1000).toFixed(2)} kilograms ${fruit}.`)
}
calc('apple', 1563, 2.35)