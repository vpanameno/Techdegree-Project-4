/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

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
      new Phrase("Life is amazing"),
      new Phrase("Karma comes around"),
      new Phrase("Live life to the fullest"),
      new Phrase("Never let fear win")
    ];
    return phrases;
  }

  /**
   * Begins game by selecting a random phrase and displaying it to user
   */

  startGame() {
    const overlay = document.querySelector("#overlay");
    overlay.style.display = "none";
    const selectedPhrase = this.getRandomPhrase(); //gets a random phrase object
    selectedPhrase.addPhraseToDisplay(); //displays random phrase
    this.activePhrase = selectedPhrase;
  }

  /**
   * Selects random phrase from phrases property
   * @return {Object} Phrase object chosen to be used
   */
  getRandomPhrase() {
    //selects random phrases from phrases property
    const randomPhrase = this.phrases[
      Math.floor(Math.random() * this.phrases.length)
    ];
    return randomPhrase;
  }

  //Below we will disable the buttons and determine if they are correct or wrong
  //and add appropriate class with colors orange or blue
  handleInteraction() {
    //button clicked
    button.disabled = true;
    if (!this.activePhrase.checkLetter(button.textContent)) {
      button.classList.add("wrong");
      this.removeLife();
    } else {
      this.activePhrase.showMatchedLetter(button.textContent);
      button.classList.add("chosen");
      if (this.checkForWin()) {
        this.gameOver(true);
      }
    }
  }

  /* Below I have created a function that will reset the game once the game has ended*/
  resetGame() {
    const div = document.getElementById("phrase");
    const oldUl = document.querySelector("ul");
    const newUl = document.createElement("ul");
    div.removeChild(oldUl);
    div.appendChild(newUl);

    //replaces old hearts with new heartsImages
    const heartsImages = document.querySelectorAll("img");
    heartsImages.forEach(heart => {
      heart.setAttribute("src", "images/liveHeart.png");
    });

    //select the buttons and enables them/sets class back to key
    const buttons = document.querySelectorAll(".key");
    buttons.forEach(button => {
      button.disabled = false;
      button.setAttribute("class", "key");
    });
  }
  /**
* Checks for winning move
* @return {boolean} True if game has been won, false if game wasn't
won
if any of the letters have a 'hide' class then the player has not won
*/
  checkForWin() {
    const shownBoxes = document.getElementsByClassName("letter");

    for (let i = 0; i < shownBoxes.length; i += 1) {
      if (shownBoxes[i].className.includes("hide")) {
        return false;
      }
    }
    return true;
  }

  /**
   * Increases the value of the missed property
   * Removes a life from the scoreboard
   * Checks if player has remaining lives and ends game if player is out
   */
  removeLife() {
    this.missed += 1;
    const heartsImages = document.querySelectorAll("img");

    for (let i = 0; i < this.missed; i += 1) {
      heartsImages[i].setAttribute("src", "images/lostHeart.png");
    }

    if (this.missed === 5) {
      this.gameOver(false);
    }
  }

  /**
   * Displays game over message
   * @param {boolean} gameWon - Whether or not the user won the game
   */
  gameOver(gameWon) {
    this.resetGame();
    //displays original start screen overlay - select overlay
    const overlay = document.querySelector("#overlay");
    overlay.style.display = "inherit";
    const message = document.querySelector("#game-over-message");
    //depending on outcome of gameWon//updates overlay h1 element with message
    if (gameWon === true) {
      overlay.setAttribute("class", "win");
      message.textContent = "You win!";
    } else if (gameWon === false) {
      message.textContent = "Better luck next time!";
      overlay.setAttribute("class", "lose");
    }
  }
}
