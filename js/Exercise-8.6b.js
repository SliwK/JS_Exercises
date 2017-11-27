function calculateFormulaTwo() {
var c = document.getElementById("var-c").value;
var d = document.getElementById("var-d").value;

var text;
var calculationTwo = (c * c) - (2 * c * d) + (d * d);

switch (true) {
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
    default:
        text = 'Niepoprawne dane - spróbuj jeszcze raz!';
}

document.getElementById("result-8.6b").innerHTML = (text + ' - czyli:' + calculationTwo);

}
