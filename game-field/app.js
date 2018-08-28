"use strict";

let app = document.querySelector(".app");
let viewport = app.querySelector(".viewport");
let cells = app.querySelector(".cells");
let loader = app.querySelector(".loader");
let modal = app.querySelector(".modal");

window.addEventListener("resize", resizeWindow);
cells.addEventListener("click", cellClicked);
cells.addEventListener("contextmenu", showModal);

let gridLimits = generateCells(getViewportSizes());
let cursor = new Cursor(gridLimits);

function generateCell(x, y) {
  let cell = document.createElement("div");
  cell.classList.add("cell");
  cell.dataset.x = x;
  cell.dataset.y = y;
  cell.style.left = x * 50 + "px";
  cell.style.top = y * 50 + "px";
  return cell;
}

function addCell(cell) {
  cells.appendChild(cell);
}

function getViewportSizes() {
  let viewportStyle = getComputedStyle(viewport);
  let size = {
    width: parseInt(viewportStyle.width),
    height: parseInt(viewportStyle.height)
  };
  return size;
}

function generateCells(size) {
  let count = {
    x: Math.floor(size.width / 50),
    y: Math.floor(size.height / 50)
  };

  cells.style.width = count.x * 50 + "px";
  cells.style.height = count.y * 50 + "px";
  for (let x = 0; x < count.x; x++) {
    for (let y = 0; y < count.y; y++) {
      addCell(generateCell(x, y));
    }
  }
  setTimeout(() => {
    loader.style.display = "none";
  }, 1000);
  return count;
}

function resizeWindow() {
  console.log("--");
  cells.innerHTML = "";
  let gridLimits = generateCells(getViewportSizes());
  cursor = new Cursor(gridLimits);
}

function cellClicked(event) {
  console.log("cellClicked", event);
  event.target.classList.toggle("active");
  modal.style.display = "none";
}

window.addEventListener("keydown", keyPressed);
function keyPressed(event) {
  console.log("keyPressed", event);
  var code = event.code;
  switch (code) {
    case "ArrowUp":
      goUp();
      break;
    case "ArrowDown":
      goDown();
      break;
    case "ArrowRight":
      goRight();
      break;
    case "ArrowLeft":
      goLeft();
      break;
    default:
      break;
  }
}

function goLeft(event) {
  console.log("goLeft", event);
  if (cursor.x <= cursor.xMin) {
    return;
  }
  cursor.x -= 1;
}

function goRight(event) {
  console.log("goRight", event);
  if (cursor.x >= cursor.xMax - 1) {
    return;
  }
  cursor.x += 1;
}

function goUp(event) {
  console.log("goUp", event);
  if (cursor.y <= cursor.yMin) {
    return;
  }
  cursor.y -= 1;
}

function goDown(event) {
  console.log("goDown", event);
  if (cursor.y >= cursor.yMax - 1) {
    return;
  }
  cursor.y += 1;
}

function showModal(event) {
  event.preventDefault();
  modal.innerHTML = `<code>
    ${JSON.stringify(event.target.dataset, null, 4)}
    </code>`;
  modal.style.top = event.clientY + "px";
  modal.style.left = event.clientX + "px";
  modal.style.display = "block";
}
