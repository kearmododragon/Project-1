let score = 100;
let bet;
let user;
let dealerSum = 0;
let userSum = 0;
let hidden;
let dealerAces = 0;
let userAces = 0;
let canHit = true;
//ACES only supported as 11/1 if game functions//

let player1 = {
  name: null,
  score: 100,
  cards: [],
  bet: 0,
  handValue: 0
}
let dealer = {
  name: "Croupier",
  cards: [],
  handValue: 0
}

function init() {
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
  let ranks = [2, 3, 4, 5, 6, 7, 8, 9, "T", "J", "Q", "K", "A"];
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

let builtDeck;
let shuffledDeck;

function dealBet() {
  builtDeck = buildDeck();
  shuffledDeck = shuffDeck(builtDeck);
  player1.cards = []
  dealer.cards = []
  let bet = prompt("How much would you like to bet?", "$$$");
  if (bet <= score) {
    document.getElementById("bet").innerHTML =
      `Current bet: $ ${bet}`;
      document.getElementById("stayB").disabled = false; 
      document.getElementById("hitB").disabled = false;
  }
  console.log(bet)
  dealCard(player1);
  dealCard(player1);
  dealCard(dealer);
  dealCard(dealer);
  setPlayerHandValue();
  setDealerHandValue();
}

function dealCard(gambler) {
  gambler.cards.push(shuffledDeck.pop())
}

function hitPlayer() {
  dealCard(player1)
  setPlayerHandValue()
  console.log(player1.cards)
  isBust()
}

function setPlayerHandValue() {
  player1.handValue = 0
  for (let i = 0; i < player1.cards.length; i++) {
    let numberRankSplit = player1.cards[i].split("");
    if (Number(numberRankSplit[0])) {
      player1.handValue += Number(numberRankSplit[0])
    }
    else if ((numberRankSplit[0] == "T" || numberRankSplit[0] == "J" || numberRankSplit[0] == "Q" || numberRankSplit[0] == "K")) {
      player1.handValue += 10
    } else {
      player1.handValue += 11
    }
  } console.log(player1)
}

function setDealerHandValue() {
  dealer.handValue = 0
  for (let i = 0; i < dealer.cards.length; i++) {
    let dealerRankSplit = dealer.cards[i].split("");
    if (Number(dealerRankSplit[0])) {
      dealer.handValue += Number(dealerRankSplit[0])
    }
    else if ((dealerRankSplit[0] == "T" || dealerRankSplit[0] == "J" || dealerRankSplit[0] == "Q" || dealerRankSplit[0] == "K")) {
      dealer.handValue += 10
    } else {
      dealer.handValue += 11
    }
  } console.log(dealer)
}

// dealer 

function isBust() {
  if (player1.handValue > 21) {
    //DISABLE HIT BUTTON//
    //REINSTATE DEAL BUTTON//
    //minus bet from current pot //

    document.getElementById("name").innerHTML =
    `Oh No ${player1.name}! You went bust with ${player1.handValue}!`;
    // trigger endgame
  }
}

function stayButton() {
  document.getElementById("dealB").disabled = false; 
  document.getElementById("hitB").disabled = true;
  // if dlr value < player value draw card.
  while (dealer.handValue < player1.handValue && player1.handValue <= 21){
    dealCard(dealer)
    setDealerHandValue()
    console.log(dealer)
  }
}

function endGame() {
  if (dealer.handValue >= player1.handValue) {
    //you lose message
    //loss of money
  } else {
    //you win message
    // money added to pot
  }
  function gameOver() {
    if (currentPot = 0) {
      //abusive you lose message
      // offer to buy in again
      // deal option removed
    }
  }

}






/*if (isNaN(value)) {
  if (value === "A") {
    return 11;
  }
  return 10;
}
return parseInt(value);
}

dealerSum += getValue(hidden);
console.log(hidden);*/



/*user + player
define as objects 
each object ${user}*/