class GuessingGame {
    constructor() {}

  setRange(min, max) {
    this.min = min;
    this.max = max;
  }

  guess() {
    return this.middle = Math.floor((this.min + this.max) / 2);
  }

  lower() {
    return this.max = this.middle - 1;
  }

  greater() {
    return this.min = this.middle + 1;
  }
}

module.exports = GuessingGame;
