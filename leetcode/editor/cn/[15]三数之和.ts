//给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有和为 0 且不重
//复的三元组。
//
// 注意：答案中不可以包含重复的三元组。
//
//
//
// 示例 1：
//
//
//输入：nums = [-1,0,1,2,-1,-4]
//输出：[[-1,-1,2],[-1,0,1]]
//
//
// 示例 2：
//
//
//输入：nums = []
//输出：[]
//
//
// 示例 3：
//
//
//输入：nums = [0]
//输出：[]
//
//
//
//
// 提示：
//
//
// 0 <= nums.length <= 3000
// -10⁵ <= nums[i] <= 10⁵
//
// Related Topics 数组 双指针 排序 👍 4930 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
function threeSum(nums: number[]): number[][] | [] {
  let list = []
  if (nums.length < 3) {
    return []
  }
  // 排序
  nums.sort((a, b) => a - b)

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) { // 跳过之前已经处理的
      continue
    }
    let left = i + 1
    let right = nums.length - 1
    while (left < right) {
      let target = nums[left] + nums[right] + nums[i]
      if (target === 0) {
        list.push([nums[i], nums[left], nums[right]])

        while (nums[left] === nums[left + 1]) {
          left++
        }
        left++
        while (nums[right] === nums[right - 1]) {
          right--
        }
        right--
      } else if (target > 0) {
        right--
      } else {
        left++
      }
    }
  }
  return list
};
//leetcode submit region end(Prohibit modification and deletion)
threeSum([-2, 0, 3, -1, 4, 0, 3, 4, 1, 1, 1, -3, -5, 4, 0])
