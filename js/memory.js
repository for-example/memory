initModule = function (  ) {

/* global variables */
  var cards = [
    'Item 1',
    'Item 2',
    'Item 3'
  ]

/* state variables */
  var current = 0;

/* setup */
  setup = function() {
    $("#card").html("<h2>"+cards[current]+"</h2>");
  }
/* end setup */


/* event handlers */  

/* end event handlers */   



/* start utility */

/* end utility */ 

  setup();
};
