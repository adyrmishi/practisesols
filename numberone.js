function anyTwo(nums, k)
{
    while (nums.length>1) {
        numToFind = nums.pop()
        for (i=0; i<nums.length; i++) {
            if (nums[i] + numToFind == k) {
                return true}}}
    return false}
console.log(anyTwo([10,3,6,8], 17))