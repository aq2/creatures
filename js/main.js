// this is the main javascript function that controls all the others
// holds global variables and calls section as necessary

var wide = window.innerWidth;
var high = window.innerHeight;

// setup the population section
var popSketch = function (p) {
    p.setup = function () {
        p.createCanvas(wide/3, high/2-3);
        p.background(200);
        // p.rectMode(CORNER);
        p.fill(255);
        p.textSize(26);
        p.text('Population', 10, 25);
        p.textSize(16);
    };

    p.draw = function () {

        genPopBtn = p.createButton('Create random population');
        genPopBtn.position(5,35);
        var doPop = function (p) {
            alert('foo');
            p.text('doggy', 50, 50);
        };
        genPopBtn.mouseClicked(doPop);

    };



};

new p5(popSketch, "pop");

