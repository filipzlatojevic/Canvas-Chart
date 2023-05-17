import "./style.css";

const canvas = document.querySelector("#canvas");

let context = canvas.getContext("2d");

canvas.style.background = "#ffffff";

var window_height = window.innerHeight;
var window_width = window.innerWidth;

canvas.width = window_width;
canvas.height = window_height;

context.fillRect(300, 0, 100, 100);

context.fillStyle = "red";
context.fillRect(100, 500, 100, 100);

context.beginPath();
context.strokeStyle = "blue";
context.lineWidth = 20;
context.arc(100, 100, 50, 0, Math.PI * 2, false);
context.stroke();
context.closePath();
