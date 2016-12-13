var global = {
    bitlength: 10,                  // number of creature segments
    populationSize: 10,             // number of creatures in popSec
    creatures: [],                  // array to store our popSec
    // initialGreenChance: 0.2,     // probability of green segments
    mummy: -1,                      // array index of first parent
    daddy: -1,                      // array index of second parent
    locus: -1,                      // crossover segment
    // firstRun: true,                 // true if first time run
    sliderWidth: 100,               // size of slider in pixels
    iteration: 1,                   // how many creature generations
    meanFitnesses: [-1],              // average fitness for each iterations
    bestFitnesses: [-1]               // best fitness for each iteration
};

// setup and draw blank canvas and define colours
function setup() {
    // hImg = createImage('highlight.png');
    // global.width = windowWidth-5;
    // global.height = windowHeight-5;
    // defineColours();
    var rhino = color(60, 70, 80);
    var celery = color(200, 200, 80);
    var black = color(0);
    var white = color(255);

    rectMode(CORNER);
    createCanvas(windowWidth-5, windowHeight-5);
    noStroke();

    // // 'header'
    // fill(rhino);
    // rect(0,0, 100, 200);

    population();
    // popSec.draw();

}

function draw() {

    // var popSec = new Section({
    //     originX: 0,
    //     originY: 0,
    //     highlighted: true,
    //     title: 'Population',
    //     width: (windowWidth-5)/3,
    //     height: (windowHeight-5)/2
    // });


    // draw rectangle around pop
    // stroke(6);
    // fill(0,0,0,0);
    // rect(0, 0, 340, 450);
    // noStroke();
}