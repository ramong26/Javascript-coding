function solution(spell, dic) {
    const target = spell.sort().join('')
    console.log(target)
    
    for(let i =0; i<dic.length; i++) {
        const word = dic[i].split('').sort().join('');
        
        if(target === word ) return 1
    }
    return 2;
}