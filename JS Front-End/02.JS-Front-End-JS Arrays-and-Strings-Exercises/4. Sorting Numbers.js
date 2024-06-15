function solve(nums){
    nums.sort((a, b) => a - b);
    let newArr=[];
    for(let i=0; i<Math.trunc(nums.length/2); i++) {
      newArr.push(nums[i]);
      newArr.push(nums[nums.length-i-1]);
    }
    if (Math.trunc(nums.length/2)!==nums.length/2) {
        newArr.push(nums[Math.trunc(nums.length/2)]);
    }
    return newArr;
}
solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56])