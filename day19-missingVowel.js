// Your job is to figure out the index of which vowel is missing from a given string:

// A has an index of 0,
// E has an index of 1,
// I has an index of 2,
// O has an index of 3,
// U has an index of 4.
// Notes: There is no need for string validation and every sentence given will contain all vowles but one. Also, you won't need to worry about capitals.

//a string that contains all vowels but one. Will always be a string, won't ne empty and dont need to account for capital letters

//return the index of the missing vowel

// Examples
// "John Doe hs seven red pples under his bsket"          =>  0  ; missing: "a"
// "Bb Smith sent us six neatly arranged range bicycles"  =>  3  ; missing: "o"

function absentVowel(x){
    const vowels = 'aeiou'

    for(i=0; i<vowels.length; i++){
        if(x.indexOf(vowels[i]) === -1){
            return vowels.indexOf(vowels[i])
        }
    }
}

absentVowel("Bb Smith sent us six neatly arranged range bicycles")