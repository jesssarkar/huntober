// Count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.

//a string of characters, may be empty

//an object with the number of characters set as a key value pair

//count("aba"), { a: 2, b: 1 }

//set a variable to an empty object
//use a for of loop to loop throught the string
//check for the character in object
//if it doesnt exsits, set it equal to one
//if it exsits add 1 to current value


function count (string) {  
   let countChar = {}

   for(char of string){
       if(countChar[char]){
           countChar[char] +=1
       }
       else {countChar[char] = 1}
   }
   return countChar
  }