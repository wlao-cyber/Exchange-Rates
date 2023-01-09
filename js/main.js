// import { euro_rate, cad_rate, hkd_rate, yen_rate, peso_rate } from "https://github.com/wlao-cyber/Exchange-Rates/blob/main/js/rates.js";

import {autoload} from "https://github.com/wlao-cyber/Exchange-Rates/blob/main/js/autoload.js"
import { calculations } from "https://github.com/wlao-cyber/Exchange-Rates/blob/main/js/calculations.js";
import {reset } from "https://github.com/wlao-cyber/Exchange-Rates/blob/main/js/reset.js"

// autoload();
// calculations();

//  modules will have its own scope. They are not available in the global scope like the normal scripts.
window.autoload = autoload;
window.calculations = calculations;
window.reset = reset;

// autoload();
// calculations();
