// Given an array of strings of the same letter type. Return a new array, which will differ in that the length of each element is equal to the average length of the elements of the previous array.


//an array of strings, will include the same letter, length will be different, will always be greater than one

//return the average length of the strings. use Math.round if its not an integer

// A few examples:

// ['u', 'y'] =>  ['u', 'y'] // average length is 1
// ['aa', 'bbb', 'cccc'] => ['aaa', 'bbb', 'ccc'] // average length is 3
// ['aa', 'bb', 'ddd', 'eee'] => ['aaa', 'bbb', 'ddd', 'eee'] // average length is 2.5 round up to 3
// If the average length is not an integer, use Math.round().
// The input array's length > 1

function averageLength(array) { 
    let arrayLength = array.length
    let stringLength = array.slice().join('').length
    let avgLength = Math.round(stringLength / arrayLength)

    return array.map(string => string[0].repeat(avgLength))

}