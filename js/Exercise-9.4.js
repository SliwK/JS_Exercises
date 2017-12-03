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
