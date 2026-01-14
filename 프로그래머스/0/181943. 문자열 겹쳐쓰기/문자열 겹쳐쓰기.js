function solution(my_string, overwrite_string, s) {
    let mySplit = my_string.split('');
    let overwriteSplit = overwrite_string.split('');
    
    for (let i = 0; i < overwriteSplit.length; i++) {
        mySplit[s + i] = overwriteSplit[i];
    }
    
    return mySplit.join('');
}
