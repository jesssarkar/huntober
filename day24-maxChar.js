 
// Given a string of characters, return the character that appears the most often.

// describe("Max Character", () => {
//  it("Should return max character", () => {
//   assert.equal(max("Hello World!"), "l");
//  });
// });

// No String or Array Methods (well brute force it first, but then no methods)! 

//a string of characters

//return the character that appears the most often in the string

//("Hello World!"), "l")

function maxChar(string){
    const strObj = {}
    let maxLetter = null
    let maxCount = 0

    for(char of string){
        if(strObj[char]){
            strObj[char]++
        }
        else {strObj[char] = 1}
    }

    for(const char in strObj){
        if(strObj[char] > maxCount){
            maxLetter = char
            maxCount = strObj[char]
        }
    }
    return maxLetter

}

maxChar('hello world')