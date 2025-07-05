// 1
function compareNumbers(a, b) {
  if (a < b) return -1;
  else if (a > b) return 1;
  else return 0;
}
// 2
function factorial(n) {
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
}
// 3
function combineDigits(a, b, c) {
  return parseInt(`${a}${b}${c}`);
}
// 4
function calculateArea(length, width) {
  if (width === undefined) return length * length;
  return length * width;
}
// 5
function isPerfectNumber(n) {
  let sum = 0;
  for (let i = 1; i < n; i++) {
    if (n % i === 0) sum += i;
  }
  return sum === n;
}
// 6
function perfectNumbersInRange(min, max) {
  const perfectNums = [];
  for (let i = min; i <= max; i++) {
    if (isPerfectNumber(i)) {
      perfectNums.push(i);
    }
  }
  return perfectNums;
}

// 7
function formatTime(hours, minutes = 0, seconds = 0) {
  const h = String(hours).padStart(2, '0');
  const m = String(minutes).padStart(2, '0');
  const s = String(seconds).padStart(2, '0');
  return `${h}:${m}:${s}`;
}

// 8
function timeToSeconds(hours, minutes, seconds) {
  return hours * 3600 + minutes * 60 + seconds;
}

// 9
function secondsToTime(totalSeconds) {
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  return formatTime(hours, minutes, seconds);
}
//10
function timeDifference(h1, m1, s1, h2, m2, s2) {
  const t1 = timeToSeconds(h1, m1, s1);
  const t2 = timeToSeconds(h2, m2, s2);
  const diff = Math.abs(t1 - t2);
  return secondsToTime(diff);
}
console.log("Завдання 1:", compareNumbers(2, 5)); 
console.log("Завдання 2:", factorial(5)); 
console.log("Завдання 3:", combineDigits(1, 4, 9)); 
console.log("Завдання 4.1 (квадрат):", calculateArea(5)); 
console.log("Завдання 4.2 (прямокутник):", calculateArea(5, 3)); 
console.log("Завдання 5:", isPerfectNumber(28)); 
console.log("Завдання 6:", perfectNumbersInRange(1, 10000)); 
console.log("Завдання 7:", formatTime(5)); 
console.log("Завдання 8:", timeToSeconds(1, 1, 1)); 
console.log("Завдання 9:", secondsToTime(3661));
console.log("Завдання 10:", timeDifference(1, 0, 0, 2, 30, 0)); 
