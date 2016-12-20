function replacement() {
    global.repSec = new Section({
        originX: 0,
        originY: windowHeight/2,
        title: 'Mutation',
        relativeWidth: 1/3,
        relativeHeight: 1/3,
        buttonLabel: 'replace the weak',
        buttonAction: replace,
        sliderLabel: '',
        sliderMin: 0.001,
        sliderMax: 0.01,
        sliderInitVal: 0.005,
        sliderTickSize: 0.001
    });

    global.repSec.draw();
    // splitter();
}

function replace() {
    print('replace');

    // find two weakest in population
    // replace with babies
    // recalc mean and best fitnesses
    // update graph
}