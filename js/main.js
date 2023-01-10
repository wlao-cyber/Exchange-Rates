//jQuery to Show/Hide Instructions
$(document).ready(function(){
$("#flip").click(function(){
    $("#backgroundinfo").slideToggle("slow");
});
});

// the jQuery script needs to use "#results" with # in front or just "textarea"
// placing the jQuery script first before the function seems to allow fading
// before results show up.

$(document).ready(function(){
$("#fade").click(function(){
    $("#console").fadeTo("slow",0.25);
});
});

// Adding another jQuery script to give the option of unfading
$(document).ready(function(){
$("#unfade").click(function(){
    $("#console").fadeTo("slow",1);
});
});

// import { euro_rate, cad_rate, hkd_rate, yen_rate, peso_rate } from "./rates.js";

import {autoload} from "./autoload.js"
import { calculations } from "./calculations.js";
import {reset } from "./reset.js"

// autoload();
// calculations();

//  modules will have its own scope. They are not available in the global scope like the normal scripts.
window.autoload = autoload;
window.calculations = calculations;
window.reset = reset;

// autoload();
// calculations();