function solution(quiz) {
    var answer = [];
    
    for(let i =0; i<quiz.length; i++) {
        let arrQuiz = quiz[i].split(' ');
        let solution = 0
        
        solution = Number(arrQuiz[0])
        let last = Number(arrQuiz[arrQuiz.length-1])
        for(let k=0; k<arrQuiz.length; k++){
             
            if(arrQuiz[k] === '+') {
                solution = solution + Number(arrQuiz[k+1])
                 
            } else if (arrQuiz[k] === '-') {
                
                solution = solution - Number(arrQuiz[k+1])
            } else if (arrQuiz[k] === '=') {
                
                
                if (solution === last) {
                    answer.push('O')
                }
                else answer.push('X')
            }
        }
    }
    return answer;
}