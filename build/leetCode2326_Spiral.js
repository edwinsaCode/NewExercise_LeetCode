"use strict";
function spiralMatrix(m, n, head) {
    const matrix = [];
    for (let i = 0; i < m; i++) {
        const row = [];
        for (let j = 0; j < n; j++) {
            row.push(-1);
        }
        matrix.push(row);
    }
    let horizontal = 0;
    let vertical = 0;
    let DIRECTION;
    (function (DIRECTION) {
        DIRECTION[DIRECTION["RIGHT"] = 0] = "RIGHT";
        DIRECTION[DIRECTION["DOWN"] = 1] = "DOWN";
        DIRECTION[DIRECTION["LEFT"] = 2] = "LEFT";
        DIRECTION[DIRECTION["UP"] = 3] = "UP";
    })(DIRECTION || (DIRECTION = {}));
    let arah = DIRECTION.RIGHT;
    let left = 0;
    let right = n - 1;
    let top = 0;
    let bottom = m - 1;
    let current = head;
    while (current !== null) {
        matrix[horizontal][vertical] = current.val;
        current = current.next;
        if (arah === DIRECTION.RIGHT) {
            if (vertical < right) {
                vertical++;
            }
            else {
                arah = DIRECTION.DOWN;
                top++;
                horizontal++;
            }
        }
        else if (arah === DIRECTION.DOWN) {
            if (horizontal < bottom) {
                horizontal++;
            }
            else {
                arah = DIRECTION.LEFT;
                right--;
                vertical--;
            }
        }
        else if (arah === DIRECTION.LEFT) {
            if (vertical > left) {
                vertical--;
            }
            else {
                arah = DIRECTION.UP;
                bottom--;
                horizontal--;
            }
        }
        else if (arah === DIRECTION.UP) {
            if (horizontal > top) {
                horizontal--;
            }
            else {
                arah = DIRECTION.RIGHT;
                left++;
                vertical++;
            }
        }
    }
    return matrix;
}
const m = 3;
const n = 5;
const head = [3, 0, 2, 6, 8, 1, 7, 9, 4, 2, 5, 5, 0];
const createLinkedList = (arr) => {
    if (arr.length === 0) {
        return null;
    }
    const head = { val: arr[0], next: null };
    let list = head;
    for (let i = 1; i < arr.length; i++) {
        list.next = { val: arr[i], next: null };
        list = list.next;
    }
    return head;
};
console.log(createLinkedList(head));
console.log(spiralMatrix(m, n, createLinkedList(head)));
