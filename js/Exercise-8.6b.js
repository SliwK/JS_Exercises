function calculateFormula() {
var a = document.getElementById("var-a").value;
var b = document.getElementById("var-b").value;

var text;
var calculation = (a * a) - (2 * a * b) + (b * b);

switch (calculation) {
    case calculation > 0:
        text = 'Wynik dodatni';
        console.log('Wynik dodatni');
        break;
    case calculation < 0:
        text = 'Wynik ujemny';
        console.log('Wynik ujemny');
        break;
    case calculation = 0:
        text = 'Wynik równy zero';
        console.log('Wynik jest równy zero');
        break;
    default:
        text = 'Niepoprawne dane - spróbuj jeszcze raz!';
}

document.getElementById("result-8.6b").innerHTML = (text + ' - czyli:' + calculation);

}
