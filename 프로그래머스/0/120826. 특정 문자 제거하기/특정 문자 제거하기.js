function solution(my_string, letter) {
    var string = my_string.split("");

  
    let answer = string.filter(fil=>fil!==letter);
    console.log(answer);
    return answer.join("");
}
