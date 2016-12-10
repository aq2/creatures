var population = new Section({
    originX: 0,
    originY: 0,
    title: 'Population',
    relativeWidth: 1/3,
    relativeHeight: 1/2,
    buttonLabel: 'generate random population',
    buttonX: 0,
    buttonY: 50,
    buttonAction: doPop,
    sliderLabel: 'P(green)',
    sliderMin: 0.1,
    sliderMax: 0.7,
    sliderInitialValue: 0.3,
    sliderTickSize: 0.1,
    sliderValueWidth: 30
});


// function populate() {  // should this be populate-draw?
//     // globals.firstRun = false;
//     // silder for green proportion?
//     var originX = 0;
//     var originY = 0;
//     genPopBtn = createButton('Create random population');
//     genPopBtn.position(originX + 30, originY + 45);
//     genPopBtn.mouseClicked(doPop);
// }

function doPop() {
    // population.actionButton.hide();
    print(population.title);
    // population.highlighted = false;
    population.highlightImg.hide();
    // hImg.hide();
    // image(highlightImg, 0, 0);

//     // print(globals.firstRun);
//     if (globals.firstRun === false) {
//         if (!confirm("This will start again from scratch - are you sure?")) {
//             return;
//         }
//     }
//     globals.firstRun = false;
//     setup();
//     population.highlighted = false;
//     population.draw();
//     generateRandomCreatures();
//     displayPopulation();
//     // tournament();
//     // var tournament = new Section({
//     //     originX: 350,
//     //     originY: 0,
//     //     highlighted: true,
//     //     title: 'Tournament',
//     //     width: 800,
//     //     height: 450,
//     //     buttonX: this.originX + 200,
//     //     buttonY: this.originY + 30
// // });
//     tourney();
//     // tournament.draw();
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