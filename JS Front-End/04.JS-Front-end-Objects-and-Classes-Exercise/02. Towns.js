function solve(townInfo){
   let towns=[];
    for(let i=0; i<townInfo.length; i++) {
      let [town,latitude,longitude]=townInfo[i].split(' | ');
      let currentTown={
        town,
        latitude:Number(latitude).toFixed(2),
        longitude:Number(longitude).toFixed(2),
      }
      towns.push(currentTown)  
    }

    for (const town of towns) {
      console.log(town);
    }
}
solve(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625']
)