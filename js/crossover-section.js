function crossover() {
    global.crossSec = new Section({
        originX: windowWidth*2/3,
        originY: windowHeight/2,
        title: 'Crossover',
        relativeWidth: 1/3,
        relativeHeight: 1/3,
        buttonLabel: 'mix and match',
        buttonAction: crossEmOver,
        sliderLabel: 'crossover locus',
        sliderMin: 1,
        sliderMax: global.bitlength-1,
        sliderInitVal: 5,
        sliderTickSize: 1
    });

    global.crossSec.draw();
    splitter();
}


function splitter() {
    var g = global;
    var cS = g.crossSec;
    // clear
    fill('#447');
    rect(cS.originX, cS.originY+70, cS.secWidth, cS.secHeight-70);

    // draw mummy
    fill(0);
    textSize(16);
    text('mummy', cS.originX+50, cS.originY+100);
    // first half
    g.creatures[g.mummy].draw(cS.originX+150, cS.originY+100, 0, cS.sliderValue);
    // second half
    g.creatures[g.mummy].draw(cS.originX+173, cS.originY+100, cS.sliderValue);

    // draw daddy
    fill(0);
    text('daddy', cS.originX+50, cS.originY+130);
    // first half
    g.creatures[g.daddy].draw(cS.originX+150, cS.originY+130, 0, cS.sliderValue);
    // second half
    g.creatures[g.daddy].draw(cS.originX+173, cS.originY+130, cS.sliderValue);

    // call this function again if slider changed
    cS.slider.changed(splitter);
}

function crossEmOver() {
    // todo - so much repeated code
    var g = global;
    var cS = g.crossSec;
    var mummy = g.creatures[g.mummy];
    var daddy = g.creatures[g.daddy];
    var locus = cS.sliderValue;

    // make baby1 from mummy tail and daddy head
    var mummyTail = mummy.chromosome.substring(0, locus);
    var daddyHead = daddy.chromosome.substring(locus);
    var baby1 = new Creature(mummyTail + daddyHead);


    // make baby2 from daddy tail and mummy head
    var daddyTail = daddy.chromosome.substring(0, locus);
    var mummyHead = mummy.chromosome.substring(locus);
    var baby2 = new Creature(daddyTail + mummyHead);

    fill(0);
    text('baby1', cS.originX+50, cS.originY+180);
    baby1.draw(cS.originX+150, cS.originY+180);
    text('baby2', cS.originX+50, cS.originY+210);
    baby2.draw(cS.originX+150, cS.originY+210);

    mutation();
}