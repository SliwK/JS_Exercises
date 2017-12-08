var text = 'Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.';
var dinosaur = 'triceratops';
var dinosaurUpper = dinosaur.toUpperCase();

// console.log(text);

var textAfter = text.replace('Velociraptor', dinosaurUpper);

//console.log(textAfter);
console.log(textAfter.slice(0, textAfter.length/2));


//Zadanie 1 - funkcja przyjmujaca za argumenty stringa i określoną liczbę wyrazów (zwraca określoną liczbę wyrazów)

function numberOfWords(text, number) {
  var splittedText = text.split(" ");
// console.log(splittedText);
  if (number <= splittedText.length) {
    return splittedText.splice(0, number);
  } else {
    return 'text has only ' +splittedText.length +' words';
  }
}

console.log(numberOfWords("test test test test test test test test test test test test test test test test test test test", 20));

//Zadanie 2 - funkcja przyjmująca stringa i zwracająca go w odwrotnej kolejnonści
function myReverse(text) {
 var textSplitted =  text.split("");
 var textReversed = textSplitted.reverse();
 var textRevJoined = textReversed.join("");
 return textRevJoined;

}

console.log(myReverse("bocian"));

//Zadanie 3 - wykasowanie spacji ze stringa i zwrócenie jako ciągu

function myTrimmer(text) {
 var textTrimmed = text.replace(/\s+/g, '');
 return textTrimmed;

}

console.log(myTrimmer("text without spaces"));


//Zadanie 4 - funkajca która zwróci co drugą literę małą

function toUpperCase(text){
  var letter = text.split('');
//  console.log(letter);
  var mixedLetters = letter.map(function(element, i) {
    if(i%2 == 0)
      return (element).toLowerCase();
    else
      return (element).toUpperCase();
  });
  return mixedLetters.join('');
}

console.log(toUpperCase("test test test"));

//Zadanie 5 - funkcja przyjmująca stringa i literę i zwracająca tablicę z indeksami wystąpień tej litery

function letterIndex(text, letter) {
  var splittedText = text.split("");
 // console.log(a);
  var numberedElements = splittedText.map(function (element, i) { if (element == letter) return i; });
 // console.log(b);
  var indexArray = numberedElements.filter(function (value) { return value >= 0; });
  return indexArray;
}

console.log(letterIndex("test test test", "t"));
