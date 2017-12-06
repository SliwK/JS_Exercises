var femaleNames = ['Asia', 'Kasia', 'Ola', 'Jola'];
var maleNames = ['Piotrek', 'Marek', 'Arek', 'Jarek'];

var allNames = femaleNames.concat(maleNames);

console.log(allNames);

var newName = 'Marian';

if (allNames.indexOf(newName) === -1) {
  allNames.push(newName);
  console.log(allNames);
}
else {
  console.log('error');
}

//Zadanie 1 - wyświetl listę imion na M
var allNames1 = allNames.filter(function (name) {
    return name[0] === "M";
});


console.log('Filtered by "M": ' + allNames1);

//Zadanie 2 - wyswietl imiona dłuższe niż 5 znaków

var longerThenFive = allNames.filter(function(name) {
    return name.length > 5;
});
console.log('Names longer then 5 letters: ' + longerThenFive);

// Zadanie 3 - wyswietl sumę znaków wszystkich imion

/* pierwsze rozwiązanie (działające)

var long = allNames.map(function(long) {
  return long.length;
});

var sum = long;

function getSum(total, num) {
    return total + num;
}
console.log('Sum is equal to: ' + sum.reduce(getSum));
*/

//drugie rozwiazanie
var long = allNames.reduce(function(result, name) {
  return result + name.length;
}, 0);

console.log(long);


//Zadanie 4!!!!- wyświetl zmapowane wartości imię razem z ilością znaków imienia

var namesWithLength = allNames.map(function(name) {
for (i = 0; i < allNames.length; i++) {
  return name + name.length;
}
});
  console.log(namesWithLength);




//Zadanie 5 - posortuj imiona alfabetycznie

allNames.sort();

console.log('Sorted names: ' + allNames);

//Zadanie 6 - odwrócenie kolejności w tablicy

allNames.reverse();

console.log('Descending sort : ' + allNames);

//Zadanie 7 - sprawdź, czy jakieś imie zaczyna się na K

/* pierwsze rozwiazanie
var nameCheck = allNames.filter(/./.test.bind(/^K/));
if(nameCheck == "") {
  console.log('there is no name that begins with "K"');
} else {
console.log('there is a name that begins with "K"');
}
*/

var firstLetter = allNames.slice(0);

function checkLetter(letter) {
    return letter[0] == "K";
}

console.log(firstLetter.some(checkLetter));

//Zadanie 8 - wycięcie elementów z pozycji 2-4

var shortNameList = allNames.splice(2,4);

console.log('Name list after splice action: ' + allNames);
console.log('Spliced names: ' + shortNameList);


//Zadanie 9 - usuwanie duplikatów
var duplicates = [1,1,2,2,3,3,4,4,5,5];


var unique = duplicates.filter(function(elem, index, self) {
    return index === self.indexOf(elem);
});

console.log(unique);
