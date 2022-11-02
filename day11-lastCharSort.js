// Given a string of words (x), you need to return an array of the words, sorted alphabetically by the final character in each.

// If two words have the same last letter, they returned array should show them in the order they appeared in the given string.

// All inputs will be valid.

//a string of words

//return an array sorted by the last character. If more than one word have the same last character it should keep its order that it appeared

// last('man i need a taxi up to ubud'), ['a', 'need', 'ubud', 'i', 'taxi', 'man', 'to', 'up']
// last('what time are we climbing up the volcano'), ['time', 'are', 'we', 'the', 'climbing', 'volcano', 'up', 'what']
// last('take me to semynak'), ['take', 'me', 'semynak', 'to'] 

//split the string



function last(x){
    return x.split(' ').sort((a,b) => a.charCodeAt(a.length-1) - b.charCodeAt(b.length-1))
}