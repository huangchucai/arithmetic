//给你一个整数数组 nums ，找到其中最长严格递增子序列的长度。
//
// 子序列 是由数组派生而来的序列，删除（或不删除）数组中的元素而不改变其余元素的顺序。例如，[3,6,2,7] 是数组 [0,3,1,6,2,2,7] 的子
//序列。
//
//
// 示例 1：
//
//
//输入：nums = [10,9,2,5,3,7,101,18]
//输出：4
//解释：最长递增子序列是 [2,3,7,101]，因此长度为 4 。
//
//
// 示例 2：
//
//
//输入：nums = [0,1,0,3,2,3]
//输出：4
//
//
// 示例 3：
//
//
//输入：nums = [7,7,7,7,7,7,7]
//输出：1
//
//
//
//
// 提示：
//
//
// 1 <= nums.length <= 2500
// -10⁴ <= nums[i] <= 10⁴
//
//
//
//
// 进阶：
//
//
// 你能将算法的时间复杂度降低到 O(n log(n)) 吗?
//
// Related Topics 数组 二分查找 动态规划 👍 2622 👎 0

// 分2种方式 1. 动态规划    2. 贪心 + 二分搜索
//leetcode submit region begin(Prohibit modification and deletion)
function lengthOfLIS(nums: number[]): number {
  const n = nums.length
  if (n === 0) {
    return 0
  }
  /**
   * 动态规划的解法
   * @type {number}
   */
  /*
    const dp = Array(n).fill(1)
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < i; j++) {
       if(nums[i] > nums[j]) {
         dp[i] = Math.max(dp[i], dp[j] +1)
       }
      }
    }
    return Math.max(...dp)*/

  // 贪心 + 二分
  let result = [ nums[0] ]
  for (let i = 0; i < n; i++) {
    if (nums[i] > result[result.length - 1]) {
      result.push(nums[i])
    } else {
      let left = 0
      let right = result.length - 1
      while (left < right) {
        let mid = ( left + right ) >> 1
        if(nums[i] > result[mid] ) {
          left = mid +1
        } else {
          right = mid
        }
      }
      result[left] = nums[i]
    }
  }
  console.log('----1--',result)
  return result.length
};
//leetcode submit region end(Prohibit modification and deletion)
// console.log(lengthOfLIS([0,1,0,3,2,3]))
console.log(lengthOfLIS([10,9,2,5,3,4]))
