//VARIABLES LIST

const words = ["aback", "abase", "abate", "abbey", "abbot", "abhor", "abide", "abled", "abode", "abort", "about", "above", "abuse", "abyss", "acorn", "acrid", "actor", "acute", "adage", "adapt"]
let guessWord = words[Math.floor(Math.random() * words.length)].toUpperCase()/*generates the random word that user must guess*/
console.log(guessWord)
let usersWord = []

let errorPrompt = document.querySelector('#gameMessage')
let getLetters = document.querySelectorAll('.key') // selects html element for keyboard keys

let tiles = document.querySelectorAll('.tile') // select html element for grid tile
let tileRow = document.querySelectorAll('.tileRow')// select html element for tile row

let selectedTile = 0
let row = 0


let instructionsButton = document.querySelector('.instructions-button')
instructionsButton.addEventListener('click',function(){
    alert("VERY FUN WORD GAME\n\n --- INSTRUCTIONS---- \n\n1. Input a 5 letter word. \n2. If the word is correct, you win! \n3.If the letter is in the correct location the tile will turn green. If the letter is in the word but in the wrong location, the tile will become yellow. If the letter doesnt belong in the word, the tile will turn grey. \n4. Most importantly: HAVE A WORLD OF FUN! ")
})

//use the array to skip over the rows  7th variable to complete the game, true is starting point
const checked = [true, false, false, false, false, false, false];



// let selectedRow = 0

/* write a function that checks the word in a row
 1.When each letter is passed into a tile, add those letters into an array. *done*
 2.join the array of letters to form a string (usersWords) *done*
 3.check/match the usersword string with the actual word *done*
 4.once the usersWord has been compared to the guessWord, if userWord is wrong progress to next row of tiles. **done**
 5.create function which compares letters in the userWord with guessWord
*/

function checkInput() {
    let input = usersWord.join('')
    input = input.toUpperCase()
    console.log(input)
    if (input.length !== 5) {
        errorPrompt.textContent = 'You must guess a word with 5 letters'
        console.log("not enough characters")
    }
    tileColours(row)
    if (input === guessWord) {
        errorPrompt.textContent = 'Well done!'
    } else {
        //input code to move to the next tile row
        usersWord = []
    }
    row++
}

//let tileColour = ['grey', 'grey', 'grey', 'grey', 'grey'];

/**
 * check users letters input if they are in correct position
 * if position is correct, turn green
 * if letter is in word but wrong position go yellow
 * otherwise go grey
 * 
 * 1. get the row , 
 * 2.for each user input check inner text
 * 3. if the innertext is in correct position, turn background GREEN
 * 4. if the innnertext exists in the word, but is wrong position, turn background YELLOW
 * 5. otherwise turn background GREY.
 * 
 * 
 * 
 * 
 * 
 */

function tileColours(row) {

    for (let i = 0; i < 5; i++) {

        // console.log('this is guess word' +guessWord[i])
        // console.log('this is users word' +usersWord[i])
        let tile = document.getElementById(row + 'TileRow').children[i]
        console.log(tile)
        if (guessWord[i] === usersWord[i].toUpperCase()) {
            tile.style.backgroundColor = "rgb(29, 202, 122)"
            // console.log("green")

        }

        else if (guessWord.includes(usersWord[i].toUpperCase())) {
            tile.style.backgroundColor = "yellow"
            //console.log("yellow")
        } else {
            tile.style.backgroundColor = "grey"
        }
    }

}

//input clicked keyboard innertext into tile grid
for (let i = 0; i < getLetters.length; i++) { //loops through all the keys and adds a "click" event listener
    getLetters[i].addEventListener('click', function () {

        const letter = getLetters[i].textContent //grabs the individual letter in element

        if (letter === 'del') {
            tiles[selectedTile - 1].textContent = ''
            console.log('deleted')
            usersWord.pop()
                

            selectedTile--
            if (selectedTile == 0) { return; }
        }
        else if (letter === 'enter') {
            console.log('enter')
            checkInput()
        }
        else {
            let input = usersWord.join('').toUpperCase()
            input = input.toUpperCase()
            console.log('clicked ' + letter)
            if (usersWord.length == 5) { return; }

            tiles[selectedTile].textContent = letter
            usersWord.push(letter)
            selectedTile++
            console.log(selectedTile, row)
        }
    }
    )

}

