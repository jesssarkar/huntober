// Given a magazine of words and a ransom note, determine if it’s possible to “cut out” and create the ransom note from the magazine words.

 const magazine =
 "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum";

// a string of text

//return a boolean on if you can create the text from the provided magazine excerpt

// describe("Ransom Note", () => {
//  it("Should return true", () => {
//   assert.equal(ransomNote("sit ad est sint", magazine), true);
//  });

// it("Should return false", () => {
//   assert.equal(ransomNote("sit ad est love", magazine), false);
//  });

// it("Should return true", () => {
//   assert.equal(ransomNote("sit ad est sint in in", magazine), true);
//  });

// it("Should return false", () => {
//   assert.equal(ransomNote("sit ad est sint in in in in", magazine), false);
//  });
// });

//split and make a hashmap of the magazine article
//split the words in the note
//the loop through the hasmap and if a word appears subtract by 1
//if any of the values become negative return falst

function ransomNote(note, magazine){
    const magSplit = magazine.split(' ')
    const noteSplit = note.split(' ')
    const magObj = {}
    let possible = true

    for(word of magSplit){
        if(magSplit[word]){
            magSplit[word]++
        }

        else{magSplit[word]=1}
    }

    for(const word of noteSplit){
        if(magSplit[word]){
            magSplit[word]--
        
        if(magSplit[word] < 0)
            return false
        } else {return false}
    }
    return possible
}

console.log(ransomNote("sit ad est love", magazine))