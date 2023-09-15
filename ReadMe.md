"Blackjack"
https://kearmododragon.github.io/Project-1/
A card game where the player attempts to beat the dealer by getting closer to 21 without going over. 

https://imgur.com/gallery/wM17dKw
To create this I used a mix of JavaScript, HTML and CSS.

To instigate the game, click play and enter your name. 
Following this, select "Deal" to draw your cards.
You will be drawn 2 cards and the dealer just 1. 
If you wish to draw further cards, click "hit" until you're ready to "stay".

Once you "Stay", the dealer will try and beat your score without going over 21.

If you win, your bet will be returned double.
If you tie, your bet will be returned.
If you lose, the house keeps your bet.
If at any point you wish to stop playing, click "leave table".

Should you reach $0, you will be asked to leave the table, with a chance to buy back in. 

I chose to create this game as part of my course firstly because I enjoy blackjack. We were offered a choice of around 20 games to create as the first project of my course and I wanted to challenge myself so ensured that I picked a project that was upper-mid difficulty from the options presented. 

I enjoyed creating it because it really pushed me to the limits of my knowledge at the time. It was a solo project however I was happy to ask questions from my colleagues when I Was unsure how to procede.

My favourite pieces of code is the buldDeck function miced with the shuffDeck function. Building the deck I initially thought i'd need to manually create each card (2h, 3s, 2c, 2d, etc) however after some deeper thinking managed to work out a way to combite the suits with the card digit. 
https://i.imgur.com/4xiq0HH.png

SuffDeck is something that is obviously essential to a card game too. This was only envoked at the start of the game as you wouldn't expect the deck to be shuffled more than that. I was happy with this pieve of code because once it was created, I had my deck, I had it shuffled so all that was left was to play the game.


A piece of code I struggled with was setting the value of the hand. The function setPlayerHandValue was created to do just that. There's a limit to the value of 21 however most of the cards have different values. I struggled to write this code and figuring out how to make sure the cards had the right value. First needing to split the suit away from the card value, then taking the number that was left as the value, or assigning a value to the letter that was left. 

The next step as part of the game would be to have the Ace card having an alternative value of 1 or 11, however with the time restraints I wasn't able to get this coded.
https://i.imgur.com/vwnj73q.png

Icebox items;
//ACES 11 points or 1 point/
// 3-1 for "blackjack"//
// 350-1 for randomly selected(or just spades) blackjack
// show card faces not just numbers //
//instigate timer //
//auto type over prompt //
// avoid "..." messages //
