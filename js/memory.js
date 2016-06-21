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
    current = 0;
    showCurrent();
    $( "#next" ).click( onNext );
    $( "#header-load-file" ).change( onLoadFile );
    return false;
  }
/* end setup */


/* event handlers */  

  onLoadFile = function(e) {
    var file = e.target.files[0]; 
    var json_str;
    if (!file) {
      return;
    }
    var reader = new FileReader();
    reader.onload = function(e) { 
      json_str = e.target.result; 
      load_json(json_str);
      setup();
      return false;
    };
    reader.readAsText(file); 
  }

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
  
  load_json = function ( str ) {
    var obj = JSON.parse(str);
    cards = obj;
  }
/* end utility */ 

  setup();
};
