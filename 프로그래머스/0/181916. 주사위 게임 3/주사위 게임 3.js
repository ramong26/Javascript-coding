function solution(a, b, c, d) {
  let answer = 0;
  let dice = [a, b, c, d];
  const mapDice = new Map();

  dice.forEach((num) => {
    if (mapDice.has(num)) {
      mapDice.set(num, mapDice.get(num) + 1);
    } else {
      mapDice.set(num, 1);
    }
  });

  if (mapDice.size === 1) {
    answer = 1111 * a;

  } else if (mapDice.size === 2) {
    const values = Array.from(mapDice.values());
    const keys = Array.from(mapDice.keys());

    if (values[0] === 3 || values[1] === 3) {
      const p = values[0] === 3 ? keys[0] : keys[1];
      const q = values[0] === 1 ? keys[0] : keys[1];
      answer = (10 * p + q) ** 2;
    } else {
      const p = keys[0];
      const q = keys[1];
      answer = (p + q) * Math.abs(p - q);
    }

  } else if (mapDice.size === 3) {
    let others = [];

    for (let [key, value] of mapDice) {
      if (value === 1) {
        others.push(key); 
      }
    }

    answer = others[0] * others[1];

  } else { 
    answer = Math.min(...dice);
  }

  return answer;
}
