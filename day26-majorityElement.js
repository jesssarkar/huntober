// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

//an array of numbers

//the element that appears a majority of times, there will always be a majority element

// Example 1:

// Input: nums = [3,2,3]
// Output: 3
// Example 2:

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2

//create an empty object
//loop through the array and if the key is not in the obj create it
//if its in the obj incriment it by 1
//then loop through that and see what element occurs more than length/2 times

var majorityElement = function(nums) {
    const numObj = {}

    for(num of nums){
        if(numObj[num]){
            numObj[num]++
        }
        else{numObj[num] = 1}
    }

    for(const num in numObj){
        if(numObj[num] > nums.length/2){
            console.log(num)
            console.log(nums.length/2)
            return num
        }
    }
};

majorityElement([3,2,3])