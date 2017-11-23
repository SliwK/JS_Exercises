var a = prompt('Enter triangle base:');
var h = prompt('Enter triangle height:');
var triangleArea = a*h/2;

if (a > 0 && h > 0) {
    alert('Triangle field with base a: ' + a + ' and height h: ' + h + ' is equal to: ' + triangleArea);
  } else {
    alert('Do you really know how triangle looks like?');
  }

console.log('Triangle field with base a: ' + a + ' and height h: ' + h + ' is equal to: ' + triangleArea);
