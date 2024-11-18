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
    [new Orb(10, 10, color("red")), new Orb(20, 20, color("green")), new Orb(30, 30, color("yellow"))],
    [new Orb(30, 20, color("red")), new Orb(30, 30, color("green")), new Orb(30, 40, color("yellow"))], 
    [new Orb(30, 20, color("red")), new Orb(30, 30, color("green")), new Orb(30, 60, color("yellow")), new Orb(100,100, color("purple")) ],
    [new Orb(50, 50, color("red")), new Orb(60, 50, color("green")), new Orb(70, 50, color("yellow"))],
  ]

}

function draw() {
  background(220);

  // loop through all of the entries for a given "row" in the "spreadsheet".
  // (which row we're looking at is determined by the variable "stage")
  for (let i = 0; i < allCoordinates[stage].length; i++) {
    const orb = allCoordinates[stage][i];
    orb.draw()
  }

}

// go to the next stage if someone clicks the mouse
function mousePressed() {
  stage = (stage + 1) % 3
  console.log(stage)
}