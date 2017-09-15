$(document).ready(function() {

    MatchGame.renderCards(MatchGame.generateCardValues(), $('#game'));

});

var MatchGame = {};
/*
  Sets up a new game after HTML document has loaded.
  Renders a 4x4 board of cards.
*/

/*
  Generates and returns an array of matching card values.
 */

MatchGame.generateCardValues = function () {
    var cardVals = [];
    var randomCardVals = [];
    for (var i=1; i<9; i++) {
        cardVals.push(i);
        cardVals.push(i);
    }
    while (cardVals.length > 0) {
        var index = Math.floor(Math.random() * cardVals.length);
        randomCardVals.push(cardVals[index]);
        cardVals.splice(index,1);
    }
    return randomCardVals;
};

/*
  Converts card values to jQuery card objects and adds them to the supplied game
  object.
*/

MatchGame.renderCards = function(cardValues, $game) {
   $game.empty();
   $game.data('flippedCards', []);
   var colors = [25,55,90,160,220,265,310,360];
   for (var i=0; i<cardValues.length; i++) {
       var $card = $('<div class="col-xs-3 card"></div>');
       $card.data('value', cardValues[i]);
       $card.data('flipped', false);
       $card.data('color', colors[cardValues-1]);
       $game.append($card);
   }
};

/*
  Flips over a given card and checks to see if two cards are flipped over.
  Updates styles on flipped cards depending whether they are a match or not.
 */

MatchGame.flipCard = function($card, $game) {
    if($card.data('flipped')===false) {
        $card.css("background-color", "hsl({$card.data('color')}, 85%, 65%)");
        $card.text($card.data('value'));
        $card.data('flipped', true);
        $game.data('flippedCards').push($card);
        if($game.data('flippedCards').length >1) {
            //if (match) {
                //change card styling for match
            //}
        }
    }


};