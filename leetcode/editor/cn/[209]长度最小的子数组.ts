//给定一个含有 n 个正整数的数组和一个正整数 target 。
//
// 找出该数组中满足其和 ≥ target 的长度最小的 连续子数组 [numsl, numsl+1, ..., numsr-1, numsr] ，并返回其长
//度。如果不存在符合条件的子数组，返回 0 。
//
//
//
// 示例 1：
//
//
//输入：target = 7, nums = [2,3,1,2,4,3]
//输出：2
//解释：子数组 [4,3] 是该条件下的长度最小的子数组。
//
//
// 示例 2：
//
//
//输入：target = 4, nums = [1,4,4]
//输出：1
//
//
// 示例 3：
//
//
//输入：target = 11, nums = [1,1,1,1,1,1,1,1]
//输出：0
//
//
//
//
// 提示：
//
//
// 1 <= target <= 10⁹
// 1 <= nums.length <= 10⁵
// 1 <= nums[i] <= 10⁵
//
//
//
//
// 进阶：
//
//
// 如果你已经实现 O(n) 时间复杂度的解法, 请尝试设计一个 O(n log(n)) 时间复杂度的解法。
//
// Related Topics 数组 二分查找 前缀和 滑动窗口 👍 1265 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
function minSubArrayLen(target: number, nums: number[]): number {

  /*  解法1
    let result = nums.length + 1
    for (let i = 0; i < nums.length; i++) {
      let value = target - nums[i]
      let sum = 0
      if(value <= 0) return 1
      for (let j = i + 1; j < nums.length; j++) {
        sum = sum + nums[j]
        if (value <= sum) {
          let subLength = j - i + 1
          result = result > subLength ? subLength : result
        }
      }
    }
    return result > nums.length ? 0 : result*/

  // 解法二
  /*  let length = nums.length
    let result = length + 1
    for (let i = 0; i < length; i++) {
      let sum = 0
      for (let j = i; j < length; j++) {
        sum += nums[j]
        if (target <= sum) {
          let subLength = j - i + 1
          result = Math.min(result, subLength)
          break
        }
      }
    }
    return result > length ? 0 : result*/
  /**
   * 解法3 滑动窗口
   */
  let length = nums.length
  let slow = 0
  let fast = 0
  let sum = 0
  let result = length + 1
  while (fast < length) {
    sum += nums[fast]
    fast++
    while (sum >= target) {
      let subLen = fast - slow
      result = Math.min(result, subLen)
      sum -= nums[slow]
      slow++
    }
  }
  return result > length ? 0 : result
};
//leetcode submit region end(Prohibit modification and deletion)
