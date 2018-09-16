'use strict'

import {Reservationy} from './reservationy'

export class Reservation implements Reservationy {
  getDownBooking(){
    let daysOfTheWeek: string[] = ['MON', 'TUE', 'WED', 'THU', 'FRY', 'SAT', 'SUN'];
    let randomNumber = function(){
      return Math.floor(Math.random() * daysOfTheWeek.length);
    }

    let randomDay: string = daysOfTheWeek[randomNumber()];
    return randomDay;
  };

  getCodeBooking(){
    let lettersAndNumbers: string[] = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A',	'B',	'C',	'D',	'E',	'F',	'G',	'H',	'I',	'J',	'K',	'L',	'M',	'N',	'O',	'P',	'Q',	'R',	'S',	'T',	'U',	'V',	'W',	'X',	'Y',	'Z'];
    let reservationCode: string;
    let randomNumber = function(){
      return Math.floor(Math.random() * lettersAndNumbers.length);
    }

    let codeTempArr: string [] = [];
    for(let i: number = 0; i < 8; i++){
      codeTempArr.push(lettersAndNumbers[randomNumber()]);
    }

    reservationCode = codeTempArr.join('');

    return `Booking# ${reservationCode} for ${this.getDownBooking()}`;
  
  }
}
  


