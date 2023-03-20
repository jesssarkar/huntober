function firstDup (nums) {
    const numObj = {}

    for(num of nums){
        if(numObj[num]){
            return num
        }
        else{numObj[num] = 1}
    }
}

firstDup([1,2,3,4,2,5,6,7])