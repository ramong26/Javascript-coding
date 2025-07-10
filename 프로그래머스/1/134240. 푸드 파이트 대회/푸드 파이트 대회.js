function solution(food) {
    let arr = [];

    for (let i = 1; i <= food.length-1; i++) {
        let repeat = Math.floor(food[i] / 2);
        for (let j = 0; j < repeat; j++) {
            arr.push(i);
        }
    }

    const reverseArr = [...arr].reverse();
    return arr.join("") + "0" + reverseArr.join("");
}
