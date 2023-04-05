const sort = (ary) => {
  for (let i = 0; i < ary.length; i++) {
    for (let j = 0; j < ary.length; j++) {
      const a = ary[i]
      const b = ary[j]
      if (b > a) {
        ary[i] = b
        ary[j] = a
      }
    }
  }
  return ary
}
const sorted = sort([2, 4, 1, 5, 6, 0])
console.log(sorted)
