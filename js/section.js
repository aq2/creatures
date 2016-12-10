var Section = function(config) {
    this.x = config.x;
    this.y = config.y;
    this.highlighted = config.highlighted;
    this.title = config.title;
    this.width = config.width;
    this.height = config.height;
    this.backgroundColour = config.backgroundColour;
    this.buttonName = this.title + 'Btn';
    this.buttonLabel = config.buttonLabel;
    this.buttonX = this.x + config.buttonX;
    this.buttonY = this.y + config.buttonY;
};

Section.prototype.draw = function() {
    // if (this.title === 'Population') {

    // print(this.highlighted);
    if (this.highlighted) {
        fill(200,200,200,200);
        print(this.width, this.height);
        print(globals.width, globals.height);
        rect(this.x, this.y, windowWidth*this.width, windowHeight*this.height);
    } else {
        fill(60, 70, 80);
    }

    // rect(this.x, this.y, this.width, this.height);
    fill(255);
    textSize(26);
    textAlign(CENTER);
    print(globals.width*this.width/2);
    text(this.title, globals.width*this.width/2, this.y + 25);
    textSize(16);

    // genPopBtn = createButton(this.buttonLabel);
    // genPopBtn.position(this.x + 65, this.y + 45);
    // genPopBtn.mouseClicked(doPop);

    // butt = this.buttonName;
    // butt = createButton(this.buttonLabel);
    // butt.position(this.x + this.buttonX, this.y + this.buttonY);
    // // butt.position(this.y + buttonY);
    // butt.mouseClicked(this.buttonFunc);
};

Section.prototype.clear = function(head=false) {
    // clears the whole section or just body
    // either overdraw a rectangle, or hide with css...
    xClear = 0;
    yClear = 80;
    heightClear = 350;
    widthClear = this.width;

    if (head) {
        xClear = 0;
        yClear = 0;
        heightClear = this.height;
    }

    fill(150,150,150,150);
    rect(this.x + xClear, this.y + yClear, heightClear, this.width);
};