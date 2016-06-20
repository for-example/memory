initModule = function (  ) {

/* global variables */
  var cards = [
    'Item 1',
    'A longer Item 2',
    'A long long long long long long long long long long long long long long long long long long long long Item 3'
  ]

/* state variables */
  var current = 0;

/* setup */
  setup = function() {
    showCurrent();
    $( "#next" ).click( onNext );
  }
/* end setup */


/* event handlers */  

  onNext = function () {
    current = (current + 1) % cards.length;
    showCurrent();
    return false;
  }

/* end event handlers */   



/* start utility */

  showCurrent = function () {
    $("#card_text").html("<h2>"+cards[current]+"</h2>");
    return false;
  }
/* end utility */ 

  setup();
};
