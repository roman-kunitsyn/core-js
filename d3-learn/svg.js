let svg = d3.select("svg");
let data = [1, 2, 3, 4, 5, 6];

svg
  .selectAll("rect")
  .data(data)
  .enter()
  .append("rect")
  .attr("x", "")
  .attr("y", "")
  .attr("width", "")
  .attr("height", "")
  .attr("rx", "")
  .attr("ry", "")
  .attr("class", "")
  .attr("transform", "");

svg
  .selectAll("circle")
  .data(data)
  .enter()
  .append("circle")
  .attr("cx", "10")
  .attr("cy", "10")
  .attr("r", "10")
  .attr("class", "circle-class")
  .attr("transform", "");

svg
  .selectAll("ellipse")
  .data(data)
  .enter()
  .append("ellipse")
  .attr("cx", "")
  .attr("cy", "")
  .attr("rx", "")
  .attr("ry", "")
  .attr("class", "")
  .attr("transform", "");

svg
  .selectAll("line")
  .data(data)
  .enter()
  .append("line")
  .attr("x1", "")
  .attr("y1", "")
  .attr("x2", "")
  .attr("y2", "")
  .attr("class", "")
  .attr("transform", "");

svg
  .selectAll("text")
  .data(data)
  .enter()
  .append("text")
  .text("text")
  .attr("x", "")
  .attr("y", "")
  .attr("dx", "")
  .attr("dy", "")
  .attr("class", "")
  .attr("transform", "")
  .attr("text-anchor", "");

svg
  .selectAll("path")
  .data(data)
  .enter()
  .append("path")
  .attr("d", "")
  .attr("class", "")
  .attr("transform", "")
  .attr("pathLength", "");

// rxjs
//   .interval(200)
//   .pipe(
//     rxjs.operators.map(data => {
//       return generateRandom(10);
//     }),
//     rxjs.operators.bufferCount(11)
//   )
//   .subscribe(data => {
//     console.log(data);
//     grp
//       .selectAll("g.graph-circles circle")
//       .data(data)
//       .enter()
//       .append("circle")
//       .attr("cx", (d, i) => {
//         return x(dataX[i]);
//       })
//       .attr("cy", (d, i) => {
//         return y(d);
//       });
//   });

// document.addEventListener("DOMContentLoaded", main);

// function main() {
//     let svg = d3
//         .select("body")
//         .append("svg")
//         .attr("height", "200px")
//         .attr("width", "400px");
//     let data = [1, 2, 3, 2, 6];
//     svg
//         .selectAll("rect")
//         .data(data)
//         .enter()
//         .append("rect")
//         .attr("height", (d, i) => {
//             return 100 * Math.random();
//         })
//         .attr("width", (d, i) => {
//             return 50;
//         })
//         .attr("x", (d, i) => {
//             return 60 * i;
//         })
//         .attr("y", "0")
//         .attr("fill", "red");
//     svg
//         .selectAll("rect")
//         .attr("height", (d, i) => {
//             return generateRandom();
//         })
//         .attr("fill", (d, i) => {
//             return generateRandomColor();
//         });
//     svg
//         .selectAll("circle")
//         .data(data)
//         .enter()
//         .append("circle")
//         .attr("cx", (d, i) => {
//             return 60 * i + 25;
//         })
//         .attr("cy", "10")
//         .attr("r", "10");
// }

let line = d3
  .line()
  .x((d, i) => {
    return d.x;
  })
  .y((d, i) => {
    return d.y;
  })
  .curve(d3.curveBasis);

let area = d3
  .area()
  .x((d, i) => {
    return d.x;
  })
  .y0((d, i) => {
    return d.y0;
  })
  .y1((d, i) => {
    return d.y1;
  })
  .curve(d3.curveBasis);
