//integer
//if the integer is divisible by 3 print Fizz, by 5 print Buzz, by 3 & 5 print FizzBuzz
//(15) -> 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz
//use a for loop, while i <= integer, use modulo to check if the conditions are met and print to console

function fizzBuzz(num){
    for(i=1; i<=num; i++){
        if(i%3===0 && i%5===0){
            console.log('FizzBuzz')
        }
        else if(i%3===0){
            console.log('Fizz')
        }
        else if(i%5===0){
            console.log('Buzz')
        }
        else{console.log(i)}
    }
}

fizzBuzz(15)