function solution(score) {
    var answer = [];
    let averageArr = []
    
    for(let i =0; i<score.length; i++){
        let average = (score[i][0] + score[i][1]) /2
        averageArr.push(average)
    }
    
    
    for(let i =0; i<averageArr.length; i++){
        let rank =1;
        
        for (let j = 0; j < averageArr.length; j++) {
            if (averageArr[j] > averageArr[i]) {
                rank++;
            }
        }
        answer.push(rank)
    }
    return answer;
}