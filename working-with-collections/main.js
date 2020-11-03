/* global _ */
/* eslint-disable no-console */
console.log('Lodash is loaded:', typeof _ !== 'undefined');

var players = [
  {
    name: 'Player One',
    hand: []
  },
  {
    name: 'Player Two',
    hand: []
  },
  {
    name: 'Player Three',
    hand: []
  },
  {
    name: 'Player Four',
    hand: []
  }
];

var suits = ['Clubs', 'Diamonds', 'Hearts', 'Spades'];
var ranks = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];

function cardDeckGenerator() {
  var cardDeck = [];
  for (var i = 0; i < ranks.length; i++) {
    for (var k = 0; k < suits.length; k++) {
      var rank = ranks[i];
      var suit = suits[k];
      var card = {
        rank: rank,
        suit: suit
      };
      cardDeck.push(card);
    }
  }
  return cardDeck;
}

var deck = cardDeckGenerator();
var shuffledDeck = _.sampleSize(deck, 52);

function dealTwoCards() {
  for (var i = 0; i < players.length; i++) {
    var player = players[i];

    var bottomCard = shuffledDeck.pop();
    player.hand.push(bottomCard);

    bottomCard = shuffledDeck.pop();
    player.hand.push(bottomCard);
  }
}

dealTwoCards();

function findWinner() {
  var biggestScore = {
    name: '',
    total: 0
  };

  for (var i = 0; i < players.length; i++) {
    var player = players[i];
    var card1 = player.hand[0];
    var card2 = player.hand[1];
    var valueOfCard1 = null;
    var valueOfCard2 = null;

    if (typeof parseInt(card1.rank) === 'number') {
      valueOfCard1 = parseInt(card1.rank);
    } else if (card1.rank === 'Jack' || card1.rank === 'Queen' || card1.rank === 'King') {
      valueOfCard1 = 10;
    } else if (card1.rank === 'Ace') {
      valueOfCard1 = 11;
    }

    if (typeof parseInt(card2.rank) === 'number') {
      valueOfCard2 = parseInt(card2.rank);
    } else if (card2.rank === 'Jack' || card2.rank === 'Queen' || card2.rank === 'King') {
      valueOfCard2 = 10;
    } else if (card2.rank === 'Ace') {
      valueOfCard2 = 11;
    }

    var totalValue = valueOfCard1 + valueOfCard2;

    if (totalValue > biggestScore.total) {
      biggestScore.name = player.name;
      biggestScore.total = totalValue;
    }
  }
  return biggestScore;
}

console.log(findWinner());
