class Figure {
  constructor() {
    this.width = 300;
    this.height = 200;
    this.margin = { top: 50, left: 50, right: 50, bottom: 50 };
    this.svg = this.generateSvg("body");
    this.rootGrp = this.generateGrp("figure", this.margin);
    this.xScale = this.generateScaleX();
    this.yScale = this.generateScaleY();
    this.xAxis = this.generateAxisX();
    this.yAxis = this.generateAxisY();
    this.data = this.generateData();
  }
  generateSvg(selector) {
    this.svg = d3
      .select(selector)
      .append("svg")
      .attr("width", this.width)
      .attr("height", this.height)
      .attr("style", "background: none;");
    return this.svg;
  }
  generateGrp(className, margin = { left: 0, top: 0 }) {
    let grp = this.svg
      .append("g")
      .attr("class", className)
      .attr("transform", `translate(${margin.left},${margin.top})`);
    return grp;
  }
  generateScaleX(
    type = "scaleLinear",
    domain = [0, 10],
    range = [0, this.width - this.margin.left - this.margin.right]
  ) {
    let scale = d3[type]()
      .domain(domain)
      .range(range);
    return scale;
  }
  generateScaleY(
    type = "scaleLinear",
    domain = [0, 10],
    range = [0, this.height - this.margin.top - this.margin.bottom]
  ) {
    let scale = d3[type]()
      .domain(domain)
      .range(range);
    return scale;
  }
  generateAxisX(scale = this.xScale) {
    let xAxis = d3.axisBottom(scale);
    return xAxis;
  }
  generateAxisY(scale = this.yScale) {
    let yAxis = d3.axisLeft(scale);
    return yAxis;
  }
  generateData() {
    let data = [new Qwerty(1)];

    return data;

    function Qwerty(i) {
      this.q = Math.random() * 10;
      this.w = Math.random() * 10;
      this.e = Math.random() * 10;
      this.r = Math.random() * 10;
      this.t = Math.random() * 10;
      this.y = Math.random() * 10;
      this.i = i;
    }
  }
}

console.log(new Figure());
