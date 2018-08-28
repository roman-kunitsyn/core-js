(function main() {
  "use strict";
  console.log("main");
  var root = document.querySelector(".app-root");
  generatePhotosFeed();

  function generatePhotosFeed() {
    for (var i = 0; i < 5; i++) {
      addRowToRoot(generateRow(i));
    }
    var activeRow = root.querySelector(".row");
    var activePhoto = root.querySelector(".photo");
    activeRow.classList.add("active");
    activePhoto.classList.add("active");
    addListeners();
  }

  function generateRow(rowNumber) {
    console.log("generateRow");
    var row = document.createElement("div");
    row.className = "row";
    for (var i = 0; i < 5; i++) {
      var photo = generatePhoto(i);
      photo.innerHTML = `${rowNumber}, ${i}`;
      row.appendChild(photo);
    }
    row.dataset.position = rowNumber;
    return row;
  }

  function generatePhoto(photoNumber) {
    console.log("generatePhoto");
    var photo = document.createElement("div");
    photo.className = "photo";
    photo.dataset.position = photoNumber;
    return photo;
  }

  function addRowToRoot(row) {
    console.log("addRowToRoot");
    root.appendChild(row);
  }

  function addListeners() {
    console.log("addListeners");
    window.addEventListener("keydown", keyPressed);
    window.addEventListener("wheel", scrollRow);
  }

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

  function scrollRow(event) {
    console.log("scrollRow", event);
    if (event.deltaY < 0) {
      goUp();
    } else {
      goDown();
    }
  }

  function goLeft(event) {
    console.log("goLeft", event);
    var oldActivePhoto = document.querySelector(".photo.active");
    var newActivePhoto = oldActivePhoto.previousSibling;
    if (newActivePhoto && oldActivePhoto) {
      oldActivePhoto.classList.toggle("active");
      newActivePhoto.classList.toggle("active");
    } else {
      return;
    }
  }

  function goRight(event) {
    console.log("goRight", event);
    var oldActivePhoto = document.querySelector(".photo.active");
    var newActivePhoto = oldActivePhoto.nextSibling;
    if (newActivePhoto && oldActivePhoto) {
      oldActivePhoto.classList.toggle("active");
      newActivePhoto.classList.toggle("active");
    } else {
      return;
    }
  }

  function goUp(event) {
    console.log("goUp", event);
    var oldActiveRow = document.querySelector(".row.active");
    var currentRowNumber = +oldActiveRow.dataset.position;
    if (currentRowNumber === 0) {
      return;
    }
    var newActiveRow = oldActiveRow.previousSibling;
    if (!newActiveRow || !newActiveRow.classList) {
      deleteRowFromEnd();
      addRowToStart();
      newActiveRow = oldActiveRow.previousSibling;
    }
    oldActiveRow.classList.toggle("active");
    newActiveRow.classList.toggle("active");
    var oldActivePhoto = document.querySelector(".photo.active");
    oldActivePhoto.classList.toggle("active");
    var newActivePhoto = newActiveRow.querySelector(
      ".photo[data-position='" + oldActivePhoto.dataset.position + "']"
    );
    newActivePhoto.classList.toggle("active");
  }

  function goDown(event) {
    console.log("goDown", event);
    var oldActiveRow = document.querySelector(".row.active");
    var newActiveRow = oldActiveRow.nextSibling;
    if (!newActiveRow) {
      addRowToEnd();
      deleteRowFromStart();
      newActiveRow = oldActiveRow.nextSibling;
    }
    oldActiveRow.classList.toggle("active");
    newActiveRow.classList.toggle("active");
    var oldActivePhoto = document.querySelector(".photo.active");
    oldActivePhoto.classList.toggle("active");
    var newActivePhoto = newActiveRow.querySelector(
      ".photo[data-position='" + oldActivePhoto.dataset.position + "']"
    );
    newActivePhoto.classList.toggle("active");
  }

  function deleteRowFromEnd() {
    console.log("deleteRowFromEnd");
    var rowToDelete = root.querySelectorAll(".row");
    root.removeChild(rowToDelete[rowToDelete.length - 1]);
  }

  function deleteRowFromStart() {
    console.log("deleteRowFromStart");
    var rowToDelete = root.querySelector(".row");
    root.removeChild(rowToDelete);
  }

  function addRowToStart() {
    console.log("addRowToStart");
    var firstRow = root.querySelector(".row");
    var currentRowNumber = +firstRow.dataset.position;
    root.insertBefore(generateRow(--currentRowNumber), firstRow);
  }

  function addRowToEnd() {
    console.log("addRowToEnd");
    var currentRowNumber = +root.querySelector(".row.active").dataset.position;
    addRowToRoot(generateRow(++currentRowNumber));
  }
})();
