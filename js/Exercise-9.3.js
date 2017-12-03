var text = 'Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.';
var dinosaur = 'triceratops';
var dinosaurUpper = dinosaur.toUpperCase();

// console.log(text);

var textAfter = text.replace('Velociraptor', dinosaurUpper);

//console.log(textAfter);
console.log(textAfter.slice(0, textAfter.length/2));
