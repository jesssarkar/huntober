// Find the greatest common divisor of two positive integers. The integers can be large, so you need to find a clever solution.

// The inputs x and y are always greater or equal to 1, so the greatest common divisor will always be an integer that is also greater or equal to 1.

// Test.assertEquals(mygcd(30,12),6)
// Test.assertEquals(mygcd(8,9),1)
// Test.assertEquals(mygcd(1,1),1)

function mygcd(x,y){
    const a = Math.max(x,y)
    const b = Math.min(x,y)
    if(b===0){
        return a
    }
   return mygcd(b, a%b)
  }