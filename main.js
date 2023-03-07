// User's name //

function enterName() {
    let user = prompt("Hello! What is your name?", "Please enter your name");
    if (person != null) {
        document.getElementById("name").innerHTML = 
        `Hello ${user}! Sit down and lets play Blackjack!`;
    }
}
enterName()
// prompt doesn't trigger"

let deck
class Card {
  static rankLookup = {
    "A": 14,
    "K": 13,
    "Q": 12,
    "J": 11
  }
  constructor(suit, rank) {
    this.suit = suit 
    this.rank = rank
    this.image = ""
  }
}
class Deck {
  static suits = ['SP', "D", "H", "C"]
  static ranks = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"]
  constructor() {
    this.cards = []
  }}
  makeDeck() {
    console.log(this.cards)
    for(let s = 0;s<Deck.suits.length; s++){
      for (let r = 0; r<Deck.ranks.length; r++){
        let suit = Deck.suits[s]
        let rank = Deck.ranks[r]
        let newCard = new Card(suit, rank)
        this.cards.push(newCard)
      }
    }
  }
function initialize() {
  console.log('start deck factory')
  deck = new Deck()
  deck.makeDeck()
  console.log(deck)
}
initialize()

// ABOVE IS CODE FOR THE 52 CARD DECK //

// money counter //

// highest total counter //

// bet counter //

// time at the table // 

// shuffel deck //

// deal users cards //

// deal dealers cards //

// 