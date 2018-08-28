(function app() {
  console.log("app");

  d3.select(window).on("resize", generateGraph);
  generateGraph();

  function generateGraph() {
    let svg = d3.select("body").select("svg");
    if (!svg.empty()) {
      svg.remove();
    }

    let svgSize = {
      w: document.body.clientWidth,
      h: window.innerHeight / 2
    };

    let margin = { top: 50, rigth: 50, bottom: 50, left: 50 };

    svg = d3
      .select("body")
      .append("svg")
      .attr("width", svgSize.w)
      .attr("height", svgSize.h)
      .attr("style", "background: none;");

    let dataX = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
    let dataY = [6, 5, 6, 5, 6, 6, 5, 6, 4, 10, 0];

    let x = d3
      .scaleLinear()
      .domain([0, d3.max(dataX) + 1])
      .range([0, svgSize.w - margin.left - margin.rigth]);
    let xAxis = d3.axisBottom(x);

    let y = d3
      .scaleLinear()
      .domain([d3.min(dataY) - 1, d3.max(dataY) + 1])
      .range([svgSize.h - margin.top - margin.bottom, 0]);
    let yAxis = d3.axisLeft(y);

    let line = d3
      .line()
      .x((d, i) => {
        return x(dataX[i]);
      })
      .y((d, i) => {
        return y(d);
      })
      .curve(d3.curveCardinal);

    let grp = svg
      .append("g")
      .attr("class", "graph")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    let axises = grp.append("g").attr("class", "axises");
    axises
      .append("g")
      .attr("class", "axis x")
      .call(xAxis)
      .attr(
        "transform",
        `translate(${0},${svgSize.h - margin.bottom - margin.top})`
      );
    axises
      .append("g")
      .attr("class", "axis y")
      .call(yAxis)
      .attr("transform", `translate(${0},${0})`);

    let grid = grp.append("g").attr("class", "grid");
    grid
      .append("g")
      .attr("class", "horizontal")
      .selectAll("line.horizontalGrid")
      .data(y.ticks(10))
      .enter()
      .append("line")
      .attr("class", "horizontalGrid")
      .attr("x1", 0)
      .attr("x2", svgSize.w - margin.left - margin.rigth)
      .attr("y1", d => {
        return y(d);
      })
      .attr("y2", d => {
        return y(d);
      })
      .attr("fill", "none")
      .attr("stroke", "black")
      .attr("stroke-width", "1px");
    grid
      .append("g")
      .attr("class", "vertical")
      .selectAll("line.verticalGrid")
      .data(x.ticks(10))
      .enter()
      .append("line")
      .attr("class", "verticalGrid")
      .attr("x1", d => {
        return x(d);
      })
      .attr("x2", d => {
        return x(d);
      })
      .attr("y1", 0)
      .attr("y2", svgSize.h - margin.top - margin.bottom)
      .attr("fill", "none")
      .attr("stroke", "black")
      .attr("stroke-width", "1px");

    grid
      .append("g")
      .attr("class", "box")
      .selectAll("line.box-line")
      .data([
        { x1: 0, x2: 0, y1: 0, y2: svgSize.h - margin.top - margin.bottom },
        {
          x1: svgSize.w - margin.left - margin.rigth,
          x2: svgSize.w - margin.left - margin.rigth,
          y1: 0,
          y2: svgSize.h - margin.top - margin.bottom
        },
        { x1: 0, x2: svgSize.w - margin.left - margin.rigth, y1: 0, y2: 0 },
        {
          x1: 0,
          x2: svgSize.w - margin.left - margin.rigth,
          y1: svgSize.h - margin.top - margin.bottom,
          y2: svgSize.h - margin.top - margin.bottom
        }
      ])
      .enter()
      .append("line")
      .attr("class", "box-line")
      .attr("x1", d => {
        return d.x1;
      })
      .attr("x2", d => {
        return d.x2;
      })
      .attr("y1", d => d.y1)
      .attr("y2", d => d.y2)
      .attr("fill", "none")
      .attr("stroke", "black")
      .attr("stroke-width", "2px");

    grp
      .append("g")
      .attr("class", "graph-path")
      .attr("transform", `translate(${0},${0})`)
      .append("path")
      .attr("fill", "none")
      .attr("stroke", "black")
      .attr("stroke-width", 2)
      .attr("d", line(dataY));

    grp
      .append("g")
      .attr("class", "graph-circles")
      .attr("transform", `translate(${0},${0})`)
      .selectAll("circle")
      .data(dataY)
      .enter()
      .append("circle")
      .attr("cx", (d, i) => {
        return x(dataX[i]);
      })
      .attr("cy", (d, i) => {
        return y(d);
      })
      .attr("r", "5")
      .attr("fill", "red");
  }
})();
