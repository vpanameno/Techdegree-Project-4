/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
  constructor(phrase) {
    this.phrase = phrase.toLowerCase();
  }
}

const phrase = new Phrase("Life is so bad rn");

console.log(`Phrase - phrase: ${phrase.phrase}`);
