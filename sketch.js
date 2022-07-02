// Daniel Shiffman
// http://codingtra.in
// Steering Text Paths
// Video: https://www.youtube.com/watch?v=4hA7G3gup-4

var font;
var vehicles = [];
var str;

function preload() {
  font = loadFont('./Roboto-Regular.ttf');
}

function setup() {
  createCanvas(innerWidth, innerHeight);
  textFont(font);
  textSize(72);
  // fill(255);
  // noStroke();

  str = 'Text to Boids Example';
  var points = font.textToPoints(str, width/2-textWidth(str)/2, height/2, 72, {
    sampleFactor: 1
  });

  for (var i = 0; i < points.length; i++) {
    var pt = points[i];
    var vehicle = new Vehicle(pt.x, pt.y);
    vehicles.push(vehicle);
    // stroke(255);
    // strokeWeight(8);
    // point(pt.x, pt.y);
  }
}

function draw() {
  background(0);
  for (var i = 0; i < vehicles.length; i++) {
    var v = vehicles[i];
    v.behaviors();
    v.update();
    v.show();
  }
}
