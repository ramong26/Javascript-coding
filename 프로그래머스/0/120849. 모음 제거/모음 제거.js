function solution(my_string) {
    const answer = my_string.split('').filter(char => !'aeoui'.includes(char)).join('')
    console.log(answer)
    return answer
}


// const fruits = ['apple', 'banana', 'orange'];
// console.log(fruits.includes('banana')); // true
// console.log(fruits.includes('grape'));  // false