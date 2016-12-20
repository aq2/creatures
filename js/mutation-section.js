function mutation() {
    global.mutSec = new Section({
        originX: windowWidth*1/3,
        originY: windowHeight/2,
        title: 'Mutation',
        relativeWidth: 1/3,
        relativeHeight: 1/3,
        buttonLabel: 'mutate?',
        buttonAction: maybeMutate,
        sliderLabel: 'mutation rate',
        sliderMin: 0.001,
        sliderMax: 0.01,
        sliderInitVal: 0.005,
        sliderTickSize: 0.001
    });

    global.mutSec.draw();
    // splitter();
}


function maybeMutate() {
    var g = global;
    g.mutSec.clear();

    fill(0);
    text('baby1', g.mutSec.originX+50, g.mutSec.originY+100);
    g.baby1.draw(g.mutSec.originX+150, g.mutSec.originY+100);
    text('baby2', g.mutSec.originX+50, g.mutSec.originY+130);
    g.baby2.draw(g.mutSec.originX+150, g.mutSec.originY+130);

    // baby 1
    if (random() <= g.mutSec.sliderValue) {
        g.baby1.mutate();
        g.baby2.mutate();
    }

    fill(0);
    text('baby1', g.mutSec.originX+50, g.mutSec.originY+180);
    g.baby1.draw(g.mutSec.originX+150, g.mutSec.originY+180);
    text('baby2', g.mutSec.originX+50, g.mutSec.originY+210);
    g.baby2.draw(g.mutSec.originX+150, g.mutSec.originY+210);

    replacement();
}
