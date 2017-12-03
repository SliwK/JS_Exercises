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

//lista imion na M
var allNames1 = allNames.filter(/./.test.bind(/^M/));

console.log('Filtered by "M": ' + allNames1);

//imiona dłuższe niż 5 znaków

var longerThenFive = allNames.filter(function(name) {
    return name.length > 5;
});
console.log('Names longer then 5 letters: ' + longerThenFive);

//suma znaków wszystkich imion
var lengths = allNames.map(function(lengths) {
  return lengths.length;
});

//console.log(lengths);


var sum = lengths;

function getSum(total, num) {
    return total + num;
}
console.log('Sum is equal to: ' + sum.reduce(getSum));


//mapowanie imię i ilość znaków imienia

for (i = 0; i <allNames.length; i++) {
  var nameList = allNames[i]+[i];
  console.log(nameList);
}


//posortuj imiona alfabetycznie

allNames.sort();

console.log('Sorted names: ' + allNames);

//odwrócenie kolejności w tablicy

allNames.reverse();

console.log('Descending sort : ' + allNames);

//sprawdź, czy jakieś imie zaczyna się na K

var nameCheck = allNames.filter(/./.test.bind(/^K/));
if(nameCheck == "") {
  console.log('there is no name that begins with "K"');
} else {
console.log('there is a name that begins with "K"');
}

//wycięcie elementów z pozycji 2-4

var shortNameList = allNames.splice(2,4);

console.log('Name list after splice action: ' + allNames);
console.log('Spliced names: ' + shortNameList);


//usuwanie duplikatów
var duplicates = [1,1,2,2,3,3,4,4,5,5];


var unique = duplicates.filter(function(elem, index, self) {
    return index === self.indexOf(elem);
});

console.log(unique);
