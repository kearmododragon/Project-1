let score = 100;
let bet;
let user;
let dealerSum = 0;
let userSum = 0;
let hidden;
let dealerAces = 0;
let userAces = 0;
let canHit = true;

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
  return deck;
}

let builtDeck = buildDeck();
let shuffledDeck = shuffDeck(builtDeck)
//-----------------DONT TOUCH ABOVE THIS LINE-----------------//
function dealBet() {
  let bet = prompt("How much would you like to bet?", "$$$");
  if (bet <= score) {
    document.getElementById("bet").innerHTML =
      `Current bet: $ ${bet}`;
  }
  console.log(bet)
  console.log(shuffledDeck)
}


function dealCard() {
  hidden = deck.shift();
  dealerSum += getValue(hidden);
dealerAceCount += checkAce
console.log(hidden);
console.log(dealerSum);
}
function getValue(cardA) {
  let data = cardA.split("-");
  let value = data[0];

  if (isNaN(value)) {
    if (value === "A") {
      return 11;
    }
    return 10;
  }
  return parseInt(value);
}

function checkAce(cardA) {
  if (card[0] === "A"){
    return 1;
  }
  return 0;
}