function display(num) {
  var ipText = document.getElementById("ip-text");
  var ipVal = ipText.value;
  ipVal = ipVal+num;
  ipText.value = ipVal;
}

function displayDot() {
  var ipText = document.getElementById("ip-text");
  var ipVal = ipText.value;
  if (ipVal.indexOf('.') <= -1) {
    ipVal = ipVal+".";
    ipText.value = ipVal;
  }
}

var num1;
var op;

function plus() {
  var ipText = document.getElementById("ip-text");
  num1 = ipText.value;
  ipText.value = "";
  op="+"
}

function minus() {
  var ipText = document.getElementById("ip-text");
  num1 = ipText.value;
  ipText.value = "";
  op="-"
}

function multiply() {
  var ipText = document.getElementById("ip-text");
  num1 = ipText.value;
  ipText.value = "";
  op="*"
}

function divide() {
  var ipText = document.getElementById("ip-text");
  num1 = ipText.value;
  ipText.value = "";
  op="/"
}

function equal() {
  var ipText = document.getElementById("ip-text");
  var num2 = ipText.value;
  if (op=="+") {
    ipText.value = parseInt(num1) + parseInt(num2);
  }else if (op=="-") {
    ipText.value = parseInt(num1) - parseInt(num2);
  }else if (op=="*") {
    ipText.value = parseInt(num1) * parseInt(num2);
  }else {
    ipText.value = parseInt(num1) / parseInt(num2);
  }
}
