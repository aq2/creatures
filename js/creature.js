function Creature(chromosome) {
    this.chromosome = chromosome;  // eg '10011100'
}

// simple calculate fitness function - a 1 allele increases fitness by 1
Creature.prototype.getFitness = function() {
    var fitness = 0;
    for (var i=0; i<global.bitlength; i++) {
        if (this.chromosome.charAt(i) === '1') {
            fitness++;
        }
    }
    return fitness;
};

// draw a creature as sequence of coloured circles, 0=blue, 1=green
// x and y are drawing coordinates
// start and stop used to draw range of circles/segments/'bits'
Creature.prototype.draw = function(x, y, start=0, stop=global.bitlength) {
    for (var i = start; i < stop; i++) {
        var allele = this.chromosome.charAt(i);
        // which colour?
        allele === '0' ? fill (15, 20, 80) : fill(80,120,10);
        if (i < global.bitlength-1) {
            // draw body segment
            ellipse(x+i*22, y, 23, 23);
        } else {
            // draw head
            arc(x+i*22, y, 23, 23, PI/4, 0);
            // draw eye
            fill(125,0,0);
            ellipse(x+4+i*22, y-6, 5, 5);
        }
    }
    fill(0);
};