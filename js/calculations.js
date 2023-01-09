import { euro_rate, cad_rate, hkd_rate, yen_rate, peso_rate } from "/rates.js";

function calculations()
{

// autoload(euro, cad, hkd, yen, peso);
var number1, int1;
number1 = document.getElementById("usd_amount").value;

//parseInt to normalize number input into integers
//parseInt will also return NaN if input is NOT a number, as in the case of null input
int1 = parseInt(number1);

// add additional conversion check to ensure number
// number1_float = parseFloat(number1);

// Because of type="number" requirement in form inputs, only numbers should be allowed
// But still need to watch out for NaN if inputs are left blank. 
// if else statement checks if sum is an integer
// Otherwise, user will be asked to enter integer in each input box.
// This condition is still good for checking if there are any NaN but will force 
// the user to input a value in each input box.
if (Number.isInteger(int1))
{
    // Adding .toFixed(2) to make 2 decimal places for the dollar amount.
    document.getElementById("results_euro").value = (number1 * euro_rate).toFixed(2);
    document.getElementById("results_cad").value = (number1 * cad_rate).toFixed(2);
    document.getElementById("results_hkd").value = (number1 * hkd_rate).toFixed(2);
    document.getElementById("results_yen").value = (number1 * yen_rate).toFixed(2);
    document.getElementById("results_peso").value = (number1 * peso_rate).toFixed(2);

}
else{
    document.getElementById("console").value = "Please enter a number in the input box!";
}
}

export {calculations}; 
