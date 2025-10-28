const canvas = document.getElementsByTagName("canvas");
const screen = canvas.getContext("2d");
let title = document.getElementsById("title");

function draw() {
  // red
  screen.fillStyle = "rgb(200 0 0)";
  screen.fillRect(10, 10, 50, 50);

  screen.fillStyle = "rgb(0 0 200 / 50%)";
  screen.fillRect(30, 30, 50, 50);
}
draw()

