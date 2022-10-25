/* Return the number of unique arrays that can be formed by picking exactly one element from each subarray.

For example: solve([[1,2],[4],[5,6]]) = 4, because it results in only 4 possibilites. They are [1,4,5],[1,4,6],[2,4,5],[2,4,6].

Make sure that you don't count duplicates; for example solve([[1,2],[4,4],[5,6,6]]) = 4, since the extra outcomes are just duplicates.



//several arrays of numbers, may be duplicates

//return the nuymber of unique arrays that can be formed by taking one element from each sub array not including duplicates

solve([[1,2],[4],[5,6]]),4)
solve([[1,2],[4,4],[5,6,6]]),4)
solve([[1,2],[3,4],[5,6]]),8)
solve([[1,2,3],[3,4,6,6,7],[8,9,10,12,5,6]]),72) */

//map through array and use set to make sure each is unique
//then use reduce to multiple the length of each array

function solve(arr) {
    const newArr = arr.map(x => [...new Set(x)])

    return newArr.reduce((acc, cur) => acc * cur.length, 1)
  };

  solve([[1,2],[4,4],[5,6,6]])