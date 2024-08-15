"use strict";
function rotate(num, k) {
    for (let i = 0; i < k; i++) {
        let j = num.pop();
        if (j || j === 0) {
            num.unshift(j);
        }
    }
    return num;
}
//Atau
function rotate2(num, k) {
    let length_ = num.length;
    let rotate = k % length_;
    let rotatedArr = num
        .slice(length_ - rotate)
        .concat(num.slice(0, length_ - rotate));
    return rotatedArr;
}
let num = [1, 2, 3, 4, 5, 6, 7], k = 1;
console.log(rotate2(num, k));
console.log(6 % 7);
