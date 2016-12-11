function Creature(chromosome) {
    this.chromosome = chromosome;  // eg '10011100'
}

Creature.prototype.getFitness = function() {
    // simple fitness function - a 1 allele increases fitness by 1
    var fitness = 0;
    for (var i=0; i<global.bitlength; i++) {
        if (this.chromosome.charAt(i) === '1') {
            fitness++;
        }
    }
    return fitness;
};

// use start and stop parameters if wanting to display a range, or single
Creature.prototype.draw = function(x, y, start=0, stop=global.bitlength) {
    // draw creature as colured circles
    for (var i = start; i < stop; i++) {
        var allele = this.chromosome.charAt(i);
        // which colour?
        allele === '0' ? fill (15, 20, 80) : fill(80,120,10);
        if (i < global.bitlength-1) {
            ellipse(x+i*22, y, 23, 23);  		// body segment
        } else {
            arc(x+i*22, y, 23, 23, PI/4, 0);	// head + eye
            fill(125,0,0);
            ellipse(x+4+i*22, y-6, 5, 5);
        }
    }
};