var Section = function(config) {
    this.originX = config.originX;
    console.log(this.originX);
    this.originY = config.originY;
    this.title = config.title;
    this.relativeWidth = config.relativeWidth;
    this.relativeHeight = config.relativeHeight;
    // this.backgroundColour = config.backgroundColour;
    // this.buttonName = this.title + 'Btn';
    this.buttonLabel = config.buttonLabel;
    this.buttonX = this.originX + config.buttonX;
    this.buttonY = this.originY + config.buttonY;
    this.buttonAction = config.buttonAction;
    this.sliderLabel = config.sliderLabel;
    this.sliderMin = config.sliderMin;
    this.sliderMax = config.sliderMax;
    this.sliderInitialValue = config.sliderInitialValue;
    this.sliderTickSize = config.sliderTickSize;
    this.sliderValueWidth = config.sliderValueWidth;
};

Section.prototype.draw = function() {
    // generate and show highlight image
    var actualWidth = windowWidth * this.relativeWidth;
    var actualHeight = windowHeight * this.relativeHeight;
    var sliderValueWidth = this.sliderValueWidth;

    var originX = this.originX;
    var originY = this.originY;

    this.highlightImg = createImg('high26.png');
    this.highlightImg.style('width', actualWidth + 10 + 'px');
    this.highlightImg.style('height', actualHeight + 10 + 'px');
    this.highlightImg.position(this.originX, this.originY);

    console.log(this.originX);


    // display title
    fill(255);
    textSize(36);
    textAlign(CORNER);
    rectMode(CORNER);
    text(this.title, this.originX+5, this.originY+30);

    // display button
    this.actionButton = createButton(this.buttonLabel);
    // button aligns to the right
    // buttonX = width of section - width of button
    var buttonXpos = actualWidth - this.actionButton.width;
    this.actionButton.position(this.originX + buttonXpos, this.originY+30);
    this.actionButton.mouseClicked(this.buttonAction);
    this.actionButton.style('color', 'orange');

    // display slider, with title and value
    textSize(16);
    fill(0);
    var sliderWidth = 100;
    var sliderXpos = actualWidth - sliderWidth -
        this.sliderValueWidth;
    text(this.sliderLabel, sliderXpos-70, this.originY+20);
    var slider = createSlider(this.sliderMin, this.sliderMax,
        this.sliderInitialValue, this.sliderTickSize );
    slider.position(sliderXpos, this.originY);
    slider.style('width', sliderWidth+'px');
    slider.style('margin', '0');
    // this.slider_value = slider.value();
    // text(this.slider_value, globals.width * this.width -25, this.originY+20);
    // slider.(print(slider.value()));
    slider.changed(showSliderValue);
    showSliderValue();

    function showSliderValue() {
        // overwrite blank box
        fill('#774');
        // fill(100);
        rect( originX + actualWidth-sliderValueWidth, originY+5, 50, 25);
        fill(0);
        text(slider.value(), originX + actualWidth-sliderValueWidth+5, originY +20);
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

