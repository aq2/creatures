function crossover() {
    global.crossSec = new Section({
        originX: windowWidth*2/3,
        originY: windowHeight/2,
        title: 'Crossover',
        relativeWidth: 1/3,
        relativeHeight: 1/3,
        buttonLabel: 'mix and match',
        buttonAction: fightItOut,
        sliderLabel: 'crossover locus',
        sliderMin: 1,
        sliderMax: global.bitlength-1,
        sliderInitVal: 4,
        sliderTickSize: 1
    });

    global.crossSec.draw();
}