// Given an array of numbers, return all pairs that add up to a given sum. The numbers can be used more than once.

// describe("Two Sum", () => {
//  it("Should implement two sum", () => {
//   assert.deepEqual(twoSum([1, 2, 2, 3, 4], 4), [[2, 2], [3, 1]]);
//  });
// });

//an array of numbers and a single integer

//return arrays of the pairs of numbers that add up to the integer

//


function twoSum(arr, int){
    const pairs = []
    const nums = {}

    for(const num1 of arr){
        const num2 = int - num1
        if(nums[num2]){
            pairs.push([num1,num2])
        }
        else {nums[num1] = 1}
    }

    return pairs
}


twoSum([1, 2, 2, 3, 4], 4)