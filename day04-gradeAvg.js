// It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

// Return the average of the given array rounded down to its nearest integer.

// The array will never be empty.

//an array of numbers, will never be empty

//return the avg of the numbers, rounded down to the neartest integer

// getAverage([2,2,2,2]),2)
// getAverage([1,2,3,4,5,]),3);
// getAverage([1,1,1,1,1,1,1,2]),1)

function getAverage(arr){
    const sum = arr.reduce(
        (acc, cur) => acc + cur, 0
      );

    return Math.floor(sum/arr.length)        
}

console.log(getAverage([1,2,3,4,5,]))