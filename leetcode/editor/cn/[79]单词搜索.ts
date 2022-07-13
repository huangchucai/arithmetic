//给定一个 m x n 二维字符网格 board 和一个字符串单词 word 。如果 word 存在于网格中，返回 true ；否则，返回 false 。
//
// 单词必须按照字母顺序，通过相邻的单元格内的字母构成，其中“相邻”单元格是那些水平相邻或垂直相邻的单元格。同一个单元格内的字母不允许被重复使用。
//
//
//
// 示例 1：
//
//
//输入：board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word =
//"ABCCED"
//输出：true
//
//
// 示例 2：
//
//
//输入：board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word =
//"SEE"
//输出：true
//
//
// 示例 3：
//
//
//输入：board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word =
//"ABCB"
//输出：false
//
//
//
//
// 提示：
//
//
// m == board.length
// n = board[i].length
// 1 <= m, n <= 6
// 1 <= word.length <= 15
// board 和 word 仅由大小写英文字母组成
//
//
//
//
// 进阶：你可以使用搜索剪枝的技术来优化解决方案，使其在 board 更大的情况下可以更快解决问题？
// Related Topics 数组 回溯 矩阵 👍 1358 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
function exist(board: string[][], word: string): boolean {
  if (board.length === 0) {
    return false
  }
  if (word.length === 0) {
    return true
  }

  let result = false
  let row = board.length
  let col = board[0].length

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      result = findWord(i, j, 0)
      if(result) { // 找到了退出
        return true
      }
    }
  }

  function findWord(i: number, j: number, cur: number): boolean {
    if (i < 0 || i >= row) {
      return false
    }
    if (j < 0 || j >= col) {
      return false
    }
    let curBoard = board[i][j]
    if (curBoard !== word[cur]) {
      return false
    }

    if (cur === word.length - 1) { // 最后一个也匹配
       return true
    }

    board[i][j] = ''
    let ret = findWord(i + 1, j, cur + 1) ||
        findWord(i - 1, j, cur + 1) ||
        findWord(i, j - 1, cur + 1) ||
        findWord(i, j + 1,cur + 1)
    board[i][j] = curBoard
    return ret
  }

  return result
};
console.log(exist([["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]], "ABCCED"));
//leetcode submit region end(Prohibit modification and deletion)
