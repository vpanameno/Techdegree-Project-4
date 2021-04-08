/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

/** This was checking to see that the phrases were input **/
// const game = new Game();
// game.phrases.forEach((phrase, index) => {
//   //includes the second parameter of index
//   console.log(`Phrase ${index} - phrase: ${phrase.phrase}`);
// });

const logPhrase = phrase => {
  console.log(`Phrase - phrase: `, phrase.phrase);
};
const game = new Game();
logPhrase(game.getRandomPhrase());
logPhrase(game.getRandomPhrase());
logPhrase(game.getRandomPhrase());
logPhrase(game.getRandomPhrase());
logPhrase(game.getRandomPhrase());
