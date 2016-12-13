function mutation() {
    global.mutSec = new Section({
        originX: windowWidth*1/3,
        originY: windowHeight/2,
        title: 'Mutation',
        relativeWidth: 1/3,
        relativeHeight: 1/3,
        buttonLabel: 'mutate?',
        buttonAction: crossEmOver,
        sliderLabel: 'mutation rate',
        sliderMin: 0.001,
        sliderMax: 0.01,
        sliderInitVal: 0.005,
        sliderTickSize: 0.001
    });

    global.mutSec.draw();
    // splitter();
}