var globals = {
    bitlength: 10,              // number of creature segments
    populationSize: 10,         // number of creatures in population
    creatures: [],              // array to store our population
    initialGreenChance: 0.2,    // probability of green segments
    parent1: -1,                // array index of first parent
    parent2: -1,                // array index of second parent
    locus: -1,                  // crossover segment
    firstRun: true,             // true if first time run
    // width: windowWidth-5,       // canvas dimensions...
    // height: windowHeight-5      // ...bit smaller than browser window
};


// setup and draw blank canvas and define colours
function setup() {
    globals.width = windowWidth-5;
    globals.height = windowHeight-5;
    // defineColours();
    var rhino = color(60, 70, 80);
    var celery = color(200, 200, 80);
    var black = color(0);
    var white = color(255);

    rectMode(CORNER);
    createCanvas(globals.width, globals.height);
    noStroke();
    fill(rhino);
    rect(0,0, 100, 200);
    population.draw();

}

function draw() {

    // var population = new Section({
    //     x: 0,
    //     y: 0,
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