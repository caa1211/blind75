
// Priority Queue
// https://arsenekuo.com/post/2022/04/05/implementation-of-priority-queue-in-javascript
// https://codesandbox.io/s/gracious-hoover-2ct57o?file=/src/index.js:0-3597

class Node {
  constructor(val, priority) {
    this.val = val
    this.priority = priority
  }
}

class PriorityQueue {
  constructor() {
    this.values = []
  }

  bubbleUp() {
    let idx = this.values.length - 1
    let pIdx = Math.floor((idx - 1) / 2)
    const v = this.values
    while (v[idx] && v[pIdx] && v[idx].priority < v[pIdx].priority) {
      ;[v[pIdx], v[idx]] = [v[idx], v[pIdx]]
      idx = pIdx
      pIdx = Math.floor((idx - 1) / 2)
    }
  }

  enqueue(val, priority) {
    this.values.push(new Node(val, priority))
    this.values.length > 1 && this.bubbleUp()
  }

  dequeue(val, priority) {
    const v = this.values
    const lastIndex = v.length - 1
    ;[v[lastIndex], v[0]] = [v[0], v[lastIndex]]
    const popNode = this.values.pop()
    this.values.length > 1 && this.sinkDown()
    return popNode
  }

  sinkDown() {
    const v = this.values
    let idx = 0
    let leftIdx = idx * 2 + 1
    let rightIdx = idx * 2 + 2
    while (
      (v[leftIdx] && v[leftIdx].priority < v[idx].priority) ||
      (v[rightIdx] && v[rightIdx].priority) < v[idx].priority
    ) {
      if (v[leftIdx].priority < v[idx].priority) {
        ;[v[leftIdx], v[idx]] = [v[idx], v[leftIdx]]
        idx = leftIdx
      } else {
        ;[v[rightIdx], v[idx]] = [v[idx], v[rightIdx]]
        idx = rightIdx
      }
      leftIdx = idx * 2 + 1
      rightIdx = idx * 2 + 2
    }
  }
  print() {
    let c = 0
    while (this.values[c]) {
      console.log(`${this.values[c].val}_${this.values[c].priority}`)
      c++
    }
  }
}

class PriorityQueue2 {
  constructor() {
    this.values = []
  }

  enqueue(val, priority) {
    this.values.push(new Node(val, priority))
    this.values.length > 1 && this.bubbleUp()
  }

  bubbleUp() {
    let idx = this.values.length - 1
    let parentIdx = Math.floor((idx - 1) / 2)
    const { values } = this
    while (
      values[idx] &&
      values[parentIdx] &&
      values[idx].priority < values[parentIdx].priority
    ) {
      ;[values[idx], values[parentIdx]] = [values[parentIdx], values[idx]]
      idx = parentIdx
      parentIdx = Math.floor((idx - 1) / 2)
    }
  }

  dequeue() {
    const lastIdx = this.values.length - 1
    ;[this.values[0], this.values[lastIdx]] = [
      this.values[lastIdx],
      this.values[0]
    ]
    const extractedNode = this.values.pop()
    this.values.length > 1 && this.sinkDown()
    return extractedNode
  }

  sinkDown() {
    let idx = 0
    let leftIdx = 2 * idx + 1
    let rightIdx = 2 * idx + 2
    const { values } = this
    while (
      (values[leftIdx] && values[idx].priority > values[leftIdx].priority) ||
      (values[rightIdx] && values[idx].priority > values[rightIdx].priority)
    ) {
      if (values[rightIdx].priority < values[leftIdx].priority) {
        ;[values[idx], values[rightIdx]] = [values[rightIdx], values[idx]]
        idx = rightIdx
      } else {
        ;[values[idx], values[leftIdx]] = [values[leftIdx], values[idx]]
        idx = leftIdx
      }
      leftIdx = 2 * idx + 1
      rightIdx = 2 * idx + 2
    }
  }

  print() {
    let c = 0
    while (this.values[c]) {
      console.log(`${this.values[c].val}_${this.values[c].priority}`)
      c++
    }
  }
}
console.log("BEGIN")
let PQ = new PriorityQueue()
PQ.enqueue(1, 2)
PQ.enqueue(2, 0)
PQ.enqueue(3, 1)
PQ.enqueue(4, 3)
PQ.enqueue(5, 0)
PQ.enqueue(6, 2)
PQ.dequeue()
PQ.dequeue()
PQ.print()
console.log("-=------")
let PQ2 = new PriorityQueue2()
PQ2.enqueue(1, 2)
PQ2.enqueue(2, 0)
PQ2.enqueue(3, 1)
PQ2.enqueue(4, 3)
PQ2.enqueue(5, 0)
PQ2.enqueue(6, 2)
PQ2.dequeue()
PQ2.dequeue()
PQ2.print()
