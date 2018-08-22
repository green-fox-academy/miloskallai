import { Animal } from "../animals_in_the_zoo/animals";
import { Reptile } from "../animals_in_the_zoo/reptile";
import { Mammal } from "../animals_in_the_zoo/mammal";
import { Bird } from "../animals_in_the_zoo/bird";

export interface Flyable {
  land():void;
  fly():void;
  takeOff():void;
}