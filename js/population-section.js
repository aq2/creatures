var population = new Section({
    x: 0,
    y: 0,
    highlighted: true,
    title: 'Population',
    width: 1/3,  
    height: 1/2
});


function populate() {  // should this be populate-draw?
    // globals.firstRun = false;
    // silder for green proportion?
    var x = 0;
    var y = 0;
    genPopBtn = createButton('Create random population');
    genPopBtn.position(x + 30, y + 45);
    genPopBtn.mouseClicked(doPop);
}

function doPop() {
    // print(globals.firstRun);
    if (globals.firstRun === false) {
        if (!confirm("This will start again from scratch - are you sure?")) {
            return;
        }
    }
    globals.firstRun = false;
    setup();
    population.highlighted = false;
    population.draw();
    generateRandomCreatures();
    displayPopulation();
    // tournament();
    // var tournament = new Section({
    //     x: 350,
    //     y: 0,
    //     highlighted: true,
    //     title: 'Tournament',
    //     width: 800,
    //     height: 450,
    //     buttonX: this.x + 200,
    //     buttonY: this.y + 30
// }); 
    tourney();
    // tournament.draw();
}


function generateRandomCreatures() {
    for (var i=0; i<globals.populationSize; i++) {
        chromosome = '';
        var gene;
        for (var j=0; j<globals.bitlength; j++) {
            // generate random gene depending on green chance           
            globals.initialGreenChance > Math.random() ? gene = 1 : gene =0;
            chromosome += gene;
        }
        globals.creatures[i] = new Creature(chromosome);
        console.log(chromosome);
    }
}

function displayPopulation() {
    // first, 'clear' the display
    noStroke();
    fill(60,70,80);
    rectMode(CORNER);
    rect(0, 80, 340, 355);
    // draw each creature in the population
    textSize(22);
    for (var i=0; i<globals.populationSize; i++) {
        fill(0);
        // text(i, 10, 105 + i*32);
        globals.creatures[i].draw(20, 100 + i*32);
        fill(0);
        text('f('+i+') '+globals.creatures[i].getFitness(), 240, 108 + i*32);
    }
}