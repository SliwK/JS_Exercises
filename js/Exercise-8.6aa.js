document.getElementById("varAA").addEventListener("change", calculateFormula);
document.getElementById("varBB").addEventListener("change", calculateFormula);

function calculateFormula() {

var e = document.getElementById("varAA").value;
var f = document.getElementById("varBB").value;
var calculation = (e * e) - (2 * e * f) + (f * f);
var text;

if (e =="" || f == "") {
    alert("Brak danych!");
    return false;
  } else if(calculation > 0) {
          text = 'Wynik dodatni';
          console.log('Wynik dodatni');
        } else if (calculation < 0) {
          text = 'Wynik ujemny';
          console.log('Wynik ujemny');
        } else {
          text = 'Wynik równy zero';
          console.log('Wynik jest równy zero');
        }


document.getElementById("result-8.6aa").innerHTML = (text + ' - czyli:' + calculation);

}
