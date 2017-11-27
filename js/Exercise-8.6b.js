function calculateFormulaTwo() {
var c = document.getElementById("varC").value;
var d = document.getElementById("varD").value;

var text;
var calculationTwo = (c * c) - (2 * c * d) + (d * d);

switch (true) {
    case (varC.value.trim() === "" || varD.value.trim() == ""):
        text = 'Niepoprawne dane - spróbuj jeszcze raz!';
        break;
    case (calculationTwo > 0):
        text = 'Wynik dodatni';
        console.log('Wynik dodatni');
        break;
    case (calculationTwo < 0):
        text = 'Wynik ujemny';
        console.log('Wynik ujemny');
        break;
    case (calculationTwo == 0):
        text = 'Wynik równy zero';
        console.log('Wynik jest równy zero');
        break;

}

document.getElementById("result-8.6b").innerHTML = text;

}
