// https://www.acmicpc.net/problem/5557
// 5557번 - 1학년 - 실버 5
const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const N = parseInt(input[0]);
const nums = input[1].split(' ').map(Number);

// DP[i][sum] = i번째 숫자까지 계산했을 때 합이 sum이 되는 경우의 수
const dp = Array.from({ length: N - 1 }, () => Array(21).fill(0n));

// 초기값: 첫 번째 수
dp[0][nums[0]] = 1n;

for (let i = 1; i < N - 1; i++) {
  // 마지막 숫자는 우변
  for (let sum = 0; sum <= 20; sum++) {
    if (dp[i - 1][sum] === 0n) continue;

    const cur = BigInt(nums[i]);

    // +
    if (sum + nums[i] <= 20) dp[i][sum + nums[i]] += dp[i - 1][sum];

    // -
    if (sum - nums[i] >= 0) dp[i][sum - nums[i]] += dp[i - 1][sum];
  }
}

// 마지막 숫자를 결과로 확인
console.log(dp[N - 2][nums[N - 1]].toString());
