// Starter Money //
let score = 100;
let bet;
let user;
let dealerSum = 0;
let userSum = 0;
let hidden;
let dealerAces = 0;
let userAces = 0;
let canHit = true;


// User's name + starter money//
function enterName() {
  let user = prompt("Hello! What is your name?", "Enter name");
  if (user != null) {
    document.getElementById("name").innerHTML =
      `Hello, ${user}! Sit down and let's play Blackjack!`;
    document.getElementById("user").innerHTML =
      `${user}:`
    document.getElementById("currentScore").innerHTML =
      `Current Pot: $ ${score}`;
    console.log(user)
  }
}
// need to have "enter name" auto removed //

//leave table button//
//function resetGame()
// code for 52 card deck + shuffle functions//
function buildDeck() {
  let ranks = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
  let suits = ["Spade", "Diamond", "Heart", "Clubs"];
  let deck = [];

  for (let suitAllocater = 0; suitAllocater < 4; suitAllocater++) {
    for (let rankAllocator = 0; rankAllocator < 13; rankAllocator++) {
      deck.push(ranks[rankAllocator] + suits[suitAllocater]);
    }
  }
  return deck;
}

function shuffDeck(deck) {
  for (let i = 0; i < 52; i++) {
    let cardA = deck[i];
    let randomIndex = Math.floor(Math.random() * 52);
    deck[i] = deck[randomIndex];
    deck[randomIndex] = cardA;
  }
  return deck
}

let builtDeck = buildDeck();
let shuffledDeck = shuffDeck(builtDeck)

function dealBet() {
  let bet = prompt("How much would you like to bet?", "$$$");
  if (bet <= score) {
    document.getElementById("bet").innerHTML =
      `Current bet: $ ${bet}`;
  }
  console.log(bet)
  console.log(shuffledDeck)


window.onLoad = function () {
startGame();
}
console.log(startGame)

function startGame() {
  hidden = deck.pop();
  dealerSum += cardValue(hidden);
  dealerAces += checkAce(hidden);
  console.log(hidden);
  console.log(dealerSum);
}
function cardValue(cardA) {
  let data = cardA.split("-");
  let value = data[0];

  if (isNaN(value)) {
    if (value === "A") {
      return 11;
    } return 10;
  }
  return parseInt(value);
}
function checkAce(cardA) {
  if (cardA[0] === "A") {
    return 1;
  } 
  return 0;
}
}
// highest total counter //

// bet counter //

// time at the table //
/*let timer
let count = 0
timer = setInterval(function () {
  console.log("timers are cool", count)
  count = count + 1
  if (count > 10) {
    clearInterval(timer)
  }
}, 2000)

  // deal users + dlr cards //
var dealerSum =0;
var userSum =0;

var dealerAces =0;
var userAces =0;

var hidden;
*/

// on event listener for Deal, initiate buildDeack();