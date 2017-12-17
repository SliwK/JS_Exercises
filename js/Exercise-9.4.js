/* pierwsza próba - choinka niewyrównana

function drawTree (h) {
for(i = 0; i < h; i++) {
  var star = "";
  for(j = 0; j < i; j++) {
    star += "*";
  }
  console.log(star);
}
}

var tree = drawTree(8);
*/

/* Choinka w mmiarę równa ale wymagajaca dużywch wartości do funkcji

function drawTree (h) {
for(i = 0; i < h; i++) {
  var space = h;
  var star = "".padStart(h--);
  for(j = 0; j < i; j++) {
    star += "*".repeat(2);
  }
  console.log(star);
}
}

var tree = drawTree(20); //choinka nie jest wysoka na 20 poziomów ale na 10
*/

//Trzecia próba - najbliższa oczekiwaniom
/*
function drawTree (h) {
for(i = 0; i < h; i++) {
  var star = '' ;
  star += " ".repeat(h - i);
  star += "*".repeat(2 * i + 1);

  console.log(star);
}
}
var tree = drawTree(10);
*/

//podejście z for'ami i repeat'ami
/*
var h = 5;
for(i = 0; i < h; i++) {
  var gap = " ";
  gap = " ".repeat(h-(i+1));
  var star = "*";
  star = "*".repeat(2*i+1);
 console.log(gap+star);
}
*/

//choinka oparta na for'ach ..ale trzech :(

function drawTree(height) {
  for (var level = 0; level <= height; level++) {
    var result = '';
    for (i=level;i<height;i++) {
      result += '  ';
    }
    for (i=0;i<level;i++) {
      result += "* ";
    }
    for (i=0;i<level;i++) {
      result += "* ";
    }
    console.log(result);
  }
}

drawTree(8);
