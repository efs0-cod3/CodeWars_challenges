function solution(nums) {
    if (nums == null || nums == []) {
        return [];
    } else {
        return nums.sort((a, b) => a - b)
    }
}