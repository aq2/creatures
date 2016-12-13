function tournament() {
    global.tourneySec = new Section({
        originX: windowWidth/3,
        originY: 0,
        title: 'Tournament',
        relativeWidth: 2/3,
        relativeHeight: 1/2,
        buttonLabel: 'fight it out',
        buttonAction: fightItOut,
        sliderLabel: 'tournament size',
        sliderMin: 2,
        sliderMax: global.populationSize-1,
        sliderInitVal: 3,
        sliderTickSize: 1
    });

    global.tourneySec.draw();
}

function fightItOut() {
    var g = global;
    var tSec = g.tourneySec;
    // todo layout magic numbers need tweaking to refer to originX etc

    // clear battleground
    rectMode(CORNER);
    fill(200, 130, 40);
    rect(tSec.originX, tSec.originY + 50, tSec.secWidth, tSec.secHeight-50);
    var offset = tSec.originX;
    // print(offset); // todo wtf is offset for

    // run two tournaments - one for daddy, one for mummy
    for (var p=0; p<2; p++) {
        var contestants = [];
        for (var i=0; i<tSec.slider.value(); i++) {
            // randomly select t creatures - with replacement - may appear twice
            var randy = round(Math.random() * (g.populationSize-1));
            // var randy = round(random(g.populationSize-1));

            contestants.push(randy);
        }
        fill(255);
        textSize(22);
        text('tournament ' + (p+1), tSec.originX+p*offset, 95);
        var bestFitness = -1;
        var bestCreature = -1;
        for (var j=0; j<contestants.length; j++) {
            var creatureNumber = contestants[j];
            fill(0);
            var creature = g.creatures[creatureNumber];
            creature.draw(tSec.originX+p*offset+15, 125+(j*32));
            var fitness = creature.getFitness();
            text('f('+creatureNumber+'): '+fitness, tSec.originX+p*offset+250,
                135 + j*32);

            if (fitness > bestFitness) {
                bestJ = j;
                bestCreature = creatureNumber;
                bestFitness = fitness;
            }
        }
        // highlight winner
        winnerY = 110+(bestJ*32);  // position of highlight box
        fill(200,200,200,100);
        rectMode(CORNER);
        rect(tSec.originX+p*offset, winnerY, 325, 30);
        if (p === 0) {
            g.mummy = bestCreature;
        }  else {
            g.daddy = bestCreature;
        }
    }
    fill(200);
    text('winners are ' + g.mummy + ' and ' + g.daddy, 660, 125 + (j*34));
    // parents();

    tSec.hideButton();
    crossover();
}