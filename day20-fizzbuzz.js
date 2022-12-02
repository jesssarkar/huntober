// Given a number as an input, print out every integer from 1 to that number. However, when the integer is divisible by 2, print out “Fizz”; when it’s divisible by 3, print out “Buzz”; when it’s divisible by both 2 and 3, print out “Fizz Buzz”.

//an integer, will always be posititve

//every integer from 1 to the given integer, if its divisible by 2 print Fizz, by 3 print Buzz and when its both print out Fizz Buzz

//fizzbuzz(12) = 1, Fizz, Buzz, Fizz, 5, FizzBuzz, 7, Fizz, Buzz, Fizz, 11, FizzBuzz

//use a for loop with i =1 and i<= n
//use modulus to check if its divisible by 6
//then check 2 and 3

function fizzbuzz(n){
    for(i=1; i<=n; i++){
        if(i%6===0){
            console.log('FizzBuzz')
        }
        else if(i%2===0){
            console.log('Fizz')
        }
        else if(i%3===0){
            console.log('Buzz')
        }
        else{console.log(i)}
    }
}



fizzbuzz(12)