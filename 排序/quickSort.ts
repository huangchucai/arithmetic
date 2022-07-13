let array2 = [
  366, 240, 866, 115, 9, 760, 553, 354, 232, 374, 450, 426, 944, 2, 393, 143
]

function quickSort(arr: number[]): number[] {
  if (arr.length < 2) {
    return arr
  }
  let left = []
  let right = []
  let flag = arr[0] // 标志位
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < flag) { // 放入左边
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }
  return quickSort(left).concat(flag, quickSort(right))
}

// console.log(quickSort(array2))

function quick(arr: number[], start: number, end: number): number {
  let init = start // 记录初始点值1
  let flag = arr[init]
  while (start < end) {
    while (flag <= arr[end] && start < end) {
      end--
    }
    while (flag >= arr[start] && start < end) {
      start++
    }
    if (start < end) {
      [arr[start], arr[end]] = [arr[end], arr[start]]
    }
  }
  // [arr[init], arr[start]] = [arr[start], arr[init]]
  [arr[init], arr[start]] = [arr[start], arr[init]]
  return start
}

// 原地快排
function quickSort2(arr: number[]): number[] {
  function sort(arr: number[], start: number, end: number) {
    if (start < end) {
      let index = quick(arr, start, end)
      sort(arr, start, index - 1)
      sort(arr, index + 1, end)
    }
    return arr
  }

  return sort(arr, 0, arr.length - 1)
}

// let array3 = [5, 8, 7, 9, 4, 6, 2]
let array3 = [9, 7, 6, 8]
quickSort2(array3)
console.log(array3);


let array4 = [2,1]
quickSort2(array4)
console.log(array4);

/*function quickSort3(arr: number[], left: number, right: number) {
  if (left >= right) {
    return
  }
  let i = left
  let j = right
  let tmp = arr[i]

  while (i < j) {
    while (i <j && arr[j] > tmp) {
      j = j - 1
    }
    arr[i] = arr[j]
    while (i < j && arr[i] <= tmp) {
      i = i + 1
    }
    arr[j] = arr[i]
  }
  arr[i] = tmp
  quickSort3(arr , left , i -1 )
  quickSort3(arr , i+1 , right)
}*/

