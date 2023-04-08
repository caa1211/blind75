const climbingStairs = (n) => {
  // # 4 7
  // 1, 1, 1, 1
  // 2, 2
  // 1, 1, 2
  // 2, 1, 1
  // 1, 2, 1

  // # 3
  // 1, 1, 1
  // 1, 2
  // 2, 1

  // # 2
  // 1, 1
  // 2

  if (n < 4) {
    return n
  } else {
    return climbingStairs(n - 2) + climbingStairs(n - 1)
  }
}


var climbStairs = function (n) {
  const ary = [1, 1]
  if (n > 1) {
    for (let i = 2; i <= n; i++) {
      ary[i] = ary[i - 1] + ary[i - 2]
    }
  }
  return ary[ary.length - 1]
}


console.log(climbingStairs(100))
console.log(climbStairs(100))