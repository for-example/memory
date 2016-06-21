initModule = function (  ) {

/* global variables */
  var cards = [
    "Dame pan y llámame tonto",
    "Maestro Ciruela, que no sabía leer y puso escuela",
    "Abad avariento, por un bodigo pierde ciento",
    "Comiendo viene el apetito",
    "Menos bulto más claridad",
    "Esto aun está en veremos",
    "Más vale prevenir que curar",
    "A la vaca brava Dios la quita los cuernos",
    "Más hacer y menos decir",
    "Al pájaro se le conoce por su vuelo",
    "En boca cerrada no entran moscas",
    "Un lobo a otro no se muerden",
    "El que no se arriesga no pasa la mar",
    "Mente sana en cuerpo sano",
    "Guárdate del agua mansa",
    "En cada tierra su uso y en cada casa su costumbre",
    "Bien está lo que bien acaba",
    "El tiempo es oro",
    "El tiempo es el mejor medico",
    "A gran río, gran puente",
    "Mucho ruído y pocas nueces"
  ]

/* state variables */
  var current = 0;

/* setup */
  setup = function() {
    $( ".next" ).click( onNext );
    $( "#header-load-file" ).change( onLoadFile );
    showCurrent();
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
      
      showCurrent();
      return false;
    };
    reader.readAsText(file); 
  }

  onNext = function () {
    current = Math.floor(Math.random() * cards.length); 
    showCurrent();
    return false;
  }

/* end event handlers */   



/* start utility */

  showCurrent = function () {
    if (current == null || current > cards.length - 1 ) current = 0;
    $("#card_text").html("<h2>"+cards[current]+"</h2>");
    $("#card_number").html(current);
    return false;
  }
  
  load_json = function ( str ) {
    var obj = JSON.parse(str);
    cards = obj;
  }
/* end utility */ 

  setup();
};
