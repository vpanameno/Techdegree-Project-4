/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
//methods for starting and ending the game, handling interactions, getting a random Phrase
//checking for a win and removing a life from the scoreboard

class Game {
  constructor() {
    this.missed = 0; //lives left
    this.phrases = this.createPhrases(); //array of phrase objects to use with the game
    this.activePhrase = null; //phrase object that's currently in play
  }

  /**
   * Creates phrases for use in game
   * @return {array} An array of phrases that could be used in the game
   */
  createPhrases() {
    const phrases = [
      new Phrase("I love feeling this way"),
      new Phrase("Life is beautiful"),
      new Phrase("Karma is always seeking you out"),
      new Phrase("Live life to fullest"),
      new Phrase("Never let fear keep you from the things you love")
    ];
    return phrases;
  }
  /**
   * Selects random phrase from phrases property
   * @return {Object} Phrase object chosen to be used
   */
  getRandomPhrase() {
    //selects random phrases from phrases property
    const randomPhrase = this.phrases[
      Math.floor(Math.random() * this.phrases.length)
    ]; //in bracket notation because you are supposed to be able to access item in array
    return randomPhrase; //remove when refactoring
  }
}
