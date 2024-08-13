"use strict";
function removeElement(nums, val) {
    nums = nums.filter((e) => e !== val);
    return nums;
}
let nums = [3, 2, 2, 3], val = 3;
console.log(removeElement(nums, val));
