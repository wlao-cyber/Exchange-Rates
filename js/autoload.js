import { euro_rate, cad_rate, hkd_rate, yen_rate, peso_rate } from "/rates.js";

export function autoload()
{

// Typically, you need the ids to be declared first before using innerHTML
    // This will be null because ids are not declared yet.
    // To prevent this, put this inside a function that loads immediately
document.getElementById("euro").innerHTML = euro_rate;
document.getElementById("cad").innerHTML = cad_rate;
document.getElementById("hkd").innerHTML = hkd_rate;
document.getElementById("yen").innerHTML = yen_rate;
document.getElementById("peso").innerHTML = peso_rate;


document.getElementById("euro2").innerHTML = euro_rate;
document.getElementById("cad2").innerHTML = cad_rate;
document.getElementById("hkd2").innerHTML = hkd_rate;
document.getElementById("yen2").innerHTML = yen_rate;
document.getElementById("peso2").innerHTML = peso_rate;

}
