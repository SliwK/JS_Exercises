function getTriangleArea(e, f) {

if (Number(e) > 0 && Number(f) > 0) {
    return e*f/2;
  }
  else
  {
     alert('Nieprawidłowe dane');
     return false;
  }
}
console.log(getTriangleArea(10, 44));

var triangle1Area = getTriangleArea(10, 15);
var triangle2Area = getTriangleArea(10, 69);
var triangle3Area = getTriangleArea(177, 15);

console.log('triangle1Area wynosi: ' + triangle1Area);
console.log('triangle2Area wynosi: ' + triangle2Area);
console.log('triangle3Area wynosi: ' + triangle3Area);
