class Station {
  gasAmount: number;
  
  refill(car) {
    this.gasAmount -= car.capacity;
    car.gasAmount += this.gasAmount;
  }

  constructor(gasAmount) {
    this.gasAmount = gasAmount;
  }
}

class Car {
  gasAmount: number;
  capacity: number;

  constructor() {
    this.gasAmount = 0;
    this.capacity = 100;
  }
}

let myCar = new Car;

let petrolStation = new Station(150);

myCar;
petrolStation.refill(myCar);

console.log(petrolStation, myCar);
