/* Given a string, return a new string that has transformed based on the input:

Change case of every character, ie. lower case to upper case, upper case to lower case.
Reverse the order of words from the input.
Note: You will have to handle multiple spaces, and leading/trailing spaces.

For example:

"Example Input" ==> "iNPUT eXAMPLE"
You may assume the input only contain English alphabet and spaces. */

//a string of words

//return that string with the words in the reverse order and uppercase switched to lowercase and vice versa

// stringTransformer('Example string'), 'STRING eXAMPLE')

//first reverse the order of the string
//then map through
//if uppercase change to lower case

function stringTransformer(str) {
    const reverseStr = str.split(' ').reverse().join(' ')
    const transformStr = reverseStr.split('').map(x => x === x.toLowerCase() ? x.toUpperCase() : x.toLowerCase()).join('')

    return transformStr
  }