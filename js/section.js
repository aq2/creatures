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
    // this.sliderValue = 0;                           // init current slider value
};

Section.prototype.draw = function() {
    var self = this;
    this.actualWidth = windowWidth * this.relativeWidth;
    this.actualHeight = windowHeight * this.relativeHeight;

    // generate and show highlight image
    this.highlightImg = createImg('high26.png');
    this.highlightImg.style('width', this.actualWidth + 10 + 'px');
    this.highlightImg.style('height', this.actualHeight + 10 + 'px');
    this.highlightImg.position(this.originX, this.originY);

    // display title
    fill(255);
    textSize(36);
    textAlign(CORNER);
    rectMode(CORNER);
    text(this.title, this.originX+5, this.originY+30);

    // display button
    this.actionButton = createButton(this.buttonLabel);
    // button aligns to the right, buttonX = width of section - width of button
    var buttonX = this.actualWidth - this.actionButton.width;
    this.actionButton.position(this.originX + buttonX, this.originY+30);
    this.actionButton.mouseClicked(this.buttonAction);

    // display slider
    // slider label text
    var sliderX = this.actualWidth - global.sliderWidth - 40;  // 40 = width of value
    fill(0);
    textSize(16);
    text(this.sliderLabel, sliderX-70, this.originY+20);  // magic numbers
    // slider itself
    var slider = createSlider(this.sliderMin, this.sliderMax,
        this.sliderInitVal, this.sliderTickSize);
    slider.position(sliderX, this.originY);
    slider.style('width', global.sliderWidth+'px');
    slider.style('margin', '0');
    // slider value
    this.sliderValue = showSliderValue();
    slider.changed(showSliderValue);

    function showSliderValue() {
        // overwrite blank box
        fill('#774');
        // self refers to 'this' in the outer function
        rect(self.originX + self.actualWidth-40, self.originY+5, 50, 25);
        // write current value
        fill(0);
        textSize(16);
        text(slider.value(), self.originX + self.actualWidth-40+5, self.originY +20);
        self.sliderValue = slider.value();
        return slider.value();
    }
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
    rect(this.originX + xClear, this.originY + yClear, heightClear, this.width);
};

