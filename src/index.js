// JS Goes here - ES6 supported

import "./css/main.css";

// Say hello
//console.log("🦊 Hello! Edit me in src/index.js");


function run(interval, frames) {
  var int = 1;
  function func() {
    document.body.id = "bg" + int;
    int++;
    if (int === frames) { int = 1; }
  }
  var swap = window.setInterval(func, interval);
}
run(10000, 10); //milliseconds, frames
