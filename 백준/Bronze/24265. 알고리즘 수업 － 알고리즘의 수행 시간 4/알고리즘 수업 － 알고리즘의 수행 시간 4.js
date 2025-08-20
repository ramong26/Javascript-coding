  // 입력을 한 줄씩 읽어와 배열로 저장
  //const input = Number(require("fs").readFileSync("input.txt", "utf-8").trim().split("\n"));
const input = Number(require("fs").readFileSync("/dev/stdin").toString().trim());
  //  const line = input.map(line => line.trim());
  // const basic = line.map((v) => v.split(" ").map(Number));

  console.log((input * (input - 1)) / 2);
  console.log(3 - 1);