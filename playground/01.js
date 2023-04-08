const map = new Map()
map.set('a', 1)
map.set('b', 2)

for (let [k, v] of map) {
  console.log(`${k}, ${v}`)
}

for (let [, v] of map) {
  console.log(`m2: ${v}`)
}

var m = {
  a: '1',
  b: '2'
}
var ary = ['a', 'b']
for (const key in m) {
  if (Object.hasOwnProperty.call(m, key)) {
    const element = m[key]
    console.log(`forin ${element}`)
  }
}

let a
console.log(`undefined a: ${a?.b ?? ''}`)
