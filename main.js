//ACES 11 points or 1 point/
// 3-1 for "blackjack"//
// 350-1 for randomly selected(or just spades) blackjack
// show card faces not just numbers //
//log high score //
//instigate timer //
//auto type over prompt //
// avoid "..." messages //
// change color/fade of buttons when unavailable //
let bet;
let player1 = {
  name: null,
  score: 0,
  cards: [],
  bet: 0,
  handValue: 0,
  highestScore: 0,
}
let dealer = {
  name: "Croupier",
  cards: [],
  handValue: 0
}

function play() {
  player1.name = prompt("Hello! What is your name?", "Enter name");
  if (player1.name != null) {
    document.getElementById("name").innerHTML =
      `Hello, ${player1.name}! Sit down and let's play Blackjack!`;
    document.getElementById("user").innerHTML =
      `${player1.name}:`
    console.log(player1.name)
    player1.score += Number(100);
    document.getElementById("currentScore").innerHTML =
      `Current Pot: $ ${player1.score}`;
    document.getElementById("message").innerHTML =
      `Good luck!`;
    document.getElementById("message2").innerHTML =
      `...`;
    document.getElementById("bet").innerHTML =
      `Current Bet:`;
    document.getElementById("playB").disabled = true;
    document.getElementById("dealB").disabled = false;
    document.getElementById("leaveB").disabled = false;
    document.getElementById("hitB").disabled = true;
    document.getElementById("stayB").disabled = true;

    console.log(player1)
  }
}
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
  document.getElementById("playB").disabled = true;
  document.getElementById("dealB").disabled = true;
  document.getElementById("leaveB").disabled = true;
  document.getElementById("hitB").disabled = false;
  document.getElementById("stayB").disabled = false;
  player1.bet = 0
  builtDeck = buildDeck();
  shuffledDeck = shuffDeck(builtDeck);
  player1.cards = []
  dealer.cards = []
  let bet = prompt("How much would you like to bet?", "$$$");
  if (bet <= player1.score) {
    document.getElementById("bet").innerHTML =
      `Current bet: $ ${bet}`;
    document.getElementById("stayB").disabled = false;
    document.getElementById("hitB").disabled = false;
    player1.score = (player1.score - bet);
    document.getElementById("currentScore").innerHTML =
      `Current Pot: $ ${player1.score}`;
  console.log(bet)
  dealCard(player1);
  dealCard(player1);
  dealCard(dealer);
  dealCard(dealer);
  setPlayerHandValue();
  setDealerHandValue();
  player1.bet += Number(bet);
}}


function dealCard(gambler) {
  gambler.cards.push(shuffledDeck.pop())
}

function hitPlayer() {
  document.getElementById("hitB").disabled = false;
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
  document.getElementById("playerTotal").innerHTML =
    `${player1.name} current score: ${player1.handValue}`;

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
  document.getElementById("dealerTotal").innerHTML =
    `Current score: ${dealer.handValue}`
}

dealer

function isBust() {
  if (player1.handValue > 21) {
    document.getElementById("playB").disabled = true;
    document.getElementById("dealB").disabled = false;
    document.getElementById("leaveB").disabled = false;
    document.getElementById("hitB").disabled = true;
    document.getElementById("stayB").disabled = true;
    document.getElementById("message").innerHTML =
      `Oh no ${player1.name}! You went bust with ${player1.handValue}!`;
    gameOver();
    highScore();
    console.log(player1)
  }
}
function stayButton() {
  document.getElementById("dealB").disabled = false;
  document.getElementById("hitB").disabled = true;
  while (dealer.handValue < player1.handValue && player1.handValue <= 21) {
    dealCard(dealer);
    setDealerHandValue();
  }
  endGame();
  console.log(dealer);
}

