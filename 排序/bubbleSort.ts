let array = [
  366, 240, 866, 115, 9, 760, 553, 354, 232, 374, 450, 426, 944, 2, 393, 143
]

function bubbleSort(arr: number[]): number[] {
  for (let j = 0; j < arr.length; j++) {
    for (let i = 0; i < arr.length - j; i++) {
      if (arr[i] > arr[i + 1]) { // 找到1个最高位置
        [arr[i + 1], arr[i]] = [arr[i], arr[i + 1]]
      }
    }
  }
  return arr
}

console.log(bubbleSort(array))
