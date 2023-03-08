// Starter Money //
let score = 100;
let bet;
let user;


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
/*function restartGame() {
  for (var i = 0; i < board.length; i++) {
    board[i] = 0
  }}

/*if (score > highScore) {

}*/
// reset board


//practice code block /|\

// code for 52 card deck + shuffle functions//
function buildDeck() {
  var ranks = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
  var suits = ["Spade", "Diamond", "Heart", "Clubs"];
  var deck = [];

  for (var suitAllocater = 0; suitAllocater < 4; suitAllocater++) {
    for (var rankAllocator = 0; rankAllocator < 13; rankAllocator++) {
      deck.push(ranks[rankAllocator] + suits[suitAllocater]);
    }
  }
  return deck;
}
function shuffleDeck(deck) {
  for (var i = 0; i < 52; i++) {
    var cardA = deck[i];
    var randomIndex = Math.floor(Math.random() * 52);
    deck[i] = deck[randomIndex];
    deck[randomIndex] = cardA;
    console.log(shuffledDeck);
  }
}

var shuffledDeck = buildDeck();

// deal button //

function dealBet() {
  let bet = prompt("How much would you like to bet?", "$$$");
  if (bet <= score) {
    document.getElementById("bet").innerHTML =
      `Current bet: $ ${bet}`;
  }
  console.log(bet)
  console.log(shuffledDeck)
}
//shuffleDeck(testDeck);
//console.log(testDeck)

// start game //
//function startGame() {
//  hidden = dekc.pop();
//  dealerSum+= 
//}

/*





// highest total counter //

// bet counter //

// time at the table // 
let timer
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