function endGame() {
  document.getElementById("playB").disabled = true;
  document.getElementById("dealB").disabled = false;
  document.getElementById("leaveB").disabled = false;
  document.getElementById("hitB").disabled = true;
  document.getElementById("stayB").disabled = true;
  if (dealer.handValue > player1.handValue && dealer.handValue <= 21) {
    //LOSE THE GAME
    document.getElementById("message").innerHTML =
      `Oh no ${player1.name}, you had ${player1.handValue} and the dealer had ${dealer.handValue}. You lost $${player1.bet}! `
    document.getElementById("currentScore").innerHTML =
      `Current Pot: $ ${player1.score}`;
    document.getElementById("stayB").disabled = true;
    console.log(player1);
    highScore();
    gameOver();
  } else if (dealer.handValue < player1.handValue && player1.handValue <= 21 || dealer.handValue >= 22) {
    //WIN THE GAME 
    document.getElementById("message").innerHTML =
      `Congratulations ${player1.name}, you had ${player1.handValue} and the dealer had ${dealer.handValue}. You won $${player1.bet}! `
    player1.score += (player1.bet += player1.bet);
    document.getElementById("currentScore").innerHTML =
      `Current Pot: $ ${player1.score}`;
      highScore();
    console.log(player1);
  } else {
    //TIE GAME
    document.getElementById("message").innerHTML =
      `Well ${player1.name}, you had ${player1.handValue} and the dealer had ${dealer.handValue}. we will return your $${player1.bet}! `
    player1.score = (player1.score + player1.bet);
    document.getElementById("currentScore").innerHTML =
      `Current Pot: $ ${player1.score}`;
    console.log(player1);
    highScore();
  }
}
function gameOver() {
  if (player1.score === 0) {
    console.log("gameOVer")
    document.getElementById("name").innerHTML =
    `...`
    document.getElementById("message2").innerHTML =
      `You're broke. Get off my table ${player1.name}, unless you'd like to buy back in?`;
    document.getElementById("playB").disabled = false;
    document.getElementById("dealB").disabled = true;
    document.getElementById("leaveB").disabled = false;
    document.getElementById("hitB").disabled = true;
    document.getElementById("stayB").disabled = true;
  }
}

function reset() {
  document.getElementById("name").innerHTML =
    `You're leaving? so soon.`
  document.getElementById("message").innerHTML =
    `Such a shame.`
  document.getElementById("message2").innerHTML =
    `It's best for your wallet, ${player1.name}, if you leave. House always wins.`
  document.getElementById("playB").disabled = false;
  document.getElementById("dealB").disabled = true;
  document.getElementById("leaveB").disabled = true;
  document.getElementById("hitB").disabled = true;
  document.getElementById("stayB").disabled = true;
  player1.score = 0
  console.log(player1)
}

function highScore() {
  if (player1.score >= player1.highestScore){
    player1.highestScore = player1.score
    document.getElementById("high").innerHTML =
    `Highest Pot: $ ${player1.highestScore}`
  }
}

//timer
// timer triggered by "play"
// timer stopped by "game over"
// timer reset by "reset"
let seconds = 00;
let tens = 00;
let timeTens = document.getElementById("tens");
let timeSeconds = document.getElementById("seconds");
let buttonStart = document.getElementById("playB");
let buttonStop = document.getElementById("leaveB")
let buttonReset = document.getElementById("playB");
let interval; //store timer values
function timer(){
  tens++;
  if(tens<9){
    timeTens.innerHTML = "0" + tens;
  }
  if (tens>9){
    timeTens.innerHTML = tens;
  }
  if (tens>99){
    seconds++;
    timeSeconds.innerHTML = "0" + seconds;
    tens = 0;
    timeTens.innerHTML = "0" + 0;
  }
}


/*
let timer;
let delay;
let countState = 0;

const displayEl = document.querySelector("#timerDisplay");
const subEl = document.querySelector("#subRoutine");

function init() {
  delay = 100;
  timer = setInterval(cb, delay);
}

function cb(){
  countState++;
  updateSubRoutine();
  render();
}

function render() {
  displayEl.textContent = countState;
}
*/