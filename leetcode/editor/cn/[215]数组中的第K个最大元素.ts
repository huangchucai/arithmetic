//给定整数数组 nums 和整数 k，请返回数组中第 k 个最大的元素。
//
// 请注意，你需要找的是数组排序后的第 k 个最大的元素，而不是第 k 个不同的元素。
//
//
//
// 示例 1:
//
//
//输入: [3,2,1,5,6,4] 和 k = 2
//输出: 5
//
//
// 示例 2:
//
//
//输入: [3,2,3,1,2,4,5,5,6] 和 k = 4
//输出: 4
//
//
//
// 提示：
//
//
// 1 <= k <= nums.length <= 10⁴
// -10⁴ <= nums[i] <= 10⁴
//
// Related Topics 数组 分治 快速选择 排序 堆（优先队列） 👍 1739 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
function findKthLargest(nums: number[], k: number): number {
  function quickSelected(nums: number[], k: number) {
    return quickSort(nums, 0, nums.length - 1, k)
  }

  function quickSort(nums: number[], start: number, end: number, k: number): number {
    if (start < end) {
      const index = position(nums, start, end) as number
      if (index === k) {
        return nums[index]
      } else if (index < k) {
        return quickSort(nums, index + 1, end, k)
      } else {
        return quickSort(nums, start, index - 1, k)
      }
    }
    return nums[start]
  }

  function position(nums: number[], start: number, end: number): number | undefined {
    if (start > end) return
    let init = start
    let flag = nums[start]
    while (start < end) {
      while (flag <= nums[end] && start < end) {
        end--
      }

      while (flag >= nums[start] && start < end) {
        start++
      }

      if (start < end) {
        [nums[start], nums[end]] = [nums[end], nums[start]]
      }
    }
    [nums[start], nums[init]] = [nums[init], nums[start]]
    return start
  }

  return quickSelected(nums, nums.length - k)
};

console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2));
//leetcode submit region end(Prohibit modification and deletion)
