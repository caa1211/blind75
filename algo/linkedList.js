class Node {
  constructor(v) {
    this.value = v
    this.next = null
  }
}

class LinkedList {
  constructor(head = null) {
    this.head = head
  }

  add(node) {
    const head = this.head
    if (!head) {
      this.head = node
      this.tail = node
    } else {
      let n = this.head
      while (n.next) {
        n = n.next
      }
      n.next = node
    }
  }

  insertAt(newNode, i) {
    let n = this.head

    if (i === 0) {
      if (!this.head) {
        this.head = newNode
      } else {
        newNode.next = this.head
        this.head = newNode
      }
      return
    }

    let c = 0
    while (c < i - 1) {
      c++
      if (n.next) {
        n = n.next
      } else {
        n = null
        break
      }
    }
    if (n) {
      const node = n
      const nextNode = n.next
      node.next = newNode
      newNode.next = nextNode
    } else {
      console.log('fail')
    }
  }

  removeFromIndex(index) {
    let c = 0
    let n = this.head
    let periousN = null
    if (index === 0) {
      // remove head
      this.head = this.head.next
      return
    } else {
      while (c < index) {
        c++
        if (n) {
          periousN = n
          n = n.next
        } else {
          break
        }
      }
    }

    if (n) {
      periousN.next = n.next
    }
  }

  print() {
    let n = this.head
    var s = ''
    while (n) {
      s = `${s} => ${n.value}`
      n = n.next
    }
    console.log(s)
  }
}

const link = new LinkedList()
link.add(new Node('a'))
link.add(new Node('b'))
link.add(new Node('c'))
link.insertAt(new Node('bb'), 1)
link.removeFromIndex(10)
link.print()
