function calculateFormula() {
var a = document.getElementById("varA").value;
var b = document.getElementById("varB").value;

var text;
var calculation = (a * a) - (2 * a * b) + (b * b);

if (varA.value.trim() == "" || varB.value.trim() === "") {
    alert("Brak danych!");
    return false;
    } else if (true) {
         if(calculation > 0) {
          text = 'Wynik dodatni';
          console.log('Wynik dodatni');
        } else if (calculation < 0) {
          text = 'Wynik ujemny';
          console.log('Wynik ujemny');
        } else {
          text = 'Wynik równy zero';
          console.log('Wynik jest równy zero');
        }

document.getElementById("result-8.6a").innerHTML = (text + ' - czyli:' + calculation);

    }
}
