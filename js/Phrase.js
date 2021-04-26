/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
  constructor(phrase) {
    this.phrase = phrase.toLowerCase();
  }
  /**
   * Display phrase on game board
   */
  addPhraseToDisplay() {
    for (let i = 0; i < this.phrase.length; i += 1) {
      if (this.phrase.charAt(i) !== " ") {
        const box = document.createElement("li"); //create a new li element
        document.getElementById("phrase").firstElementChild.appendChild(box);
        box.classList.add("hide");
        box.classList.add("letter");
        box.classList.add(`${this.phrase.charAt(i)}`);
        box.textContent = this.phrase.charAt(i); //set class to letter - visual representation tied to HTML element
      } else {
        const box = document.createElement("li");
        document.getElementById("phrase").firstElementChild.appendChild(box); //append to ul element
        box.setAttribute("class", "space"); //set class to letter
        box.textContent = " ";
      }
    }
  }
  /**
   * Checks if passed letter is in phrase
   * @param (string) letter - Letter to check
   */
  checkLetter(letter) {
    return this.phrase.includes(letter);
  }

  /**
   * Displays passed letter on screen after a match is found
   * @param (string) letter - Letter to display
   */

  //select all of the letter DOM
  //elements that have a CSS class name that matches the selected letter and
  //replace each selected element's `hide` CSS class with the `show` CSS class.
  showMatchedLetter(letter) {
    const selectedLetters = document.getElementsByClassName(letter);
    for (let i = 0; i < selectedLetters.length; i += 1) {
      selectedLetters[i].classList.replace("hide", "show");
    }
  }
}

//
