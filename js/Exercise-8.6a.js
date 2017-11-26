var a = prompt('Podaj zmienną \"a\":');
var b = prompt('Podaj zmienną \"b\":');

var calculation = (a * a) - (2 * a * b) + (b * b);

if (calculation > 0) {
  console.log('Wynik dodatni');
} else if (calculation < 0) {
  console.log('Wynik ujemny');
} else {
  console.log('Wynik jest równy zero');
}
