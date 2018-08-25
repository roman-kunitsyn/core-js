console.log(rxjs);

// var stream$ = rxjs.Observable.create(function(observer) {
//   observer.next("one");
//   setTimeout(() => {
//     observer.next("1000 sec");
//   }, 1000);
//   setTimeout(() => {
//     observer.next("2000 sec");
//   }, 2000);
//   setTimeout(() => {
//     observer.next("3000 sec");
//   }, 3000);
//   setTimeout(() => {
//     observer.error("Error here!");
//   }, 4000);
//   setTimeout(() => {
//     observer.complete();
//   }, 3000);
// });
// stream$.subscribe(
//   data => {
//     console.log("stream stream$", data);
//   },
//   error => {
//     console.log("error stream$", error);
//   },
//   () => {
//     console.log("complete stream$");
//   }
// );

// let counterClick = 0;
// let button = document.querySelector("button");
// let btn$ = rxjs.fromEvent(button, "click");
// btn$.subscribe(
//   data => {
//     console.log("stream btn$", data);
//     counterClick++;
//     document.querySelector("h1.counter-click").innerHTML = `${counterClick}`;
//   },
//   error => {
//     console.log("error btn$", error);
//   },
//   () => {
//     console.log("complete btn$");
//   }
// );

// let input = document.querySelector("input");
// let input$ = rxjs.fromEvent(input, "keyup");
// input$.subscribe(
//   data => {
//     console.log("stream input$", data);
//     document.querySelector("h1.input-value").innerHTML = `${input.value}`;
//   },
//   error => {
//     console.log("error input$", error);
//   },
//   () => {
//     console.log("complete input$");
//   }
// );

// let doc$ = rxjs.fromEvent(document, "mousemove");
// doc$.subscribe(
//   data => {
//     console.log("stream doc$", data);
//     document.querySelector("h1.position").innerHTML = `X: ${data.clientX}, Y: ${
//       data.clientY
//     }`;
//   },
//   error => {
//     console.log("error doc$", error);
//   },
//   () => {
//     console.log("complete doc$");
//   }
// );

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

// rxjs
//   .of(1, 2, null, [1, 2], undefined, { key: 1 }, true, "string")
//   .subscribe(createSubscribe("of"));

// rxjs
//   .interval(500)
//   .pipe(rxjs.operators.take(15))
//   .subscribe(createSubscribe("interval"));

// rxjs
//   .timer(4500, 500)
//   .pipe(rxjs.operators.take(10))
//   .subscribe(createSubscribe("timer"));

// rxjs.range(5, 6).subscribe(createSubscribe("range"));

// let arr = [1, 2, { id: "array" }];
// rxjs.from(arr).subscribe(createSubscribe("from arr"));

// let set = new Set(["e", 5, { id: "set" }]);
// rxjs.from(set).subscribe(createSubscribe("from set"));

// let map = new Map([[1, 2], [{ id: "mapkey" }, { id: "mapvalue" }], [5, 7]]);
// rxjs.from(map).subscribe(createSubscribe("from map"));

// function delay(ms = 1000) {
//   var p = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(ms);
//     }, ms);
//   });
//   return p;
// }

// delay(3000).then(()=>{
//     console.log("Promise was resolved.");
// })

// let p$ = rxjs.from(delay(4000));
// p$.subscribe(createSubscribe("fromPromise"));

// rxjs
//   .interval(1000)
//   .pipe(
//     rxjs.operators.take(10),
//     rxjs.operators.map(x => {
//         return x * x;
//     })
//   )
//   .subscribe(createSubscribe("map"));

// rxjs
//   .of("hello", "world", "me")
//   .pipe(
//     rxjs.operators.map(x => {
//       return x.toUpperCase();
//     })
//   )
//   .subscribe(createSubscribe("map"));

// let input = document.querySelector("input");
// let input$ = rxjs.fromEvent(input, "keyup");
// input$
//   .pipe(
//     // rxjs.operators.map(x => {
//     //   return x.target.value;
//     // }),
//     rxjs.operators.pluck("target", "value"),
//     rxjs.operators.map(x => {
//       return x.toUpperCase();
//     }),
//     rxjs.operators.map(x => {
//       return {
//         value: x,
//         length: x.length
//       };
//     })
//   )
//   .subscribe(createSubscribe("map"));

// rxjs
//   .of("hello", "world", "me")
//   .pipe(rxjs.operators.first())
//   .subscribe(createSubscribe("first"));

// rxjs
//   .of("hello", "world", "me")
//   .pipe(rxjs.operators.last())
//   .subscribe(createSubscribe("last"));

