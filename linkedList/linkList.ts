/**
 * 实现链表
 */
class LinkNode<T> {
  val: unknown
  next: LinkNode<T> | null

  constructor(val: T) {
    this.val = val
    this.next = null
  }
}

class LinkLinkNodeList<T> {
  head: LinkNode<T> | null
  length: number

  constructor() {
    this.head = null
    this.length = 0
  }

  append(val: number) {
    let node = new LinkNode(val)
    let currentNode = this.head as LinkNode<T>
    if (this.head == null) {
      this.head = node
    } else {
      while (currentNode.next) {
        currentNode = currentNode.next
      }
      currentNode.next = node
    }
    this.length++
  }

  toString() {
    let p = this.head
    let ret = ''
    if (p) {
      do {
        ret += (p.val += '=>')
        p = p.next as LinkNode<T>
      } while (p.next)
      if(p) {
        ret += p.val
      }
      return ret
    } else {
      console.log('empty')
    }
  }
}

let list = new LinkLinkNodeList()
list.append(1)
list.append(2)
list.append(3)
list.append(4)
console.log(list.length);
console.log(list.toString())

// export  {}
