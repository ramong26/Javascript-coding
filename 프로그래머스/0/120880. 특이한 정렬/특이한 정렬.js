function solution(numlist, n) {
    var answer = [];
    const diffMap = new Map();
    
    for(let i =0; i<numlist.length; i++){
        diffMap.set(numlist[i], Math.abs(n-numlist[i]))
    }

    
    answer = numlist.sort((a,b) => {
        if(diffMap.get(a) === diffMap.get(b)) return b - a;
       return diffMap.get(a) - diffMap.get(b);
    })
    return answer;
}