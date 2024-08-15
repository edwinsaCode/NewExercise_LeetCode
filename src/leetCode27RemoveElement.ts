function removeElement(nums: number[], val: number): number[] {
  nums = nums.filter((e) => e !== val);
  return nums;
}

function removeElement2(nums: number[], val: number): number {
  let k = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[k] = nums[i];
      k++;
    }
  }
  return k;
}

let nums = [3, 2, 2, 3],
  val = 3;
console.log(removeElement(nums, val));
