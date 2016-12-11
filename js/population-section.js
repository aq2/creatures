var population = new Section({
    originX: 0,
    originY: 0,
    title: 'Population',
    relativeWidth: 1/3,
    relativeHeight: 1/2,
    buttonLabel: 'generate random population',
    buttonAction: doPop,
    sliderLabel: 'P(green)',
    sliderMin: 0.1,
    sliderMax: 0.7,
    sliderInitVal: 0.3,
    sliderTickSize: 0.1
});


function doPop() {
    // population.actionButton.hide();
    print(population.title);
    print(population.sliderValue);

    // print(global.firstRun);
    if (global.firstRun === false) {
        if (!confirm("This will start again from scratch - are you sure?")) {
            return;
        }
    }

    generateRandomCreatures();
    displayPopulation();

    // tournament();
    // var tournament = new Section({
    //     originX: 350,
    //     originY: 0,
    //     highlighted: true,
    //     title: 'Tournament',
    //     width: 800,
    //     height: 450,
    //     buttonX: this.originX + 200,
    //     buttonY: this.originY + 30
// });

    global.firstRun = false;
    // population.highlightImg.hide();
    // tourney();
    // tournament.draw();
}


function generateRandomCreatures() {
    for (var i=0; i<global.populationSize; i++) {
        var gene;
        var chromosome = '';
        for (var j=0; j<global.bitlength; j++) {
            // generate random gene depending on P(green)
            population.sliderValue > random() ? gene = 1 : gene = 0;
            chromosome += gene;
        }
        global.creatures[i] = new Creature(chromosome);
    }
}

function displayPopulation() {
    // first, 'clear' the display
    noStroke();
    // fill('#774');
    fill('#974');
    rectMode(CORNER);
    rect(population.originX, population.originY + 60,
        population.actualWidth, population.actualHeight-60);

    // loop through population, drawing creatures and calculating fitness stuff
    // maybe should do each in separate loop, but let's go wild...
    var totalFitness = 0;
    var bestFitness = -1;
    fill(0);
    textSize(22);
    for (var i=0; i<global.populationSize; i++) {
        // todo - magic numbers?

        // global.creatures[i].draw(20, 100 + i*32);
        global.creatures[i].draw(population.originX + 20, population.originY + 100 + i*32);

        var fitness = global.creatures[i].getFitness();
        text('f('+i+') '+ fitness, 240, 108 + i*32);
        totalFitness += fitness;
        if (fitness > bestFitness) {
            bestFitness = fitness;
        }
    }
    var meanFitness = totalFitness / global.populationSize;
    // add results for this iteration/generation to array
    global.meanFitnesses[global.iteration] = meanFitness;  // todo or push?
    global.bestFitnesses[global.iteration] = bestFitness;

    // update info bar?
    updateInfo();

}

function updateInfo() {
    // clear bar
    fill('#b000b5');
    rect(0, windowHeight*5/6, windowWidth, windowHeight/6);
    // todo - a new rect fn, that includes fill color?
    // todo - same for text...

    // show labels
    fill(0);
    textSize(36);
    text('Info ', 10, windowHeight*5/6 + 40);
    textSize(16);
    text('Iteration', 200, windowHeight*5/6 + 90);
    text('Average Fitness', 200, windowHeight*5/6 + 110);
    text('Best Fitness', 200, windowHeight*5/6 + 130);

    // show info
    // clear current values
    fill('#747');
    rect(400, windowHeight*5/6 + 75, 50, 60);
    // write new values
    fill(0);
    text(global.iteration, 400, windowHeight*5/6 + 90);
    text(global.meanFitnesses[global.iteration], 400, windowHeight*5/6 + 110);
    text(global.bestFitnesses[global.iteration], 400, windowHeight*5/6 + 130);

    // do chart
    // should i clear it first - yep, because scale should change - scale()?
    fill('#474');
    rect(500, windowHeight*5/6, )
}
