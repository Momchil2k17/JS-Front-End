function solve(input) {
    const parkingLot = {};

    for (const row of input) {
        const [direction, carNumber] = row.split(', ');

        direction === 'IN'
            ? parkingLot[carNumber] = true
            : delete parkingLot[carNumber]
    }

    if (Object.keys(parkingLot).length===0) {
        console.log("Parking Lot is Empty");
    }
    Object.keys(parkingLot)
        .sort((a, b) => a.localeCompare(b))
        .forEach(carNumber => console.log(carNumber));
}
solve(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'OUT, CA1234TA']



)
