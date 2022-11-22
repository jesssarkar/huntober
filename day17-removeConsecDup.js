// Your task is to remove all consecutive duplicate words from a string, leaving only first words entries. For example:

//a string of words

//the string with the consectuvie duplicate words removed

// "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"

// --> "alpha beta gamma delta alpha beta gamma delta"

function removeConsecutiveDuplicates(s){
    return s.split(' ').filter((w,i,a) => a[i] != a[i-1]).join(' ')
}