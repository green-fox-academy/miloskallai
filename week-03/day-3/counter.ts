class Counter {
  integer: number = 0;

  add(number: number) {
    this.integer += number;
  }

  get() {
    console.log(this.integer.toString());
  }

  reset() {
    this.integer = 0;
  }
}
