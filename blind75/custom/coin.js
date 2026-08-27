
口袋裡有 [1, 2, 3, 2, 5, 5] 這些硬幣，要買一個 10 元的東西。每枚硬幣最多只能使用一次。


function twoCoin(ary, target) {
  const coinSet = new Set();
  let result = false;
  ary.some((n) => {
    const diff = target - n;
	if (coinSet.has(diff)) {
	  result = true;
	  return result;
	} else {
	  coinSet.add(n);
	}
  })
  return result;
}


function manyCoin(ary, target) {
   const subMatch = (subAry, value) => {
      if (subAry.length === 1) {
	    return value === 0 || subAry[0] === value
	  }
      const first = subAry[0]
      const rest = subAry.slice(1);
	  return subMatch(rest, value) ||  subMatch(rest, value - first);
   }
   return subMatch(ary, target)
}


function manyCoin2(ary, target) {
   let memo = {}
   const subMatch = (subAry, value) => {
      if (subAry.length === 1) {
	    return value === 0 || subAry[0] === value
	  }
      const first = subAry[0]
	  let key = subAry.join(',') + '|' + value
	  const rest = subAry.slice(1);
	  if (memo[key]!== undefined) {
	    return memo[key]
	  } else {
	    var result = subMatch(rest, value) ||  subMatch(rest, value - first);
		memo[key] = result;
		return result;
	  }
   }
   return subMatch(ary, target) 
}



