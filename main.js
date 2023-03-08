let score = 100;
let bet;
let user;
let dealerSum = 0;
let userSum = 0;
let hidden;
let dealerAces = 0;
let userAces = 0;
let canHit = true;


let player1 = {
  name: null,
  score: 100,
  cards: [],
  bet: 0,
}
let dealer = {
  name: "Croupier",
  cards: [],
}

function init(){

}
function enterName() {
player1.name = prompt("Hello! What is your name?", "Enter name");
  if (player1.name != null) {
    document.getElementById("name").innerHTML =
      `Hello, ${player1.name}! Sit down and let's play Blackjack!`;
    document.getElementById("user").innerHTML =
      `${player1.name}:`
    document.getElementById("currentScore").innerHTML =
      `Current Pot: $ ${score}`;
    console.log(player1.name)
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

function dealBet() {
  let bet = prompt("How much would you like to bet?", "$$$");
  if (bet <= score) {
    document.getElementById("bet").innerHTML =
      `Current bet: $ ${bet}`;
  }
  console.log(bet)
  console.log(shuffledDeck)
  dealCard(player1);
  dealCard(player1);
  dealCard(dealer);
  dealCard(dealer);
  console.log(player1)
  console.log(dealer)
}


function dealCard(gambler) {
  gambler.cards.push(shuffledDeck.pop())
}

function hitPlayer(){
  dealCard(player1)
  console.log(player1.cards)
}

function isBust(){
}

function currentHandValue(){

}

/*
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

dealerSum += getValue(hidden);
console.log(hidden);



/*user + player
define as objects 
each object ${user}*/