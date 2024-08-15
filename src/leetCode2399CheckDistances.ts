function checkDistances(s: string, distance: number[]): boolean {
  let postion: number[] = Array(26).fill(-1);
  let alphabet = "abcdefghijklmnopqrstuvwxyz";

  for (let i = 0; i < s.length; i++) {
    let alphabetIdx = alphabet.indexOf(s[i]);
    console.log(alphabetIdx);
    if (postion[alphabetIdx] === -1) {
      postion[alphabetIdx] = i;
    } else if (i - postion[alphabetIdx] - 1 !== distance[alphabetIdx]) {
      return false;
    }
  }
  return true;
}

let s = "abaccb",
  distance = [
    1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0,
  ];

console.log(checkDistances(s, distance));
