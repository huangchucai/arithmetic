//给定一个不含重复数字的数组 nums ，返回其 所有可能的全排列 。你可以 按任意顺序 返回答案。
//
//
//
// 示例 1：
//
//
//输入：nums = [1,2,3]
//输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
//
//
// 示例 2：
//
//
//输入：nums = [0,1]
//输出：[[0,1],[1,0]]
//
//
// 示例 3：
//
//
//输入：nums = [1]
//输出：[[1]]
//
//
//
//
// 提示：
//
//
// 1 <= nums.length <= 6
// -10 <= nums[i] <= 10
// nums 中的所有整数 互不相同
//
// Related Topics 数组 回溯 👍 2099 👎 0

/**
 *  [1]
 *    backTrack
 *      [1, 2]
 *         backTrack
 *           [1,2,3]
 */

//leetcode submit region begin(Prohibit modification and deletion)
function permute(nums: number[]): number[][] {
  const list: number[][]= []
  const temp: number[] = []

  // 回溯算法
  function backTrack(list: number[][], temp: number[], nums: number[]) {
    if (temp.length > 0 && temp.length === nums.length) {
      list.push([...temp])
      return
    }

    for (let i = 0; i < nums.length; i++) {
      if(temp.includes(nums[i])) {
        continue // 已经处理过的跳过
      }
      // 递归公式
      temp.push(nums[i])
      backTrack(list, temp, nums)
      temp.pop()
    }

  }

  backTrack(list, temp, nums)
  return list
};

console.log(permute([0, 1]));

//leetcode submit region end(Prohibit modification and deletion)
