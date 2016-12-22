var global = {
    bitlength: 10,                  // number of creature segments
    populationSize: 10,             // number of creatures in popSec
    creatures: [],                  // array of creatures in the population
    // initialGreenChance: 0.2,     // probability of green segments

    mummy: -1,                      // array index of first parent
    daddy: -1,                      // array index of second parent
    babies: [],                     // two element array of creatures or indices?

    parents: [],                    // two element array of creatures

    locus: -1,                      // crossover segment
    // firstRun: true,                 // true if first time run
    sliderWidth: 100,               // size of slider in pixels
    iteration: 1,                   // how many creature generations
    meanFitnesses: [-1],              // average fitness for each iterations
    bestFitnesses: [-1]               // best fitness for each iteration
};

// setup and draw blank canvas and define colours
function setup() {

    noStroke();
    rectMode(CORNER);
    createCanvas(windowWidth-5, windowHeight-5);

    // let''s kick things by generating a population
    // -> see population-section.js
    // population();

    // creatures = population();
    // parents = tournament(creatures);
    // babies = crossover(parents);
    // mutants = mutation(babies);
    // newCreatures = replacement(creatures, babies)
    // man that is lovely!


    global.critters = populate();
    print(global.critters);
    // tournament();

    // var promise = new Promise(function(res, rej) {
    //     //
    // });
    //
    // var greetingPromise = sayHello();
    // greetingPromise.then(function(greeting) {
    //     console.log(greeting);    // 'hello world’
    // });
    //
    //
    // var critterPromise = doPopulate();
    // critterPromise.then(function(critters) {
    //     print(critters);
    // });



    // popSec = new Section


    // while (critters.length > 0){
    //     print('c ' + critters);
    // }


}

    function sayHello() {
         return 'hello';
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