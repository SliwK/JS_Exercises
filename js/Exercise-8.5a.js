function calculateTriangleArea() {
var a = document.getElementById("base").value;
var h = document.getElementById("height").value;
//var a = prompt('Enter triangle base:');
//var h = prompt('Enter triangle height:');
var triangleArea = Number(a)*Number(h)/2;

if (Number(a) > 0 && Number(h) > 0) {
    alert('Triangle field with base a: ' + a + ' and height h: ' + h + ' is equal to: ' + triangleArea);
  } else {
    alert('Do you really know how triangle looks like?');
  }

  document.getElementById("result").innerHTML = triangleArea;

  console.log('Triangle field with base a: ' + a + ' and height h: ' + h + ' is equal to: ' + triangleArea);
}
