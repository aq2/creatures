var Section = function(config) {
    this.originX = config.originX;                  // top left corner x
    this.originY = config.originY;                  // top left corner y
    this.title = config.title;                      // section title
    this.relativeWidth = config.relativeWidth;      // fraction of page
    this.relativeHeight = config.relativeHeight;    // ditto
    this.buttonLabel = config.buttonLabel;          // button text
    this.buttonAction = config.buttonAction;        // function called by button
    this.sliderLabel = config.sliderLabel;          // slider text
    this.sliderMin = config.sliderMin;              // min value of slider
    this.sliderMax = config.sliderMax;              // max value of slider
    this.sliderInitVal = config.sliderInitVal;      // default value
    this.sliderTickSize = config.sliderTickSize;    // smallest slider delta
    // this.sliderValue = 0;                        // init current slider value
    this.actionButton = 0;
    // this.draw();
};

Section.prototype.draw = function() {
    var self = this;
    this.secWidth = windowWidth * this.relativeWidth;
    this.secHeight = windowHeight * this.relativeHeight;

    // // generate and show highlight image
    // this.highlightImg = createImg('high26.png');
    // this.highlightImg.style('width', this.secWidth + 10 + 'px');
    // this.highlightImg.style('height', this.secHeight + 10 + 'px');
    // this.highlightImg.position(this.originX, this.originY);

    // display title
    fill(255);
    textSize(36);
    textAlign(CORNER);
    rectMode(CORNER);
    text(this.title, this.originX+5, this.originY+30);

    // display button
    this.actionButton = createButton(this.buttonLabel);
    // button aligns to the right, buttonX = width of section - width of button
    var buttonX = this.secWidth - this.actionButton.width;
    this.actionButton.position(this.originX + buttonX, this.originY+30);
    this.actionButton.mouseClicked(this.buttonAction);

    // display slider
    // slider label text
    var sliderX = this.originX + this.secWidth - global.sliderWidth - 40;  // 40 = width of value
    fill(0);
    textSize(16);
    textAlign(RIGHT);
    text(this.sliderLabel, sliderX-70, this.originY+20);  // magic numbers
    textAlign(LEFT);

    // slider itself
    this.slider = createSlider(this.sliderMin, this.sliderMax,
        this.sliderInitVal, this.sliderTickSize);
    this.slider.position(sliderX, this.originY);
    this.slider.style('width', global.sliderWidth+'px');
    this.slider.style('margin', '0');
    // slider value
    this.sliderValue = showSliderValue();
    this.slider.changed(showSliderValue);

    function showSliderValue() {
        // overwrite blank box
        fill('#774');
        // self refers to 'this' in the outer function
        rect(self.originX + self.secWidth-40, self.originY+5, 50, 25);
        // write current value
        fill(0);
        textSize(16);
        text(self.slider.value(), self.originX + self.secWidth-40+5, self.originY +20);
        self.sliderValue = self.slider.value();
        return self.slider.value();
    }
};


Section.prototype.hideButton = function() {
    this.actionButton.hide();
    this.slider.hide();
};



Section.prototype.clear = function(head=false) {
    // clears the whole section or just body
    // either overdraw a rectangle, or hide with css...
    xClear = 0;
    yClear = 80;
        heightClear = this.secHeight-100;
    // widthClear = this.width;

    if (head) {
        xClear = 0;
        yClear = 0;
        heightClear = this.secHeight;
    }

    fill(150,150,150);
    rect(this.originX, this.originY + yClear, this.secWidth, heightClear);
};

