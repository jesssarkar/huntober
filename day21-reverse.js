// Given a string of characters as input, write a function that returns it with the characters reversed. No Reverse Method (well brute force it first, but then no reverse method)! 

//a string of characters

//return that string reversed without using the reverse method

//reverse(jessica) => acissej
//reverse(kaju) => ujak
//reverse('Mingo!') => !ogniM

//declare an empty string = reversedStr
//use a for loop, to loop through the string
//set reversedStr to string[i] + reversedStr
//return reversedStr

function reverse(string){
    let reversedStr = ''

    for(i=0; i<string.length; i++){
        reversedStr = string[i] + reversedStr
    }

    console.log(reversedStr)
}


reverse('Mingo!')