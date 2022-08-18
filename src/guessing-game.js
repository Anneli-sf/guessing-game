class GuessingGame {
    constructor() {}

    setRange(min, max) {
      this.min = min;
      this.max = max;
    }
  
    guess() {
      return this.middle = Math.round((this.max - this.min)/2) + this.min;
    }
  
    lower() {
      return this.max = this.middle;
    }
  
    greater() {
      return this.min = this.middle;
    }
}

module.exports = GuessingGame;
