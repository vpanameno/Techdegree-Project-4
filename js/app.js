/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

//Below we are creating giving the button to start the game interaction and
//instantiating a new game object that we will refer to througought the game

let game = "";
const playButton = document.querySelector("#btn__reset");
playButton.addEventListener("click", e => {
  game = new Game();
  game.startGame();
});

/**
 * Handles onscreen keyboard button clicks
 * @param (HTMLButtonElement) button - The clicked button element
 */
const keyboard = document.querySelector("#qwerty");

keyboard.addEventListener("click", e => {
  if (event.target.className === "key") {
    button = e.target;
    game.handleInteraction(button);
  }
});
