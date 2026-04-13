
function sort(width, height, length, mass) {
  const volume = width * height * length;

  const isBulky =
    volume >= 1000000 ||
    width >= 150 ||
    height >= 150 ||
    length >= 150;

  const isHeavy = mass >= 20;

  if (isBulky && isHeavy) return "REJECTED";
  if (isBulky || isHeavy) return "SPECIAL";
  return "STANDARD";
}

console.log("Test 1:", sort(10, 10, 10, 5));       // STANDARD
console.log("Test 2:", sort(200, 10, 10, 5));      // SPECIAL
console.log("Test 3:", sort(10, 10, 10, 25));      // SPECIAL
console.log("Test 4:", sort(200, 200, 200, 25));   // REJECTED
console.log("Test 5:", sort(100, 100, 100, 20));   // SPECIAL
