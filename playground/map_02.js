// https://youtu.be/sAJ82Ma33kM
// https://www.youtube.com/watch?v=8NX808LlUFQ
let a = { name: 'Sherlock' }
let b = { name: 'Wetson' }

const characters = new Map()
characters.set(a, 'Detective')
characters.set(b, 'Doctor')
console.log(characters.get(a), characters.get(b))

for (const [k, v] of characters) {
  console.log(`${k}-${v}`)
  console.log(`k-${k.name}`)
}
