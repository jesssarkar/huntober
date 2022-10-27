// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

//a string which can have letters, numbers or characters

//return a string with ( if the character appears once or ) if it appears more than once

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 

function duplicateEncode(word){
    const newArray = word.toLowerCase().split('')
    const encode = newArray.map(x => {
        if(word.indexOf(x)===word.lastIndexOf(x))
            {return '('} 
            else return ')'})

    return encode.join('')

}

console.log(duplicateEncode('Supralapsarian'))