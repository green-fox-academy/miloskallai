"use strict";

const watchlist: string[] = [];

let securityAlcoholLoot: number = 0;

const queue: any[] = [
  { name: "Amanda", alcohol: 10, guns: 1 },
  { name: "Mark", alcohol: 0, guns: 0 },
  { name: "Dolores", alcohol: 0, guns: 1 },
  { name: "Wade", alcohol: 1, guns: 1 },
  { name: "Anna", alcohol: 10, guns: 0 },
  { name: "Rob", alcohol: 2, guns: 0 },
  { name: "Joerg", alcohol: 20, guns: 0 }
];

function securityCheck(queue: any[]) {
  let festivalgoers: string[] = [];

  queue.forEach(function(element) {
    festivalgoers.push(element.name);
  });

  queue.forEach(function(element) {
    if (element.alcohol > 0) {
      securityAlcoholLoot += element.alcohol;
      element.alcohol = 0;
    }

    if (element.guns > 0) {
      festivalgoers.splice(element, 1);
    }
  });

  return festivalgoers;
}

console.log(securityCheck(queue));
