import { randomCities } from "./const";

function randomElem(theArray: string[]): string {
  let randomIndex = Math.floor(Math.random()*theArray.length);
  return theArray[randomIndex];
}

export const getRandomCity = randomElem(randomCities);
