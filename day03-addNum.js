// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.

//an array of integers that can be strings or numbers

//the sum of all the integers as if they were numbers


// assert.strictEqual(sumMix([9, 3, '7', '3']), 22);
// assert.strictEqual(sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]), 42); 
// assert.strictEqual(sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']), 41); 

function sumMix(arr){

    const sum = arr.reduce(
        (previousValue, currentValue) => previousValue + Number(currentValue),
        0)

    return sum

}

sumMix([9, 3, '7', '3'])