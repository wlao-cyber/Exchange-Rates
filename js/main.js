// import { euro_rate, cad_rate, hkd_rate, yen_rate, peso_rate } from "rates.js";

import {autoload} from "autoload.js"
import { calculations } from "calculations.js";
import {reset } from "reset.js"

// autoload();
// calculations();

//  modules will have its own scope. They are not available in the global scope like the normal scripts.
window.autoload = autoload;
window.calculations = calculations;
window.reset = reset;

// autoload();
// calculations();
