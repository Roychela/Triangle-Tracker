function triangle() {
  var side1 = parseInt(document.getElementById("sideAB").value);
  var side2 = parseInt(document.getElementById("sideAC").value);
  var side3 = parseInt(document.getElementById("sideBC").value);

  var sumTwoSides1 = (side1+side2);
  var sumTwoSides2 = (side1+side3);
  var sumTwoSides3 = (side2+side3);

  if (side1===side2 && side1===side3) {
    alert("This is an equilateral triangle");
  } else if (side1===side2 && side1!==side3) {
      alert ("This is an Isosceles triangle");
  }
    else if (side1===side3 && side1!==side2) {
      alert ("This is an Isosceles triangle");
  }
    else if (side2===side3 && side2!==side1) {
      alert ("This is an Isosceles triangle");
  }
    else if (side1!==side2 && side2!==side3) {
      alert("This is a scalene triangle");
  }
}
