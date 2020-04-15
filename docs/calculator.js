var isVal1Entered = false;
var val1;
var val2;
var sum = 0;
var action;

var numbers = [
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
];

function enterVal1(event) {
  if (isVal1Entered === false) {
    val1 = Number(event.target.textContent);
    console.log(val1);
    isVal1Entered = true;
  } else {
    val2 = Number(event.target.textContent);
    console.log(val2);
  }
}

for (var i = 0; i < numbers.length; i++) {
  document.getElementById(numbers[i]).addEventListener("click", enterVal1);
}

document.getElementById("plus").addEventListener("click", function () {
  action = "plus";
});
document.getElementById("minus").addEventListener("click", function () {
  action = "minus";
});
document.getElementById("multiply").addEventListener("click", function () {
  action = "multiply";
});
document.getElementById("divide").addEventListener("click", function () {
  action = "divide";
});
document.getElementById("reset").addEventListener("click", function () {
  isVal1Entered = false;
  sum = 0;
  document.getElementById("result-output").textContent = sum;
});

document.getElementById("result").addEventListener("click", function () {
  if (action === "plus") {
    sum = val1 + val2;
  } else if (action === "minus") {
    sum = val1 - val2;
  } else if (action === "multiply") {
    sum = val1 * val2;
  } else if (action === "divide") {
    sum = val1 / val2;
  }

  document.getElementById("result-output").textContent = sum;
  console.log(
    "result is" + " " + sum,
    document.getElementById("result-output")
  );
});
