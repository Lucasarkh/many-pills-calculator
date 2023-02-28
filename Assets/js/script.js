function getValueComp() {
  var selectedValueComp = parseFloat(document.getElementById("comp").value);
  //console.log(selectedValueComp);
  return selectedValueComp;
}

function getValueInterval() {
  var selectedValueInterval = parseFloat(
    document.getElementById("interval").value
  );
  //console.log(selectedValueInterval);
  return selectedValueInterval;
}

function getValueDays() {
  var selectedValueDays = parseFloat(document.getElementById("days").value);
  //console.log(selectedValueDays);
  return selectedValueDays;
}

function calculate() {
  var multiply = parseFloat(
    getValueComp() * getValueDays() * getValueInterval()
  );

  if (isNaN(multiply)) {
    multiply = null;
  }
  document.getElementById("result").innerHTML = multiply;
}

/*function validate() {
  var alertMsg = document.getElementById("button-span");
  var button = document.getElementById("button");

  if (isNaN(calculate.multiply())) {
    function myFunction() {
      alertMsg.innerHTML = "Selecione as quantidades!";
    }
    button.addEventListener("click", myFunction);
  }
}
