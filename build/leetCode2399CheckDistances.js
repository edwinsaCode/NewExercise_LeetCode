"use strict";
function checkDistances(s, distance) {
    //Pertama kita buatkan aray pembanding untuk distance
    let postion = [];
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    for (let i = 0; i < alphabet.length; i++) {
        postion.push(-1);
    }
    //kita ambil index sesuai alphabet
    for (let i = 0; i < s.length; i++) {
        let alphabetIdx = -1;
        for (let j = 0; j < alphabet.length; j++) {
            if (s[i] === alphabet[j]) {
                alphabetIdx = j;
                break;
            }
        }
        // simpan posisi dan hitung jaraknya
        if (postion[alphabetIdx] === -1) {
            postion[alphabetIdx] = i;
        }
        else {
            let totalDistance = i - postion[alphabetIdx] - 1;
            //terakhir compare apakah jaraknya sama dengan distance
            //   console.log(postion);
            if (totalDistance !== distance[alphabetIdx]) {
                return false;
            }
        }
    }
    return true;
}
let s = "aa", distance = [
    1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0,
];
console.log(checkDistances(s, distance));
