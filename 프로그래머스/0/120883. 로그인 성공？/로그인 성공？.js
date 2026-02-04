function solution(id_pw, db) {
    var answer = '';
    
    for(let i =0; i< db.length; i++) {
        let id = db[i][0]
        let password = db[i][1]
        console.log(id, password)
        
        if(id_pw[0] === id) {
            if(id_pw[1] === password){
                return 'login'
            } else return 'wrong pw'
        } else continue
    }
    
    return 'fail'
    
}