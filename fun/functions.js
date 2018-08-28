function generateRandom(max = 10, isInt = false) {
  let random = Math.random() * max;
  if (isInt) {
    return Math.floor(random);
  }
  return random;
}

function generateRandomColor(transparent = false) {
  let red = generateRandom(256, true);
  let green = generateRandom(256, true);
  let blue = generateRandom(256, true);
  let alpha = transparent ? generateRandom(1) : 1;
  let colorStr = `rgba(${red}, ${green}, ${blue}, ${alpha})`;
  return colorStr;
}

function generateQwerty(
  i,
  max = 10,
  easy = true,
  balanser = { q: 1, w: 1, e: 1, r: 1, t: 1, y: 1 }
) {
  let qwerty = {};
  qwerty.i = i;
  let keys = ["q", "w", "e", "r", "t", "y", "i"];
  if (easy) {
    qwerty.q = generateRandom(max);
    qwerty.w = generateRandom(max);
    qwerty.e = generateRandom(max);
    qwerty.r = generateRandom(max);
    qwerty.t = generateRandom(max);
    qwerty.y = generateRandom(max);
  } else {
    qwerty.q = balanser.q * generateRandom(max);
    qwerty.w = balanser.w * (qwerty.q + generateRandom(max)) / 2;
    qwerty.e = balanser.e * (qwerty.w + generateRandom(max)) / 3;
    qwerty.r = balanser.r * (qwerty.e + generateRandom(max)) / 4;
    qwerty.t = balanser.t * (qwerty.r + generateRandom(max)) / 5;
    qwerty.y = balanser.y * (qwerty.t + generateRandom(max)) / 6;
  }
  return qwerty;
}
