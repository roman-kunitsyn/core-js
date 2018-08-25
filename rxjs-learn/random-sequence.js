let canvas = document.querySelector("canvas");
canvas.style = "border: 1px solid black;";
let ctx = canvas.getContext("2d");
ctx.moveTo(0, 0);
ctx.lineTo(0, 200);
ctx.moveTo(100, 0);
ctx.lineTo(100, 200);
ctx.moveTo(200, 0);
ctx.lineTo(200, 200);

ctx.moveTo(0, 0);
ctx.lineTo(200, 0);
ctx.moveTo(0, 100);
ctx.lineTo(200, 100);
ctx.moveTo(0, 200);
ctx.lineTo(200, 200);
ctx.stroke();

let point = document.querySelector("div.point");

let randomSequence = createRandomSequence(200, 500);
randomSequence.subscribe(data => {
  ctx.beginPath();
  ctx.arc(data.randomX, data.randomY, 3, 0, 2 * Math.PI);
  if (data.randomX > 100 && data.randomY > 100) {
    ctx.fillStyle = "rgba(255, 0, 0, 0.2)";
    ctx.fill();
  }
  if (data.randomX < 100 && data.randomY < 100) {
    ctx.fillStyle = "rgba(255, 255, 0, 0.2)";
    ctx.fill();
  }
  if (data.randomX > 100 && data.randomY < 100) {
    ctx.fillStyle = "rgba(255, 0, 255, 0.2)";
    ctx.fill();
  }
  if (data.randomX < 100 && data.randomY > 100) {
    ctx.fillStyle = "rgba(0, 0, 255, 0.2)";
    ctx.fill();
  }
  ctx.stroke();
  point.style.top = data.randomY + "px";
  point.style.left = data.randomX + "px";
});
// randomSequence
//   .pipe(
//     rxjs.operators.filter(x => {
//       return x.randomX > 100 && x.randomY > 100;
//     })
//   )
//   .subscribe(data => {
//     ctx.beginPath();
//     ctx.arc(data.randomX, data.randomY, 3, 0, 2 * Math.PI);
//     ctx.fillStyle = "green";
//     ctx.fill();
//     ctx.stroke();
//   });

function createRandomSequence(max, speed) {
  return rxjs.interval(speed).pipe(
    rxjs.operators.map(x => {
      let randomX = max * Math.random();
      let randomY = max * Math.random();
      let randomZ = max * Math.random();
      return { index: x, randomX: randomX, randomY: randomY, randomZ: randomZ };
    })
  );
}

function createSubscribe(name) {
  return {
    next(data) {
      console.log(name, "next", data);
    },
    error(err) {
      console.log(name, "error", err);
    },
    complete() {
      console.log(name, "completed");
    }
  };
}
