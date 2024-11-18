// an example showing how to keep track of lists of coordinates.
// the sketch has 3 stages, with each showing a different collection of circles.
// 
// this sketch makes an array of arrays - a 2D array (which is kind of like a spreadsheet).
// the main array (the "rows") represent each stage of the sketch.
// the arrays that are the "columns" in the spreadsheet contain the circle coordinates for each stage.

let allCoordinates = [];
let stage = 0;

function setup() {
  createCanvas(800, 800);

  // squint your eyes: it's a spreadsheet!
  allCoordinates = [
    [createVector(10, 10), createVector(20, 20), createVector(30, 30)],
    [createVector(30, 20), createVector(30, 30), createVector(30, 40)], 
    [createVector(30, 20), createVector(30, 30), createVector(30, 60), createVector(100,100) ],
    [createVector(50, 50), createVector(60, 50), createVector(70, 50)],
  ]

}

function draw() {
  background(220);

  // loop through all of the entries for a given "row" in the "spreadsheet".
  // (which row we're looking at is determined by the variable "stage")
  for (let i = 0; i < allCoordinates[stage].length; i++) {
    const xy = allCoordinates[stage][i];
    circle(xy.x, xy.y, 10)
  }

}

// go to the next stage if someone clicks the mouse
function mousePressed() {
  stage = (stage + 1) % 3
  console.log(stage)
}