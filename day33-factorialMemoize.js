function factorial(n){
    const memo = {}
 
    if(n<=1){
     return 1
    }
 
    else if(memo[n]){
     return memo[n]
    }
 
    else{
     let result = n * factorial(n-1)
     memo[n] = result
     return result
    }
 }



