function populate() {
    global.popSec = new Section({
        originX: 0,
        originY: 0,
        title: 'Population',
        relativeWidth: 1 / 3,
        relativeHeight: 1 / 2,
        buttonLabel: 'generate random population',
        buttonAction: doHopulate,
        sliderLabel: 'P(green)',
        sliderMin: 0.1,
        sliderMax: 0.7,
        sliderInitVal: 0.3,
        sliderTickSize: 0.1
    });

    global.popSec.draw();

    var myCreatures = generateRandomCreatures();
    return myCreatures;
}

// function displayP() {
//     displayPop(global.critters);
// }

function doHopulate() {
    print('foo');
    displayPop(global.critters);
    global.popSec.hideButton();
    // tournament();
}

    // // generate array of randomised creatures, and display them
    // function OdoPopulate() {
    //     var myCreatures = generateRandomCreatures();
    //     displayPop(myCreatures);
    //     global.popSec.hideButton();
    //     return myCreatures;
    //     // tournament();
    //
    //     // global.tourneySec = new Section({
    //     //     originX: windowWidth / 3,
    //     //     originY: 0,
    //     //     title: 'Tournament',
    //     //     relativeWidth: 2 / 3,
    //     //     relativeHeight: 1 / 2,
    //     //     buttonLabel: 'fight it out',
    //     //     buttonAction: fO,
    //     //     sliderLabel: 'tournament size',
    //     //     sliderMin: 2,
    //     //     sliderMax: global.populationSize - 1,
    //     //     sliderInitVal: 3,
    //     //     sliderTickSize: 1
    //     // });
    //     //
    //     // global.tourneySec.draw();
    //     // // global.tourneySec.hideButton();
    // }



    function generateRandomCreatures() {
        var myCreatures = [];
        for (var i = 0; i < global.populationSize; i++) {
            var gene;
            var chromosome = '';
            for (var j = 0; j < global.bitlength; j++) {
                // generate random gene depending on P(green)
                global.popSec.sliderValue > random() ? gene = 1 : gene = 0;
                chromosome += gene;
            }
            // global.creatures[i] = new Creature(chromosome, j);
            myCreatures[i] = new Creature(chromosome, j);
        }
        return myCreatures;
    }


    function displayPopulation() {
        var g = global;             // saves typing
        var popS = g.popSec;
        // first, 'clear' the display
        noStroke();
        fill('#974');
        rectMode(CORNER);
        rect(popS.originX, popS.originY + 60, popS.secWidth, popS.secHeight - 60);

        // loop through popSec, drawing creatures and calculating fitness stuff
        // maybe should do each in separate loop, but let's go wild...
        var totalFitness = 0;
        var bestFitness = -1;
        fill(0);
        textSize(22);
        for (var i = 0; i < global.populationSize; i++) {
            g.creatures[i].draw(popS.originX + 20, popS.originY + 100 + i * 32);
            var fitness = g.creatures[i].getFitness();
            text('f(' + i + '): ' + fitness, 240, 108 + i * 32);
            totalFitness += fitness;
            if (fitness > bestFitness) {
                bestFitness = fitness;
            }
        }
        var meanFitness = totalFitness / g.populationSize;
        // add results for this iteration/generation to array
        g.meanFitnesses[g.iteration] = meanFitness;  // todo or push?
        g.bestFitnesses[g.iteration] = bestFitness;

        // update info bar?
        updateInfo();
    }


    function updateInfo() {
        var g = global;
        // clear bar
        fill('#b000b5');
        rect(0, windowHeight * 5 / 6, windowWidth, windowHeight / 6);
        // todo - a new rect fn, that includes fill color?
        // todo - same for text...

        // show labels
        fill(0);
        textSize(36);
        text('Info ', 10, windowHeight * 5 / 6 + 40);
        textSize(16);
        text('Iteration', 200, windowHeight * 5 / 6 + 90);
        text('Average Fitness', 200, windowHeight * 5 / 6 + 110);
        text('Best Fitness', 200, windowHeight * 5 / 6 + 130);

        // show info
        // clear current values
        fill('#747');
        rect(400, windowHeight * 5 / 6 + 75, 50, 60);
        // write new values
        fill(0);
        text(g.iteration, 400, windowHeight * 5 / 6 + 90);
        text(g.meanFitnesses[g.iteration], 400, windowHeight * 5 / 6 + 110);
        text(g.bestFitnesses[g.iteration], 400, windowHeight * 5 / 6 + 130);

        // do chart
        fill('#474');
        rect(500, windowHeight * 5 / 6, windowWidth - 500, windowHeight / 6);
        // draw axes
        stroke(0);
        strokeWeight(5);
        var chartOriginX = windowWidth / 2;
        var chartOriginY = windowHeight - 20;
        var chartMaxX = windowWidth - 50;
        var chartMaxY = windowHeight * 5 / 6 + 10;
        line(chartOriginX, chartOriginY, chartMaxX, chartOriginY);  // x axis
        line(chartOriginX, chartOriginY, chartOriginX, chartMaxY);  // y axis
        fill(0);
        strokeWeight(0);
        text('generations', chartMaxX - 100, chartOriginY - 10);
        text('fitness', chartOriginX - 70, windowHeight * 11 / 12);

        // plot
        for (var i = 1; i < g.iteration + 1; i++) {
            // map Y  mean values
            var mY = map(g.meanFitnesses[i], 0, max(g.bestFitnesses) + 1,
                chartOriginY, chartMaxY);
            var bY = map(g.bestFitnesses[i], 0, max(g.bestFitnesses) + 1,
                chartOriginY, chartMaxY);
            // map X
            var xVal = map(i, 1, g.iteration + 5, chartOriginX, chartMaxX);
            // plot first point on y axis
            // print(i, xVal, mY);
            // todo replace m and b with coloured ellipses
            // add 'mean' and 'best' in same colours to y axis
            text('m', xVal, mY);
            text('b', xVal, bY);
            // subsequent points

        }

    }

    function displayPop(creatures) {
        var g = global;             // saves typing
        var popS = g.popSec;
        // first, 'clear' the display
        noStroke();
        fill('#974');
        rectMode(CORNER);
        rect(popS.originX, popS.originY + 60, popS.secWidth, popS.secHeight - 60);

        // loop through popSec, drawing creatures and calculating fitness stuff
        // maybe should do each in separate loop, but let's go wild...
        var totalFitness = 0;
        var bestFitness = -1;
        fill(0);
        textSize(22);
        for (var i = 0; i < global.populationSize; i++) {
            creatures[i].draw(popS.originX + 20, popS.originY + 100 + i * 32);
            var fitness = creatures[i].getFitness();
            text('f(' + i + '): ' + fitness, 240, 108 + i * 32);
            totalFitness += fitness;
            if (fitness > bestFitness) {
                bestFitness = fitness;
            }
        }
        var meanFitness = totalFitness / g.populationSize;
        // add results for this iteration/generation to array
        g.meanFitnesses[g.iteration] = meanFitness;  // todo or push?
        g.bestFitnesses[g.iteration] = bestFitness;

        // update info bar?
        updateInfo();
    }