// rxjs
//   .of(1, 2, { length: 5 }, "hello", "world", "me")
//   .pipe(
//     rxjs.operators.find(x => {
//       return !!x.length;
//     })
//   )
//   .subscribe(createSubscribe("find"));

// rxjs
//   .of(1, 2, { length: 5 }, "hello", "world", "me")
//   .pipe(
//     rxjs.operators.findIndex(x => {
//       return !!x.length;
//     })
//   )
//   .subscribe(createSubscribe("findIndex"));

// rxjs
//   .of(1, 2, { length: 5 }, "hello", "world", "me")
//   .pipe(rxjs.operators.take(3))
//   .subscribe(createSubscribe("take"));

// rxjs
//   .of(1, 2, { length: 5 }, "hello", "world", "me")
//   .pipe(rxjs.operators.skip(3))
//   .subscribe(createSubscribe("skip"));

// rxjs
//   .of(1, 2, { length: 5 }, "hello", "world", "me")
//   .pipe(
//     rxjs.operators.skipWhile(x => {
//       return typeof x === "number";
//     })
//   )
//   .subscribe(createSubscribe("skipWhile"));

// let canvas = document.querySelector("canvas");
// canvas.style = "border: 1px solid black;";
// let ctx = canvas.getContext("2d");
// ctx.moveTo(0, 0);
// ctx.lineTo(0, 200);
// ctx.moveTo(100, 0);
// ctx.lineTo(100, 200);
// ctx.moveTo(200, 0);
// ctx.lineTo(200, 200);

// ctx.moveTo(0, 0);
// ctx.lineTo(200, 0);
// ctx.moveTo(0, 100);
// ctx.lineTo(200, 100);
// ctx.moveTo(0, 200);
// ctx.lineTo(200, 200);
// ctx.stroke();

// let point = document.querySelector("div.point");

// rxjs
//   .interval(500)
//   .pipe(
//     rxjs.operators.map(x => {
//       let randomX = 200 * Math.random();
//       let randomY = 200 * Math.random();
//       ctx.beginPath();
//       ctx.arc(randomX, randomY, 3, 0, 2 * Math.PI);
//       ctx.stroke();
//       point.style.top = randomY + "px";
//       point.style.left = randomX + "px";
//       return {
//         randomX: randomX,
//         randomY: randomY,
//         max: 200,
//         floor: Math.floor(randomX),
//         ceil: Math.ceil(randomX),
//         round: Math.round(randomX)
//       };
//     })
//   )
//   .subscribe(createSubscribe("random"));

// rxjs
//   .interval(500)
//   .pipe(
//     rxjs.operators.skipUntil(rxjs.timer(3000)),
//     rxjs.operators.takeUntil(rxjs.timer(5000))
//   )
//   .subscribe(createSubscribe("skipUntil"));

// rxjs
//   .range(0, 10)
//   .pipe(rxjs.operators.filter(x => x > 3))
//   .subscribe(createSubscribe("range filter"));

// rxjs
//   .interval(500)
//   .pipe(
//     rxjs.operators.buffer(rxjs.interval(2000)),
//     rxjs.operators.take(5)
//   )
//   .subscribe(createSubscribe("buffer"));

// rxjs
//   .interval(500)
//   .pipe(
//     rxjs.operators.bufferTime(2000),
//     rxjs.operators.take(5)
//   )
//   .subscribe(createSubscribe("bufferTime"));

// rxjs
//   .range(0, 40)
//   .pipe(rxjs.operators.bufferCount(7))
//   .subscribe(createSubscribe("bufferCount"));

// rxjs
//   .interval(1000)
//   .pipe(
//     rxjs.operators.buffer(rxjs.fromEvent(document, "click")),
//     rxjs.operators.map(x => x.length)
//   )
//   .subscribe(createSubscribe("buffer"));

// let s1$ = rxjs.interval(1000).pipe(rxjs.operators.map(x => "stream s1: " + x));
// let s2$ = rxjs.interval(500).pipe(rxjs.operators.map(x => "stream s2: " + x));
// rxjs.merge(s1$, s2$).subscribe(createSubscribe("merge"));

// let s1$ = rxjs.from([1,2,3]).pipe(rxjs.operators.map(x => "stream s1: " + x));
// let s2$ = rxjs.from([4,5,6]).pipe(rxjs.operators.map(x => "stream s2: " + x));
// rxjs.concat(s1$, s2$).subscribe(createSubscribe("concat"));

// rxjs
//   .range(1, 3)
//   .pipe(
//     rxjs.operators.map(x =>
//       rxjs.interval(x * 100).pipe(rxjs.operators.map(y => `stream s${x}: ${y}`))
//     ),
//     rxjs.operators.concatAll()
//   )
//     .subscribe(createSubscribe("concatAll"));