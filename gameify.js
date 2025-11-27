const title = document.getElementById("title");
const canvas = document.getElementById("home-canvas");
const display = canvas.getContext("2d");

const mouseTracker = document.querySelector(".mouse-tracker");
const pageX = document.getElementById("x");
const pageY = document.getElementById("y");

// function draw() {
//       // find mouse coordinates
//       pageX.innerText = event.pageX;
//       pageY.innerText = event.pageY;
//       // draw a dot in its place
//       display.fillstyle = rgb(0, 102, 255);
//       display.beginPath();
//       display.lineTo(event.pageX, event.pageY);
//       display.stroke();
// }

// window.addEventListener("mousemove", draw);
// window.addEventListener("mouseenter", draw);
// window.addEventListener("mouseleave", draw);
