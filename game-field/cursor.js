class Cursor {
  constructor(gridLimits) {
    this._x = 0;
    this._y = 0;
    this._xMin = 0;
    this._yMin = 0;
    this._xMax = gridLimits.x;
    this._yMax = gridLimits.y;
    this._ce = cells.querySelector(`.cell[data-x="${0}"][data-y="${0}"]`);
    this._ce.classList.add("cursor");
  }
  set x(val) {
    if (val < this._xMin || val > this._xMax) {
      return;
    }
    this._x = val;
    this.ce = [this._x, this._y];
  }
  get x() {
    return this._x;
  }
  set y(val) {
    if (val < this._yMin || val > this._yMax) {
      return;
    }
    this._y = val;
    this.ce = [this._x, this._y];
  }
  get y() {
    return this._y;
  }
  set xMin(val) {
    this._xMin = val;
  }
  get xMin() {
    return this._xMin;
  }
  set yMin(val) {
    this._yMin = val;
  }
  get yMin() {
    return this._yMin;
  }
  set xMax(val) {
    this._xMax = val;
  }
  get xMax() {
    return this._xMax;
  }
  set yMax(val) {
    this._yMax = val;
  }
  get yMax() {
    return this._yMax;
  }
  set ce(val) {
    this._ce.classList.toggle("cursor");
    this._ce = cells.querySelector(
      `.cell[data-x="${val[0]}"][data-y="${val[1]}"]`
    );
    this._ce.classList.add("cursor");
  }
  get ce() {
    return this._ce;
  }
}
