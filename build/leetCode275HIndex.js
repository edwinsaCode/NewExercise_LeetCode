"use strict";
function hIndex(citations) {
    citations.sort((a, b) => b - a);
    let h = 0;
    for (let i = 0; i < citations.length; i++) {
        if (citations[i] >= i + 1) {
            h = i + 1;
        }
        else {
            break;
        }
    }
    return h;
}
// let citations = [1, 2, 100];
let citations = [0, 1, 3, 5, 6];
console.log(hIndex(citations));
