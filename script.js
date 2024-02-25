let x = prompt("Input x");
let y = prompt("Input y");
let mult = x * y;
//alert(mult);
if (isNaN(mult)) {
  alert("Error!!!!");
} else if (x > 0 && y > 0) {
  alert(mult);
} else {
  alert("x and y must be > 0");
}
